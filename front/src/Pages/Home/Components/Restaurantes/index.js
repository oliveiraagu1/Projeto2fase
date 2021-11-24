import React, { useState } from "react";
import FlatListRest from "./flatListRest";
import { Feather } from "@expo/vector-icons";
import * as C from "../../../../styles/styles_adm";

const Restaurantes = ({ navigation }) => {
  const [dados, setDados] = useState([
    {
      id: 1,
      title: "Restaurante do Quinha",
      img: require("./teste.jpg"),
      avaliacao: 2.5,
    },
    {
      id: 2,
      title: "Restaurante do Quinha",
      img: require("./teste.jpg"),
      avaliacao: 1.5,
    },
    {
      id: 3,
      title: "Restaurante do Quinha",
      img: require("./teste.jpg"),
      avaliacao: 5.0,
    },
    {
      id: 4,
      title: "Restaurante do Quinha",
      img: require("./teste.jpg"),
      avaliacao: 1.5,
    },
    {
      id: 5,
      title: "Restaurante do Quinha",
      img: require("./teste.jpg"),
      avaliacao: 2.5,
    },
    {
      id: 6,
      title: "Restaurante do Quinha",
      img: require("./teste.jpg"),
      avaliacao: 4.5,
    },
    {
      id: 7,
      title: "Restaurante do Quinha",
      img: require("./teste.jpg"),
      avaliacao: 2.5,
    },
    {
      id: 8,
      title: "Restaurante do Quinha",
      img: require("./teste.jpg"),
      avaliacao: 3.0,
    },
  ]);
  return (
    <C.Container>
      <C.HeaderInfo>
        <C.ButtonIcon onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={24} color="black" />
        </C.ButtonIcon>
        <C.Title>Restaurantes</C.Title>
      </C.HeaderInfo>

      <C.MainView>
        <C.Main
          data={dados}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <FlatListRest data={item} />}
        />
      </C.MainView>
    </C.Container>
  );
};

export default Restaurantes;
