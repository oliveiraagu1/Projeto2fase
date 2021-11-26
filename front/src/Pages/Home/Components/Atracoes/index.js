import React, { useState } from "react";
import FlatListRest from "../flatListRest";
import { Feather } from "@expo/vector-icons";
import Header from "../../../../Components/Header";
import * as C from "../../../../styles/styles_adm";

const Atracoes = ({ navigation }) => {
  const [dados, setDados] = useState([
    {
      id: 1,
      title: "Beto Carrero World",
      img: require("../teste3.jpg"),
      avaliacao: 3.5,
    },
    {
      id: 2,
      title: "Água Show Park",
      img: require("../teste3.jpg"),
      avaliacao: 4.5,
    },
    {
      id: 3,
      title: "Barco Pirata",
      img: require("../teste3.jpg"),
      avaliacao: 4.0,
    },
    
  ]);
  return (
    <>
      <Header/>
      <C.HeaderInfo>
        <C.ButtonIcon onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={24} color="black" />
        </C.ButtonIcon>
        <C.TitleAtracoes>Atrações</C.TitleAtracoes>
      </C.HeaderInfo>

      <C.MainView>
        <C.Main
          data={dados}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <FlatListRest data={item} />}
        />
      </C.MainView>
    </>
  );
};

export default Atracoes;
