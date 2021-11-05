import React, {useState} from 'react';
import {StatusBar} from 'react-native';

import * as G from '../../styles/styles_adm';

import * as C from './style';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logar = () => {

        navigation.navigate('Home');
    };

    return (

        <C.Container>

            <StatusBar
                hidden={false}
            />

            <C.ImageTop
                source={require('../../Assets/Login/imageTop.png')}
            />

            <C.Login>

                <C.Title>ENTRAR</C.Title>
                <G.Texto>Email</G.Texto>
                <G.Input
                    onChangeText={text => setEmail(text)}
                />
                <G.Texto>Senha</G.Texto>
                <G.Input
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                />
                <C.EsqueciSenha>
                    <C.Text>Esqueci minha senha</C.Text>
                </C.EsqueciSenha>
                <G.Button onPress={logar}>
                    <G.TextButton>ENTRAR</G.TextButton>
                </G.Button>

                <C.ImageBot
                    source={require('../../Assets/Login/imageBot.png')}
                />
            </C.Login>

        </C.Container>
    )
}

export default Login;