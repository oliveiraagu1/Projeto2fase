import React, { useState } from "react";
import Header from "../../Components/Header";
import api from "../../Services/Api/api";
import * as C from "./style";
import * as Yup from "yup";

const Cadastro = () => {
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
      return setStatus({
        type: "error",
        message: "Erro: Usuário já cadastrado!",
      });
    }
  };

  return (
    <C.Container>
      <Header />
      <C.Scroll>
        <C.Title>CADASTRE-SE</C.Title>
        <C.Texto>Email</C.Texto>
        <C.Input
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <C.Texto>Nome de usuário</C.Texto>
        <C.Input onChangeText={(text) => setName(text)} />
        <C.Texto>Senha</C.Texto>
        <C.Input
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

        <C.Button onPress={Cadastrar}>
          <C.TextButton>ENVIAR</C.TextButton>
        </C.Button>
      </C.Scroll>
    </C.Container>
  );
};

export default Cadastro;
