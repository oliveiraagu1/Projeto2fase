import React from 'react';
import {Text} from 'react-native'

import {Container, Image, Titulo, Button} from './style';

const Inicio = ({navigation}) => {

    return(

        <Container>
            <Image
                source={require('../../Assets/logo.png')}
            />
            <Titulo>PLACES TO GO</Titulo>
            <Button onPress={() => navigation.navigate('Login')}>
                <Text style={{fontWeight:'bold'}}>ENTRAR</Text>
            </Button>
            <Button onPress={() => navigation.navigate('Cadastro')}>
                <Text style={{fontWeight:'bold'}}>CADASTRAR-SE</Text>
            </Button>
        </Container>
    )
}

export default Inicio;