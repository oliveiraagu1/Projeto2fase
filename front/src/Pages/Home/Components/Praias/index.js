import React, { useState } from "react";
import FlatListRest from "../flatListRest";
import { Feather } from "@expo/vector-icons";
import Header from "../../../../Components/Header";
import * as C from "../../../../styles/styles_adm";

const Praias = ({ navigation }) => {
  const [dados, setDados] = useState([
    {
      id: 1,
      title: "Praia de Canasvieiras",
      img: require("../teste4.jpg"),
      avaliacao: 4.5,
    },
    {
      id: 2,
      title: "Praia do Campeche",
      img: require("../teste4.jpg"),
      avaliacao: 4.8,
    },
    {
      id: 3,
      title: "Praia Brava",
      img: require("../teste4.jpg"),
      avaliacao: 5.0,
    },
    
  ]);
  return (
    <>
      <Header/>
      <C.HeaderInfo>
        <C.ButtonIcon onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={24} color="black" />
        </C.ButtonIcon>
        <C.TitlePraias>Praias</C.TitlePraias>
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

export default Praias;
