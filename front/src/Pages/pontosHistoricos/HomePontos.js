import React from "react";
import * as C from "./styles";
import { ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const PontosHistoricos = ({navigation}) => {
  return (
    <ScrollView>
      <C.ContainerPontos>
        <C.ContainerHeader>
          <C.TitlePontosHistoricos>PONTOS HISTÓRICOS</C.TitlePontosHistoricos>
          <C.ButtonVoltar onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="black" />
          </C.ButtonVoltar>
        </C.ContainerHeader>
        <C.ButtonPalacio onPress={() => navigation.navigate('Palacio')}  >
          <C.Imagem source={require("./assets/palacio-cruz-e-sousa.jpeg")} />
        </C.ButtonPalacio>
        <C.Container>
          <C.ButtonFortaleza onPress={() => navigation.navigate('Forte')}>
            <C.ImagemPequena source={require("./assets/fortaleza.jpg")} />
          </C.ButtonFortaleza>
          <C.ButtonCatedral onPress={() => navigation.navigate('Catedral')}>
            <C.ImagemCatedral source={require("./assets/catedral.png")} />
          </C.ButtonCatedral>
        </C.Container>
        <C.ButtonPraca onPress={() => navigation.navigate('Praca')}>
          <C.ImagemPequena source={require("./assets/praca-xv.jpeg")} />
        </C.ButtonPraca>
        <C.ContainerEngenho onPress={() => navigation.navigate('Engenho')}>
          <C.Imagem source={require("./assets/engenho.jpeg")} />
        </C.ContainerEngenho>
      </C.ContainerPontos>
    </ScrollView>
  );
};
export default PontosHistoricos;
