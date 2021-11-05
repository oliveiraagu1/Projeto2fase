import React from 'react';
import { StatusBar, Text, View, TouchableOpacity } from 'react-native';

import * as G from '../../styles/styles_adm';
import * as C from './style';

const Home = () => {

    return (

        <C.Container>
            <C.TextUser>Olá exemplo!</C.TextUser>
            <G.LogoImage
                source={require('../../Assets/logo.png')}
            />
            <C.Title>Selecione uma região</C.Title>
            <Text>Ingleses</Text>

            <G.MainViewInfo>
                <G.InfoView>
                    <G.InfoButton>
                        <G.InfoText>Restaurantes</G.InfoText>
                    </G.InfoButton>
                </G.InfoView>

                <G.InfoView>
                    <G.InfoButton>
                        <G.InfoText>Boates</G.InfoText>
                    </G.InfoButton>
                </G.InfoView>

                <G.InfoView>
                    <G.InfoButton>
                        <G.InfoText>Atrações</G.InfoText>
                    </G.InfoButton>
                </G.InfoView>

                <G.InfoView>
                    <G.InfoButton>
                        <G.InfoText>Praias</G.InfoText>
                    </G.InfoButton>
                </G.InfoView>

                <G.InfoView>
                    <G.InfoButton>
                        <G.InfoText>Pontos Historicos</G.InfoText>
                    </G.InfoButton>
                </G.InfoView>

            </G.MainViewInfo>

        </C.Container>
    )
}

export default Home;