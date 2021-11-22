import React, { useState, useEffect } from "react";
import { DadosUsers } from "../../../../Context/Contex";
import * as Yup from "yup";
import * as C from "./style";
import api from "../../../../Services/Api/api";

const ModalPerfilPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassowrd] = useState("");

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const { dadosUser } = DadosUsers();

  const ValidaPassword = async () => {
    const schema = Yup.object().shape({
      newPassword: Yup.string()
        .required("Erro: Campo senha é obrigatório!")
        .min(6, "Erro: Campo senha precisa ter pelo menos 6 caracteres!"),
      confirmPassword: Yup.string()
        .required("Erro: Campo é obrigatório!")
        .min(
          6,
          "Erro: Campo Confirma senha precisa ter pelo menos 6 caracteres"
        ),
    });
    try {
      return await schema.validate({ newPassword, confirmPassword });
    } catch (err) {
      return setStatus({
        type: "error",
        message: err.message,
      });
    }
  };
  const EditPassword = async () => {
    if (!(await ValidaPassword())) return;

    if (confirmPassword != newPassword) {
      return setStatus({
        type: "error",
        message: "Favor verificar, pois as senhas não coincidem!",
      });
    }

    try {
      const id = dadosUser.id;
      const result = await api.patch(`editarPass/${id}`, {
        password: newPassword,
      });

      setStatus({
        type: "success",
        message: result.data.messagem,
      });

      return;
    } catch (err) {
      setStatus({
        type: "error",
        message: "Não foi possível trocar a senha!",
      });
    }
  };

  return (
    <C.Container>
      <C.ModalView>
        <C.Title>Trocar a senha!</C.Title>
        <C.ModalInput
          placeholder="Digite a sua senha nova"
          onChangeText={(text) => setNewPassword(text)}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <C.ModalInput
          placeholder="Confirme a senha"
          onChangeText={(text) => setConfirmPassowrd(text)}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <C.ModalButton>
          <C.ButtonEdit onPress={EditPassword}>
            <C.TextButton>Alterar</C.TextButton>
          </C.ButtonEdit>
          <C.ButtonCancel>
            <C.TextButton>Cancelar</C.TextButton>
          </C.ButtonCancel>
        </C.ModalButton>
        <C.Status>
          <C.StatusSuccess>
            {status.type === "success" ? status.message : ""}
          </C.StatusSuccess>
        </C.Status>
        <C.Status>
          <C.StatusError>
            {status.type === "error" ? status.message : ""}
          </C.StatusError>
        </C.Status>
      </C.ModalView>
    </C.Container>
  );
};

export default ModalPerfilPassword;
