import React, {useState} from 'react';

import * as G from '../../Styles';
import * as C from './style';

const Cadastro = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [usuer, setUser] = useState('');
    const [password, setPassword] = useState('');

    const cadastrar = () => {
        //navigation.navigate('Login');
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