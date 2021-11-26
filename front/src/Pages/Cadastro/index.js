import React, { useState } from "react";
import * as G from "../../styles/styles_adm";
import * as C from "./style";
import api from "../../Services/Api/api";
import * as Yup from "yup";
import { StatusBar } from "react-native";

const Cadastro = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const ValidaCadastro = async () => {
    const schema = Yup.object().shape({
      email: Yup.string()
        .required("Erro: Campo email é obrigatório!")
        .email("Erro: Por favor informar um e-mail válido!"),
      name: Yup.string()
        .required("Erro: Campo nome é obrigatório!")
        .min(3, "Erro: Campo nome precisa ter pelo menos 3 caracteres!"),
      password: Yup.string()
        .required("Erro: Campo senha é obrigatório!")
        .min(6, "Erro: Campo senha precisa ter pelo menos 6 caracteres!"),
    });

    try {
      return await schema.validate({ email, name, password });
    } catch (err) {
      return setStatus({
        type: "error",
        message: err.message,
      });
    }
  };

  const Cadastrar = async () => {
    if (!(await ValidaCadastro())) return;

    try {
      const result = await api.post("cadastro", {
        email,
        name,
        password,
      });
      return setStatus({
        type: "success",
        message: "Usuário cadastrado com sucesso!",
      });
    } catch (err) {
      return console.log(err.message);
    }
  };

  return (
    <C.Container>
      <C.Scroll>
        <C.Title>CADASTRE-SE</C.Title>
        <G.Texto>Email</G.Texto>
        <G.Input
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <G.Texto>Nome de usuário</G.Texto>
        <G.Input onChangeText={(text) => setName(text)} />
        <G.Texto>Senha</G.Texto>
        <G.Input
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <C.Status>
          <C.StatusTextSuccess>
            {status.type === "success" ? status.message : ""}
          </C.StatusTextSuccess>
          <C.StatusTextDanger>
            {status.type === "error" ? status.message : ""}
          </C.StatusTextDanger>
        </C.Status>

        <G.Button onPress={Cadastrar}>
          <G.TextButton>ENVIAR</G.TextButton>
        </G.Button>
      </C.Scroll>
    </C.Container>
  );
};

export default Cadastro;
