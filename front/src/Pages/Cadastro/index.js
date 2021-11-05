import React from 'react';
import {View, Text} from 'react-native';

import { Button, Texto, Input, TextButton} from '../../Styles';

import{
    Container,
    Title,
    Scroll
} from './style';

const Cadastro = ({navigation}) => {

    const cadastrar = () => {

        alert('Usuario cadastro com sucesso');
        navigation.navigate('Login');
    }

    return(

        <Container>
            <Scroll>
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
            </Scroll>
        </Container>
    )
}

export default Cadastro;