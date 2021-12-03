import React, { useState } from "react";
import FlatListRest from "../flatListRest";
import { Feather } from "@expo/vector-icons";
import Header from "../../../../Components/Header";
import api from "../../../../Services/Api/api";
import * as C from "../../../../styles/styles_adm";

const Praias = ({ navigation }) => {
  const [dados, setDados] = useState([{}]);
  const [dadosApi, setDadosApi] = useState([{}]);
  const [atualiza, setAtualiza] = useState(true)

  useEffect(() => {
    const verificaRest = async () => {
      const rest = 4;
      try {
        const result = await api.get(`getItens/${rest}`);

        setDadosApi(result.data);

        const resposta = dadosApi.map((item) => ({
          id: item.id,
          title: item.nome_local,
          avaliacao: item.avaliacao,
          img: require("../teste4.jpg"),
        }));

        setDados(resposta);
        setAtualiza(false);
      } catch (err) {
        console.log(err);
      }
    };
    verificaRest();
  }, [atualiza]);
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
