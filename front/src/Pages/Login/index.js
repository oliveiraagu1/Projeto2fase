import React from 'react';
import {Text} from 'react-native';

import { Button, Texto, Input, TextButton } from '../../Styles';

import {
    Container,
    Title,
    EsqueciSenha,
    ImageTop,
    Teste,
    ImageBot
} from './style';

const Login = ({ navigation }) => {

    const logar = () => {

        navigation.navigate('Home');
    };

    return (

        <Container>

            

            <ImageTop
                source={require('../../Assets/Login/imageTop.png')}
            />

            <Teste>

                <Title>ENTRAR</Title>
                <Texto>Email</Texto>
                <Input

                />
                <Texto>Senha</Texto>
                <Input
                    secureTextEntry={true}

                />
                <EsqueciSenha>
                    <Text style={{ fontWeight: 'bold', color: '#2E9AFE' }}>Esqueci minha senha</Text>
                </EsqueciSenha>
                <Button onPress={logar}>
                    <TextButton>ENTRAR</TextButton>
                </Button>

                <ImageBot
                    source={require('../../Assets/Login/imageBot.png')}
                />
            </Teste>

        </Container>
    )
}

export default Login;