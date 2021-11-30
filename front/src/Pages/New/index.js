import React from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import Header from "../../Components/Header";
import { Feather } from "@expo/vector-icons";

import * as C from "./style";

const NewInfos = () => {
  return (
    <C.Container>
      <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={80}>
        <Header />
        <ScrollView>
          <C.SubHeader>
            <C.Title>CADASTRANDO REGIÃO</C.Title>
            <C.SubTitle>
              Conhece algum ponto histórico em Florianópolis e quer cadastrar?
            </C.SubTitle>
          </C.SubHeader>
          <C.Info>
            <C.InfoTitle>Nome do Local:</C.InfoTitle>
            <C.InputMenor maxLength={50} />
            <C.InfoTitle>Descrição:</C.InfoTitle>
            <C.InputDesc multiline={true} maxLength={200} />

            <C.ViewImage>
              <C.InfoTitle>Imagem:</C.InfoTitle>
              <C.ButtonImage>
                <Feather name="paperclip" size={24} color="black" />
              </C.ButtonImage>
            </C.ViewImage>

            <C.Button>
              <C.TitleButton>ENVIAR</C.TitleButton>
            </C.Button>
          </C.Info>
        </ScrollView>
      </KeyboardAvoidingView>
    </C.Container>
  );
};

export default NewInfos;
