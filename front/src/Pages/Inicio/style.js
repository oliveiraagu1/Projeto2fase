import styled  from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1px;
    background-color: #FFF;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.Image`
    width: 273px;
    height: 294px;
    border-radius: 350px;
    margin-bottom: 15px;
  
`;

export const ButtonEntrar = styled.TouchableOpacity`
   border-width: 1px;
   background-color: #0d47a1;
   width: 273px;
   height: 62px;
   justify-content: center;
   align-items: center;
   padding: 15px;
   border-radius: 40px;
   margin-bottom: 20px;
   border-color: #0d47a1;
`;

export const ButtonCadastrar = styled.TouchableOpacity`
   border-width: 1px;
   border-color: #0d47a1;
   width: 273px;
   height: 62px;
   justify-content: center;
   align-items: center;
   padding: 15px;
   border-radius: 40px;
   margin-bottom: 20px;
`;

export const TextEntrar = styled.Text`
    font-weight: bold;
    color: #fff;
`;

export const TextCadastrar = styled.Text`
    font-weight: bold;
    color: #000;
`;
