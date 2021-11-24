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
  border-color: #87cefa;
  width: 85%;
  padding: 8px;
  margin-left: 10px;
`;

export const TextButton = styled.Text`
  font-weight: bold;
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







// Estilização dos sub-components da Home

export const Container = styled.SafeAreaView`
  flex: 1px;
  background-color: white;
  align-items: center;
`;

export const HeaderInfo = styled.View`
  flex-direction: row;
  margin: 30px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  margin: 5px;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

export const MainView = styled.View``;

export const Main = styled.FlatList``;

export const ScrollFlat = styled.ScrollView``;

export const ViewFlat = styled.View``;

export const ButtonFlat = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 15px;
`;

export const ImgFlat = styled.Image`
  border-radius: 15px;
`;

export const ViewInfo = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const TitleFlat = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: bold;
`;
