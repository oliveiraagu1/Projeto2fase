import React from 'react';
import { StatusBar } from 'react-native'
import * as C from './style';

const Inicio = ({ navigation }) => {

    return (
        <C.Container>
            <C.Image
                source={require('../../Assets/logo-home.png')}
            />
            <C.ButtonEntrar onPress={() => navigation.navigate('Login')}>
                <C.TextEntrar>ENTRAR</C.TextEntrar>
            </C.ButtonEntrar>
            <C.ButtonCadastrar onPress={() => navigation.navigate('Cadastro')}>
                <C.TextCadastrar>CADASTRAR-SE</C.TextCadastrar>
            </C.ButtonCadastrar>
        </C.Container>
    )
}

export default Inicio;