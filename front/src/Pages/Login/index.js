import React, { useState } from "react";
import { KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import Header from "../../Components/Header";
import api from "../../Services/Api/api";
import * as C from "./style";
import * as Yup from "yup";

import { DadosUsers } from "../../Context/Contex";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const { setDadosUser } = DadosUsers();

  const ValidaLogin = async () => {
    const schema = Yup.object().shape({
      email: Yup.string()
        .required("Erro: O campo e-mail é obrigatório!")
        .email("Erro: Por favor informar um e-mail válido!"),
      password: Yup.string().required("Erro: O campo senha é obrigatório!"),
    });
    try {
      return await schema.validate({ email, password });
    } catch (err) {
      return setStatus({
        type: "error",
        message: err.message,
      });
    }
  };

  const Logar = async () => {
    if (!(await ValidaLogin())) return;

    try {
      const result = await api.post("login", {
        email,
        password,
      });

      setDadosUser({
        email: result.data.login.email,
        name: result.data.login.name,
        id: result.data.login.id,
      });
      alert(result.data.mensagem);

      return navigation.navigate("Home");
    } catch (err) {
      return setStatus({
        type: "error",
        message: "Erro: E-mail ou senha incorretos!",
      });
    }
  };

  return (
    <C.Container>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={80}
      >
        <ScrollView>
          <Header />
          <C.Login>
            <C.Title>ENTRAR</C.Title>
            <C.Texto>E-mail</C.Texto>
            <C.ContainerInput>
              <C.Input
                onChangeText={(text) => setEmail(text)}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
              />
              <C.Texto>Senha</C.Texto>
              <C.Input
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => setPassword(text)}
              />
            </C.ContainerInput>
            <C.Status>
              <C.StatusTextDanger>
                {status.type === "error" ? status.message : ""}
              </C.StatusTextDanger>
            </C.Status>
            <C.Button onPress={Logar}>
              <C.TextButton>ENTRAR</C.TextButton>
            </C.Button>
          </C.Login>
        </ScrollView>
      </KeyboardAvoidingView>
    </C.Container>
  );
};

export default Login;
