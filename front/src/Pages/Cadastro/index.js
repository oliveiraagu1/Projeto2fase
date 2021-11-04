import React from 'react';
import {View, Text} from 'react-native';

import { Button, Texto, Input, TextButton} from '../../Styles';

import{
    Container,
    Title,
} from './style';

const Cadastro = ({navigation}) => {

    const cadastrar = () => {

        alert('Usuario cadastro com sucesso');
        navigation.navigate('Login');
    }

    return(

        <Container>
            <Title>CADASTRE-SE</Title>
            <Texto>Email</Texto>
            <Input/>
            <Texto>Nome de usuário</Texto>
            <Input/>
            <Texto>Senha</Texto>
            <Input/>
            <Button onPress={cadastrar}>
                <TextButton>ENVIAR</TextButton>
            </Button>
        </Container>
    )
}

export default Cadastro;