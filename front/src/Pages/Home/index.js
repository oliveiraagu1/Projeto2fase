import React, { useRef, useState } from "react";
import { ScrollView, SafeAreaView, StyleSheet } from "react-native";
import Restaurantes from "../../Assets/categorias/restaurantes.svg";
import Boates from "../../Assets/categorias/boates.svg";
import Praias from "../../Assets/categorias/praias.svg";
import Atracoes from "../../Assets/categorias/atracoes.svg";
import PontosHistoricos from "../../Assets/categorias/pontoshistoricos.svg";
import Header from "../../Components/Header";
import { DadosUsers } from "../../Context/Contex";
import { Picker } from "@react-native-picker/picker";
import * as C from "./style";

const Home = ({ navigation }) => {
  const { dadosUser } = DadosUsers();

  const [teste, setTeste] = useState("");

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Header dados={"Olá " + dadosUser.name + "!"} />
      <C.ViewInfo>
        <C.Title>Selecione uma região</C.Title>
        <C.SelectFlat />
        <Picker
          style={styled.pikcer}
          selectedValue={teste}
          onValueChange={(text) => setTeste(text)}
        >
          <Picker.Item key={0}value={"Norte da ilha"}label={"Norte da ilha"}/>                
          <Picker.Item key={1} value={"Centro"} label={"Centro"} />
          <Picker.Item key={2} value={"Sul da ilha"} label={"Sul da ilha"} />
        </Picker>
      </C.ViewInfo>
      <C.ContainerPai>
        <ScrollView>
          <C.ContainerButtons>
            <C.ButtonsCategorias
              onPress={() => navigation.navigate("Restaurantes")}
            >
              <Restaurantes width={60} height={60} paddingVertical={38} />
              <C.ButtonText>RESTAURANTES</C.ButtonText>
            </C.ButtonsCategorias>

            <C.ButtonsCategorias
              onPress={() => navigation.navigate("Boates")}
            >
              <Boates width={60} height={60} paddingVertical={38} />
              <C.ButtonText>BOATES</C.ButtonText>
            </C.ButtonsCategorias>
          </C.ContainerButtons>

          <C.ContainerButtons>
            <C.ButtonsCategorias
               onPress={() => navigation.navigate("Atracoes")}
            >
              <Atracoes width={50} height={50} paddingVertical={38} />
              <C.ButtonText>ATRAÇOES</C.ButtonText>
            </C.ButtonsCategorias>

            <C.ButtonsCategorias
              onPress={() => navigation.navigate("Praias")}
            >
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

const styled = StyleSheet.create({
  pikcer: {
    width: 347, 
    height: 30, 
    backgroundColor: '#E3F2FD',
    marginTop: 5,
    marginBottom: 20,
    color: '#1976D2',
    fontSize: 16
  }
})

export default Home;
