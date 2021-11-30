import styled from "styled-components/native";

export const Container = styled.SafeAreaView``;

export const SubHeader = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

export const Title = styled.Text`
    margin-bottom: 15px;
    font-size: 25px;
    font-weight: bold;
    color: #1565C0;
`;

export const SubTitle = styled.Text`
    font-size: 12px;
`;

export const Info = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 25px;
`;

export const InfoTitle = styled.Text`
    font-weight: bold;
    margin-bottom: 10px;
`;

export const InputMenor = styled.TextInput`
    border: 1px solid #1565C0;
    border-radius: 15px;
    width: 90%;
    height: 48px;
    padding-left: 10px;
    margin-bottom: 10px;
`;

export const InputDesc = styled.TextInput`
    border: 1px solid #1565C0;
    border-radius: 15px;
    height: 80px;
    width: 90%;
    padding-left: 10px;
   margin-bottom: 10px;
`;

export const ViewImage = styled.View`
   align-items: center;
   justify-content: center;
   
`;

export const ButtonImage = styled.TouchableOpacity`
    flex-direction: row;
    border: 1px solid #1565C0;
    border-radius: 15px;
    height: 48px;
    padding: 10px;
    width: 350px;
`;

export const Button = styled.TouchableOpacity`
    background-color: #1565C0;
    width: 85%;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    height: 48px;
`;

export const TitleButton = styled.Text`
    font-size: 20px;
    color: #FFF;
    
`;

export const ViewStatus = styled.View``;

export const TextSuccess = styled.Text`
    color: green;
    margin-top: 2px;
`;

export const TextDanger = styled.Text`
    color: red;
`;