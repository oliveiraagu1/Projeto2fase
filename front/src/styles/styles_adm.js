import styled from "styled-components/native";

// Estilização dos sub-components da Home

export const HeaderInfo = styled.View`
  flex-direction: row;
  margin: 20px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  margin: 6px;
  margin-left: 50px;
`;

export const TitleRes = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-left: 30px;
`;

export const TitleBoat = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-left: 60px;
`;
export const TitleAtracoes = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-left: 45px;
`;

export const TitlePraias = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-left: 60px;
`;

export const MainView = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Main = styled.FlatList``;

export const ScrollFlat = styled.ScrollView``;

export const ViewFlat = styled.View``;

export const ButtonFlat = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 15px;
`;

export const ImgFlat = styled.Image`
  border-radius: 15px;
  width: 300px;
  height: 200px;
`;

export const ViewInfoFlat = styled.View`
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
