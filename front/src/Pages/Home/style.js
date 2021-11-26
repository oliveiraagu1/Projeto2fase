import styled from "styled-components/native";
 

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  
`;

export const ContainerPai = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: #f4f0f5;

`;

export const ContainerButtons = styled.View`
  width: 100%;
  padding: 20px;
  flex-direction: row;
`;

export const ButtonsCategorias = styled.TouchableOpacity`
  width: 49%;
  background-color: #fff;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-right: 10px;
`;

export const ButtonText = styled.Text`
  color: #000;
`;

export const ButtonPontosHistoricos = styled.TouchableOpacity`
  width: 100%;
  background-color: #fff;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`;
