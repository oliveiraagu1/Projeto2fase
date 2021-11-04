import React from 'react';
import {View, Text} from 'react-native';

import { Button, Texto, Input, TextButton } from '../../Styles';

import {
    Container, 
    Title,
    EsqueciSenha,
}from './style';

const Login = ({navigation}) => {

    const logar = () => {

        navigation.navigate('Home');
    }

    return(

        <Container>
            <Title>ENTRAR</Title>
            <Texto>Email</Texto>
            <Input 

            />
            <Texto>Senha</Texto>
            <Input 
                secureTextEntry={true}

            />
            <EsqueciSenha>
                <Text style={{fontWeight:'bold', color:'#4961E1'}}>Esqueci minha senha</Text>
            </EsqueciSenha>
            <Button onPress={logar}>
                <TextButton>ENTRAR</TextButton>
            </Button>

        </Container>
    )
}

export default Login;