import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 25px;
    font-weight: bold;
`;

export const MainView = styled.View`
    flex: 1px;
`;

export const Main = styled.FlatList`
    margin-top: 50px;
`;


// Estilização do component flatListRest

export const ContainerFlat = styled.SafeAreaView`
    margin-top: 10px;
`;

export const ScrollFlat = styled.ScrollView`
    
`;

export const ViewFlat = styled.View`
    border-radius: 16px;
    width: 329px;
    height: 280px;

`;

export const ButtonFlat = styled.TouchableOpacity``;

export const ImgFlat = styled.Image`
    border-radius: 16px;
`;

export const ViewInfo = styled.View``;

export const TitleFlat = styled.Text`
    color: black;
    font-size: 16px;
`;