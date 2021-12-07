import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1px;
  justify-content: center;
  align-items: center;
  height: 350px;
  margin-top: 20px;
`;

export const ModalView = styled.View`
  background-color: #ccc;
  padding: 40px;
`;

export const Title = styled.Text`
  color: black;
  font-size: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
`;

export const ModalInput = styled.TextInput`
  border-width: 1px;
  padding-left: 5px;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
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

export const TextButton = styled.Text`
  color: #fff;
  font-size: 15px;
`;

export const Status = styled.View``;

export const StatusSuccess = styled.Text`
  color: green;
  margin-top: 10px;
`;
export const StatusError = styled.Text`
  color: red;
`;
