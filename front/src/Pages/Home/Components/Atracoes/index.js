import React, { useState, useEffect} from "react";
import FlatListRest from "../flatListRest";
import { Feather } from "@expo/vector-icons";
import Header from "../../../../Components/Header";
import { DadosUsers } from "../../../../Context/Contex";
import api from "../../../../Services/Api/api";
import * as C from "../../../../styles/styles_adm";

const Atracoes = ({ navigation }) => {
  const [dados, setDados] = useState([{}]);
  const [dadosApi, setDadosApi] = useState([{}]);
  const [atualiza, setAtualiza] = useState(true);

  const { setUrl, regiao } = DadosUsers();

  useEffect(() => {  
    const verificaRest = async () => {
      const rest = 3;
      try {
        const result = await api.get(`getItens/${rest}/${regiao}`);

        setDadosApi(result.data.dados);
        setUrl(result.data.url);


        const resposta = dadosApi.map((item) => ({
          id: item.id,
          title: item.nome_local,
          avaliacao: item.avaliacao,
          img: item.image,
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
