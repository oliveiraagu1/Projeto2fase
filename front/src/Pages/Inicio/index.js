import React from 'react';
import { StatusBar } from 'react-native'

import * as C from './style';

const Inicio = ({ navigation }) => {

    return (
        <C.Container>
            <StatusBar
                hidden={true}
            />
            <C.Image
                source={require('../../Assets/logo.png')}
            />
            <C.Titulo>PLACES TO GO</C.Titulo>
            <C.Button onPress={() => navigation.navigate('Login')}>
                <C.Text>ENTRAR</C.Text>
            </C.Button>
            <C.Button onPress={() => navigation.navigate('Cadastro')}>
                <C.Text>CADASTRAR-SE</C.Text>
            </C.Button>
        </C.Container>
    )
}

export default Inicio;