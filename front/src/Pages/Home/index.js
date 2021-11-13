import React from 'react';
import { StatusBar, Text,ScrollView, View, TouchableOpacity } from 'react-native';
import Pontos from '../pontosHistoricos/Pontos'
import * as G from '../../styles/styles_adm';
import * as C from './style';

const Home = () => {

    const pontosHistoricos = () => {
        navigation.navigate('Pontos');
    };

    return (

        <C.Container>
            <C.TextUser>Olá exemplo!</C.TextUser>
            <G.LogoImage
                source={require('../../Assets/logo.png')}
            />
            <C.Title>Selecione uma região</C.Title>
            <Text>Ingleses</Text>

            <ScrollView>
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
                    <G.InfoButton onPress={Pontos}>
                        <G.InfoText>Pontos Historicos</G.InfoText>
                    </G.InfoButton>
                </G.InfoView>

            </G.MainViewInfo>
            </ScrollView>

        </C.Container>
    )
}

export default Home;