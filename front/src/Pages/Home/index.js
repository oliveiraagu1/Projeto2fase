import React from 'react';
import {Text} from 'react-native';

import { LogoImage, TextButton } from '../../Styles';
import {
    Container,
    TextUser,
    Title,
    VerNome
} from './style';

const Home = () => {

    return(

        <Container>
            <TextUser>Olá exemplo!</TextUser>
            <LogoImage
                source={require('../../Assets/logo.png')}
            />
            <Title>Selecione uma região</Title>
            <Text>Ingleses</Text>
            <VerNome>
                <Text>Restaurantes</Text>
            </VerNome>
            <VerNome>
                <Text>Boates</Text>
            </VerNome>
            <VerNome>
                <Text>Atrações</Text>
            </VerNome>
            <VerNome>
                <Text>Praias</Text>
            </VerNome>
            <VerNome>
                <Text>Pontos Historicos</Text>
            </VerNome>
        </Container>
    )
}

export default Home;