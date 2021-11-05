import styled  from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1px;
    background-color: #FFF;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.Image`
    width: 55%;
    height: 28%;
    border-radius: 350px;
    margin-bottom: 15px;
  
`;

export const Titulo = styled.Text`
    font-size: 30px;
    color: black;
    font-weight: bold;
    margin-bottom: 80px;
`;

export const Button = styled.TouchableOpacity`
   border-width: 1px;
   border-color: #000080;
   width: 200px;
   justify-content: center;
   align-items: center;
   padding: 15px;
   border-radius: 40px;
   margin-bottom: 20px;
`;

export const Text = styled.Text`
    font-weight: bold;
`;
