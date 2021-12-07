import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import Header from "../../Components/Header";
import { Feather } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";

import * as Yup from "yup";
import * as C from "./style";

const NewInfos = () => {
  const [select, setSelect] = useState("");
  const [regiao, setRegiao] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [avaliacao, setAvaliacao] = useState("");
  const [teste, setTeste] = useState("");

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const ValidaCampos = async () => {
    if (select == 0){
      return setStatus({
        type: "error",
        message: "Erro: É necessário escolher uma categoria!",
      });

    };
    if(regiao == 0) {
      return setStatus({
        type: "error",
        message: "Erro: É necessário escolher uma região!",
      });
    }
      
    const schema = Yup.object().shape({
      name: Yup.string()
        .required("Erro: É necessário preencher o campo Nome do Local!")
        .max(50, "Erro: Nome só pode ter no máximo 50 caracteres!"),
      description: Yup.string()
        .required("Erro: É necessário preencher o campo descrição!")
        .max(200, "Erro: Descrição só pode ter no máximo 200 caracteres!"),
      avaliacao: Yup.string().required(
        "Erro: É necessário preenhcer o campo Avaliação!"
      ),
    });

    if (avaliacao < 0 || avaliacao > 5) {
      return setStatus({
        type: "error",
        message: "O número da avaliação deve ser entre 0 - 5",
      });
    }

    try {
      return await schema.validate({ name, description, avaliacao });
    } catch (error) {
      return setStatus({
        type: "error",
        message: error.message,
      });
    }
  };

  const Enviar = async () => {
    if (!(await ValidaCampos())) return;

    let url = `http://192.168.0.14:8081/upload-image/${select}/${name}/${description}/${avaliacao}/${regiao}`;

    let params = teste;

    let headers = {
      "Content-Type": `multipart/form-data`,
      Accept: "application/json",
    };

    let object = {
      method: "POST",
      headers: headers,
      body: params,
    };

    try {
      fetch(url, object)
        .then((resp) => {
          let json = null;
          json = resp.json();

          if (resp.ok) {
            return json;
          }
          return json.then((err) => {
            throw err;
          });
        })
        .then((json) => json);

      setStatus({
        type: "success",
        message: "Cadastrado com sucesso!",
      });
    } catch (error) {
      alert("erro");
      return setStatus({
        type: "error",
        message: error.message,
      });
    }
  };

  const chooseFromGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    try {
      if (status !== "granted") {
        alert(
          "Error: Você precisa dar premissão ao aplicativo ter acesso a sua câmera!"
        );
      } else {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          aspect: [4, 3],
          quality: 1,
          allowsEditing: true,
        });

        if (!result.cancelled) {
          const newUpload = new FormData();

          newUpload.append("image", {
            name: "Image.jpg",
            type: "image/jpg",
            uri: result.uri,
          });
          setTeste(newUpload);

          alert("Imagem carregada com sucesso!");
        } else {
          alert("Cancelou imagem");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
   
    <KeyboardAvoidingView>
      <ScrollView>
    <C.Container>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={80}
      >
        <Header />
        <ScrollView>
          <C.SubHeader>
            <C.Title>CADASTRANDO REGIÃO</C.Title>
            <Picker
              style={styled.pikcer}
              selectedValue={select}
              onValueChange={(number) => Number(setSelect(number))}
            >
              <Picker.Item key={0} value={0} label={"Selecione"} />
              <Picker.Item key={1} value={1} label={"Restaurantes"} />
              <Picker.Item key={2} value={2} label={"Boates"} />
              <Picker.Item key={3} value={3} label={"Atrações"} />
              <Picker.Item key={4} value={4} label={"Praias"} />
            </Picker>
            <Picker
              style={styled.pikcer}
              selectedValue={regiao}
              onValueChange={(number) => Number(setRegiao(number))}
            >
              <Picker.Item key={10} value={0} label={"Selecione"} />
              <Picker.Item key={20} value={1} label={"Norte da Ilha"} />
              <Picker.Item key={30} value={2} label={"Centro"} />
              <Picker.Item key={40} value={3} label={"Sul da Ilha"} />
            </Picker>
          </C.SubHeader>
          <C.Info>
            <C.InfoTitle>Nome do Local:</C.InfoTitle>
            <C.InputMenor
              maxLength={50}
              onChangeText={(text) => setName(text)}
            />
            <C.InfoTitle>Descrição:</C.InfoTitle>
            <C.InputDesc
              multiline={true}
              maxLength={200}
              onChangeText={(text) => setDescription(text)}
            />

            <C.ViewImage>
              <C.InfoTitle>Imagem:</C.InfoTitle>
              <C.ButtonImage onPress={chooseFromGallery}>
                <Feather name="paperclip" size={24} color="black" />
              </C.ButtonImage>
            </C.ViewImage>

            <C.Avaliacao>
              <C.InfoTitle>Avaliação:</C.InfoTitle>
              <C.InputAvaliacao
                keyboardType="numeric"
                onChangeText={(text) => setAvaliacao(text)}
              />
            </C.Avaliacao>

            <C.ViewStatus>
              <C.TextSuccess>
                {status.type === "success" ? status.message : ""}
              </C.TextSuccess>
              <C.TextDanger>
                {status.type === "error" ? status.message : ""}
              </C.TextDanger>
            </C.ViewStatus>

            <C.Button onPress={Enviar}>
              <C.TitleButton>ENVIAR</C.TitleButton>
            </C.Button>
          </C.Info>
        </ScrollView>
      </KeyboardAvoidingView>
    </C.Container>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styled = StyleSheet.create({
  pikcer: {
    width: 347,
    height: 30,
    backgroundColor: "#E3F2FD",
    marginTop: 5,
    marginBottom: 20,
    color: "#1976D2",
    fontSize: 16,
  },
});

export default NewInfos;