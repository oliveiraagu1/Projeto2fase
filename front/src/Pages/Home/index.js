import React, { useState } from "react";
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
  const { dadosUser, setRegiao } = DadosUsers();

  const [select, setSelect] = useState("");

  const Rest = () => {
    if (select == 0) {
      return alert("É necessário escolher alguma região!");
    } else {
      setRegiao(select);
      navigation.navigate("Restaurantes");
    }
  };

  const Boat = () => {
    if (select == 0) {
      return alert("É necessário escolher alguma região!");
    } else {
      setRegiao(select);
      navigation.navigate("Boates");
    }
  };

  const Atrac = () => {
    if (select == 0) {
      return alert("É necessário escolher alguma região!");
    } else {
      setRegiao(select);
      navigation.navigate("Atracoes");
    }
  };

  const Praia = () => {
    if (select == 0) {
      return alert("É necessário escolher alguma região!");
    } else {
      setRegiao(select);
      navigation.navigate("Praias");
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Header dados={"Olá " + dadosUser.name + "!"} />
      <C.ViewInfo>
        <C.Title>Selecione uma região</C.Title>
        <C.SelectFlat />
        <Picker
          style={styled.pikcer}
          selectedValue={select}
          onValueChange={(number) => Number(setSelect(number))}
        >
          <Picker.Item key={0} value={1} label={"Selecione"} />
          <Picker.Item key={0} value={1} label={"Norte da ilha"} />
          <Picker.Item key={1} value={2} label={"Centro"} />
          <Picker.Item key={2} value={3} label={"Sul da ilha"} />
        </Picker>
      </C.ViewInfo>
      <C.ContainerPai>
        <ScrollView>
          <C.ContainerButtons>
            <C.ButtonsCategorias onPress={Rest}>
              <Restaurantes width={60} height={60} paddingVertical={38} />
              <C.ButtonText>RESTAURANTES</C.ButtonText>
            </C.ButtonsCategorias>

            <C.ButtonsCategorias onPress={Boat}>
              <Boates width={60} height={60} paddingVertical={38} />
              <C.ButtonText>BOATES</C.ButtonText>
            </C.ButtonsCategorias>
          </C.ContainerButtons>

          <C.ContainerButtons>
            <C.ButtonsCategorias onPress={Atrac}>
              <Atracoes width={50} height={50} paddingVertical={38} />
              <C.ButtonText>ATRAÇOES</C.ButtonText>
            </C.ButtonsCategorias>

            <C.ButtonsCategorias onPress={Praia}>
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
    backgroundColor: "#E3F2FD",
    marginTop: 5,
    marginBottom: 20,
    color: "#1976D2",
    fontSize: 16,
  },
});

export default Home;
