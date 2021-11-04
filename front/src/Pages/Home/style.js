import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1px;
    margin-left: 20px;
    margin-top: 10px;
`;

export const TextUser = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Title = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin-left: 40px;
    margin-top: 40px;
`;

export const VerNome = styled.TouchableOpacity`
    box-shadow: 0 0 1px black;
    margin-top: 20px;
    border-radius: 10px;
    padding: 25px;
    width: 40%;
    flex-direction: row;
    flex: 1px;
    align-items: center;
    justify-content: center;
`;
