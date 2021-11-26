import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import Restaurantes from "../../Assets/categorias/restaurantes.svg";
import Boates from "../../Assets/categorias/boates.svg";
import Praias from "../../Assets/categorias/praias.svg";
import Atracoes from "../../Assets/categorias/atracoes.svg";
import PontosHistoricos from "../../Assets/categorias/pontoshistoricos.svg";
import Header from "../../Components/Header";
import { DadosUsers } from "../../Context/Contex";
import * as C from "./style";

const Home = ({ navigation }) => {
  const { dadosUser } = DadosUsers();
  return (
    <SafeAreaView style={{backgroundColor: "#1e88e5"}}>
      <Header dados={"Olá "+dadosUser.name+"!"} />
      <C.ViewInfo>
          <C.Title>Selecione uma região!</C.Title>
          <C.SelectFlat/>
        </C.ViewInfo>
      <C.ContainerPai>
  
        <ScrollView >
          <C.ContainerButtons>
            <C.ButtonsCategorias
              onPress={() => navigation.navigate("Restaurantes")}
            >
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
            <C.ButtonPontosHistoricos
              onPress={() => navigation.navigate("PontosHistoricos")}
            >
              <PontosHistoricos width={50} height={43} paddingVertical={38} />
              <C.ButtonText>PONTOS HISTÓRICOS</C.ButtonText>
            </C.ButtonPontosHistoricos>
          </C.ContainerButtons>
        </ScrollView>
      </C.ContainerPai>
    </SafeAreaView>
  );
};

export default Home;
