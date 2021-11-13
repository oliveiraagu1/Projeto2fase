import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
    margin-top: 50px;
    border-width: 1px;
    border-color: green;
    justify-content: center;
    align-items: center;
    padding: 12px;
    width: 120px;
    border-radius: 7px;
    margin-left: 210px;
`;

export const Texto = styled.Text`
    font-size: 13px;
    color: #00a2ee;
    margin: 5px;
    margin-left: 10px;
`;

export const Input = styled.TextInput`
    border-width: 1px;
    border-radius: 7px;
    border-color: #87CEFA;
    width: 85%;
    padding: 8px;
    margin-left: 10px;

`;

export const TextButton = styled.Text`
    font-Weight: bold;
    font-size: 20px;
`;

export const LogoImage = styled.Image`
  width: 105px;
  height: 105px;
`;

export const MainViewInfo = styled.View`
    flex-direction: column;
    height: 50%;

`;

export const InfoView = styled.View`
    background-color: green;
    margin: 10px;
`;

export const InfoButton = styled.TouchableOpacity`
    padding: 30px;
`;

export const InfoText = styled.Text`
    color: #fff;
    font-size: 15px;
`;
