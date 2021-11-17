import React from "react";
import {
  TitlePontosHistoricos,
  ButtonCatedral,
  ButtonPalacio,
  Imagem,
  ImagemCatedral,
  ContainerPontos,
  Container,
  ImagemPequena,
  ButtonFortaleza,
  ButtonVoltar,
  ContainerHeader,
  ButtonPraca,
  ContainerEngenho,
} from "./styles";
import { ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const PontosHistoricos = ({navigation}) => {
  return (
    <ScrollView>
      <ContainerPontos>
        <ContainerHeader>
          <TitlePontosHistoricos>PONTOS HISTÓRICOS</TitlePontosHistoricos>
          <ButtonVoltar onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="black" />
          </ButtonVoltar>
        </ContainerHeader>
        <ButtonPalacio>
          <Imagem source={require("./assets/palacio-cruz-e-sousa.jpeg")} />
        </ButtonPalacio>
        <Container>
          <ButtonFortaleza>
            <ImagemPequena source={require("./assets/forte.png")} />
          </ButtonFortaleza>
          <ButtonCatedral>
            <ImagemCatedral source={require("./assets/catedral.png")} />
          </ButtonCatedral>
        </Container>
        <ButtonPraca>
          <ImagemPequena source={require("./assets/praca.png")} />
        </ButtonPraca>
        <ContainerEngenho>
          <Imagem source={require("./assets/engenho.jpeg")} />
        </ContainerEngenho>
      </ContainerPontos>
    </ScrollView>
  );
};
export default PontosHistoricos;
