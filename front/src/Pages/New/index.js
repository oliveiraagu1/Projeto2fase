import React from "react";
import { KeyboardAvoidingView } from "react-native";
import Header from "../../Components/Header";
import { Feather } from "@expo/vector-icons"
import * as C from "./style";

// import apiGoogle, { YOUR_API_KEY } from "../../Services/Api/api";
// import axios from "axios";

const NewInfos = () => {
  // useEffect(()=>{
  //   const user = async () => {

  //     // try{
  //     //   const result = await apiGoogle.get(
  //     //     `fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&key=${YOUR_API_KEY}`
  //     //   );
  //     //   console.log(JSON.stringify(result.data));
  //     //   alert("suceeos")
  //     // }catch(error){
  //     //   console.log(error);
  //     //   alert('error')
  //     // }
  //   };
  //   user();
  // },[])

  return (
    <C.Container>
      <KeyboardAvoidingView behavior="padding">
        <Header />
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
      </KeyboardAvoidingView>
    </C.Container>
  );
};

export default NewInfos;
