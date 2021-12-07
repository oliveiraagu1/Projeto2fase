import React, { useEffect, useState } from "react";
import { DadosUsers } from "../../../../Context/Contex";
import api from "../../../../Services/Api/api";
import * as Yup from "yup";
import * as C from "./style";

const ModalPerfilName = () => {
  const [newName, setNewName] = useState("");
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const { dadosUser, setDadosUser } = DadosUsers();

  useEffect(() => {}, [dadosUser]);

  const ValidaName = async () => {
    const schema = Yup.object().shape({
      newName: Yup.string()
        .required("Erro: Campo nome é obrigatório!")
        .min(3, "Erro: Campo nome precisa ter pelo menos 3 caracteres!"),
    });
    try {
      return await schema.validate({ newName });
    } catch (err) {
      return setStatus({
        type: "error",
        message: err.message,
      });
    }
  };
  const EditName = async () => {
    if (!(await ValidaName())) return;

    try {
      const id = dadosUser.id;

      const result = await api.patch(`editar/${id}`, {
        name: newName,
      });

      setDadosUser({
        id: dadosUser.id,
        name: newName,
        email: dadosUser.email,
      });
      return setStatus({
        type: "success",
        message: "O nome foi alterado com sucesso!",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message: "Não foi possível trocar o nome!",
      });
    }
  };

  return (
    <C.Container>
      <C.ModalView>
        <C.ModalName>
          <C.Name>Nome atual: {dadosUser.name}</C.Name>
        </C.ModalName>

        <C.ModalNew>
          <C.Name>Novo nome: </C.Name>
          <C.ModalInput
            placeholder="Digte seu novo nome"
            onChangeText={(text) => setNewName(text)}
          />
        </C.ModalNew>

        <C.ModalButton>
          <C.ButtonEdit onPress={EditName}>
            <C.TextButton>Editar</C.TextButton>
          </C.ButtonEdit>
        </C.ModalButton>
        <C.Status>
          <C.StatusSuccess>
            {status.type === "success" ? status.message : ""}
          </C.StatusSuccess>
          <C.StatusError>
            {status.type === "error" ? status.message : ""}
          </C.StatusError>
        </C.Status>
      </C.ModalView>
    </C.Container>
  );
};

export default ModalPerfilName;
