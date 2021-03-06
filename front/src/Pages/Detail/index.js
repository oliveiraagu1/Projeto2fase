import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import api from "../../Services/Api/api";
import * as C from "../../Pages/pontosHistoricos/styles";
import * as G from "./style";

const Detail = ({ route, navigation }) => {
  const [status, setStatus] = useState(true);
  const [dados, setDados] = useState({
    url: "",
    image: "",
    title: "",
    descricao: "",
  });

  useEffect(() => {
    const id = route.params?.id;
    const getOneItem = async () => {
      try {
        const result = await api.get(`getOneItem/${id}`);
        setDados({
          url: result.data.url,
          image: result.data.dados.image,
          title: result.data.dados.nome_local,
          descricao: result.data.dados.descricao,
        });

        return setStatus(false);
      } catch (err) {
        console.log(err);
        return alert("Erro: Não foi possível carregar!");
      }
    };
    getOneItem();
  }, []);

  return (
    <C.ContainerPrincipal>
      <C.ContainerImage>
        <C.ImagemDescription source={{ uri: dados.url + dados.image }} />
      </C.ContainerImage>

      <C.ContainerDescription>
        <C.ContainerTitleDescription>
          <C.TitleDescription>Descrição geral</C.TitleDescription>
        </C.ContainerTitleDescription>
        <G.ButtonIcon onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={30} color="black" />
        </G.ButtonIcon>
        <C.TitleInfo>{dados.title}</C.TitleInfo>
        <C.TextInfo>{dados.descricao}</C.TextInfo>
      </C.ContainerDescription>
    </C.ContainerPrincipal>
  );
};

export default Detail;
