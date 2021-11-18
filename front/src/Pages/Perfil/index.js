import React from "react";
import { Alert } from "react-native";
import { StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import { DadosUsers } from "../../Context/Contex";
import ModalPerfil from "./Modal";
import api from "../../Services/Api/api";
import * as C from "./style";

const Perfil = ({ navigation }) => {
  const { dadosUser, setDadosUser } = DadosUsers();

  const Sair = () => {
    Alert.alert("Deseja realmente sair?", "", [
      {
        text: "Ok",
        onPress: () => {
          setDadosUser("");
          navigation.navigate("Inicio");
        },
      },
      { text: "Cancelar" },
    ]);
  };

  const AlertDelete = () => {
    Alert.alert("Deseja realmente deletar sua conta?", "", [
      { text: "Ok", onPress: DeleteUser },
      { text: "Cancelar" },
    ]);
  };

  const DeleteUser = async () => {
    const id = dadosUser.id;
    try {
      const result = await api.delete(`delete/${id}`);
      Alert.alert(result.data.messagem);
      return navigation.navigate("Inicio");
    } catch (err) {
      return Alert.alert(
        "Não foi possível deletar o usuário, tente mais tarde!"
      );
    }
  };

  return (
    <C.Container>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <C.ContainerHeader>
        <C.ButtonLeft onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={24} color="black" />
        </C.ButtonLeft>
        <C.Title>Meu Perfil</C.Title>
        <C.ButtonRight>
          <Feather name="more-horizontal" size={24} color="black" />
        </C.ButtonRight>
      </C.ContainerHeader>
      <C.Info>
        <C.Name>{dadosUser.name}</C.Name>
        <C.Email>{dadosUser.email}</C.Email>
      </C.Info>
      <C.MenuBottons>
        <C.Buttons>
          <C.TextButtons>Trocar Apelido</C.TextButtons>
          <Feather name="chevron-right" size={24} color="black" />
        </C.Buttons>
        <ModalPerfil/>
        <C.Buttons>
          <C.TextButtons>Trocar Senha</C.TextButtons>
          <Feather name="chevron-right" size={24} color="black" />
        </C.Buttons>
        <C.Buttons>
          <C.TextButtons>Favoritos</C.TextButtons>
          <Feather name="chevron-right" size={24} color="black" />
        </C.Buttons>
        <C.Buttons onPress={Sair}>
          <C.TextButtons>Sair</C.TextButtons>
        </C.Buttons>
        <C.Buttons onPress={AlertDelete}>
          <C.TextButtons style={{ color: "red" }}>Excluir Conta</C.TextButtons>
        </C.Buttons>
      </C.MenuBottons>
    </C.Container>
  );
};
export default Perfil;
