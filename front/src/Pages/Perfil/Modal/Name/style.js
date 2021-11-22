import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1px;
    justify-content: center;
    align-items: center;
    height: 350px;
`;

export const ModalView = styled.View`
    background-color: #ccc;
    padding: 50px;
`;

export const ModalName = styled.View`
    margin-bottom: 10px;
`;

export const ModalNew = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ModalInput = styled.TextInput`
    border-width: 1px;
    padding-left: 5px;
`;

export const Name = styled.Text`
    font-size: 20px;
`;

export const ModalButton = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const ButtonEdit = styled.TouchableOpacity`
    background-color: green;
    margin-right: 20px;
    padding: 20px;
    border-radius: 10px;
`;

export const ButtonCancel = styled.TouchableOpacity`
    background-color: red;
    padding: 20px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

export const TextButton = styled.Text`
    color: #fff;
    font-size: 15px;
`;

export const Status = styled.View``;

export const StatusSuccess = styled.Text`
    color: green;
`;
export const StatusError = styled.Text`
    color: red;
`;
