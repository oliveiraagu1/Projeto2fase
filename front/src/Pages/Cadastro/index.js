import React, {useState} from 'react';

import * as G from '../../styles/styles_adm';
import * as C from './style';
import api from '../../Services/Api/api';

const Cadastro = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [usuer, setUser] = useState('');
    const [password, setPassword] = useState('');

    const cadastrar = async () => {
        //navigation.navigate('Login');

        const result = await api.get('cadastro')
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
            console.log('estou no erro')
        })
    }

    return(

        <C.Container>
            <C.Scroll>
            <C.Title>CADASTRE-SE</C.Title>
            <G.Texto>Email</G.Texto>
            <G.Input
                onChangeText={text => setEmail(text)}
            />
            <G.Texto>Nome de usuário</G.Texto>
            <G.Input
                onChangeText={text => setUser(text)}
            />
            <G.Texto>Senha</G.Texto>
            <G.Input
                onChangeText={text => setPassword(text)}
            />
            <G.Button onPress={cadastrar}>
                <G.TextButton>ENVIAR</G.TextButton>
            </G.Button>
            </C.Scroll>
        </C.Container>
    )
}

export default Cadastro;