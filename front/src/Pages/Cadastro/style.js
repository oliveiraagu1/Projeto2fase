import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1px;
    background-color: #FFF;
`;

export const Scroll = styled.ScrollView``;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 40px;
    color: #2E9AFE;
    margin-top: 20px;
    margin-bottom: 15px;
`;

export const Status = styled.View``;

export const StatusTextSuccess = styled.Text`
    margin-left: 15px;
    color: green;
    margin-top: 5px;
`;

export const StatusTextDanger = styled.Text`
    margin-left: 10px;
    color: red;
`;