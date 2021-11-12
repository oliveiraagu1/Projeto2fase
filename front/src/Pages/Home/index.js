import React from 'react';
import { Image, ScrollView, Text, StatusBar, SafeAreaView } from 'react-native';
import Restaurantes from '../../Assets/categorias/restaurantes.svg'
import Boates from '../../Assets/categorias/boates.svg'
import Praias from '../../Assets/categorias/praias.svg'
import Atracoes from '../../Assets/categorias/atracoes.svg'
import PontosHistoricos from '../../Assets/categorias/pontoshistoricos.svg'
import Logo from '../../Assets/logo.svg'


import * as G from '../../styles/styles_adm';
import * as C from './style';


const THEME_COLOR = '#1E88E5';



const Home = () => {



    return (

        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: THEME_COLOR }}></SafeAreaView>
            <C.Container  >
                
                    <C.ContainerHeader>
                        <C.SubContainerHeader >

                        <C.TextUser>Olá exemplo!</C.TextUser>
                        

                            <C.ContainerLogo>
                                <Logo width={100} height={100} />
                            </C.ContainerLogo>
                            
                        <C.ContainerSelect>
                            <C.Title>Selecione uma região</C.Title>
                            <Text>Ingleses</Text>
                        </C.ContainerSelect>
                        </C.SubContainerHeader>
                    </C.ContainerHeader>
               

                <C.ContainerPai>
                    <ScrollView>
                        <C.ContainerButtons>
                            <C.ButtonsCategorias>
                                <Restaurantes width={60} height={60} paddingVertical={38} />
                                <C.ButtonText>RESTAURANTES</C.ButtonText>
                            </C.ButtonsCategorias>

                            <C.ButtonsCategorias>
                                <Boates width={60} height={60} paddingVertical={38} />
                                <C.ButtonText>BOATES</C.ButtonText>
                            </C.ButtonsCategorias>
                        </C.ContainerButtons>

                        <C.ContainerButtons>
                            <C.ButtonsCategorias>
                                <Atracoes width={50} height={50} paddingVertical={38} />
                                <C.ButtonText>ATRAÇOES</C.ButtonText>
                            </C.ButtonsCategorias>

                            <C.ButtonsCategorias>
                                <Praias width={50} height={43} paddingVertical={38} />
                                <C.ButtonText>PRAIAS</C.ButtonText>
                            </C.ButtonsCategorias>
                        </C.ContainerButtons>

                        <C.ContainerButtons>
                            <C.ButtonPontosHistoricos>
                                <PontosHistoricos width={50} height={43} paddingVertical={38} />
                                <C.ButtonText>PONTOS HISTÓRICOS</C.ButtonText>
                            </C.ButtonPontosHistoricos>
                        </C.ContainerButtons>
                    </ScrollView>
                </C.ContainerPai>


            </C.Container>

        </>
    )

}



export default Home;