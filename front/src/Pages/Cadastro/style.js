import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1px;
  background-color: #f4f0f5;
`;

export const Scroll = styled.ScrollView``;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 35px;
  color: #1e88e5;
  margin-top: 15px;
  margin-left: 10px;
`;

export const Texto = styled.Text`
  font-size: 13px;
  color: #2f80ed;
  margin: 20px 0 8px 12px;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-radius: 7px;
  border-color: #2196f3;
  width: 85%;
  padding: 8px;
  margin-left: 10px;
  margin-bottom: 10px;
`;
export const Button = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #2196f3;
  justify-content: center;
  align-items: center;
  padding: 12px;
  width: 120px;
  border-radius: 7px;
  right: 40px;
  margin-left: 265px;
  margin-top: 20px;
`;

export const TextButton = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #2f80ed;
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
