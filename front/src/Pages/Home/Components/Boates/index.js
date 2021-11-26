import React, { useState } from "react";
import FlatListRest from "../flatListRest";
import { Feather } from "@expo/vector-icons";
import Header from "../../../../Components/Header";
import * as C from "../../../../styles/styles_adm";

const Restaurantes = ({ navigation }) => {
  const [dados, setDados] = useState([
    {
      id: 1,
      title: "P12",
      img: require("../teste2.jpg"),
      avaliacao: 3.5,
    },
    {
      id: 2,
      title: "Stage Music Park",
      img: require("../teste2.jpg"),
      avaliacao: 4.5,
    },
    {
      id: 3,
      title: "Lontra",
      img: require("../teste2.jpg"),
      avaliacao: 0.5,
    },
    
  ]);
  return (
    <>
      <Header/>
      <C.HeaderInfo>
        <C.ButtonIcon onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={24} color="black" />
        </C.ButtonIcon>
        <C.TitleBoat>Boates</C.TitleBoat>
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

export default Restaurantes;
