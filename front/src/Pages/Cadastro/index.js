import React, { useState } from 'react';

import * as G from '../../styles/styles_adm';
import * as C from './style';
import api from '../../Services/Api/api';

const Cadastro = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const ValidaCadastro = async () => {

        if(email == '' || name == '' || password == ''){
            alert('Todos os campos precisam ser preenchidos!');
            return;
        };
        
        

        if(name.length < 3 || name.length > 50){
            alert('O nome deve ter entre 3 e 50 caracteres');
            return;
        };

        if(password.length < 6 || password.length > 30){
            alert('O nome deve ter entre 3 e 50 caracteres');
            return;
        };
    }

    const Cadastrar = async () => {

        ValidaCadastro();
        try{

            const result = await api.post('cadastro', {
                email,
                name,
                password
            });
            console.log(result.status);
            alert('Usuário cadastrado com sucesso!');
            navigation.navigate('Login');


        }catch(err){
            console.log(err.message);
            alert('Não foi possivel criar o usuário!')
        }
    };

    return (

        <C.Container>
            <C.Scroll>
                <C.Title>CADASTRE-SE</C.Title>
                <G.Texto>Email</G.Texto>
                <G.Input
                    onChangeText={text => setEmail(text)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                />
                <G.Texto>Nome de usuário</G.Texto>
                <G.Input
                    onChangeText={text => setName(text)}
                />
                <G.Texto>Senha</G.Texto>
                <G.Input
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <G.Button onPress={Cadastrar}>
                    <G.TextButton>ENVIAR</G.TextButton>
                </G.Button>
            </C.Scroll>
        </C.Container>
    )
}

export default Cadastro;