import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1px;
    margin-top: 50px;
    background-color: #fff;
`;

export const ContainerHeader = styled.View`
    justify-content: space-between;
    margin: 0px 10px;
    align-items: center;
    flex-direction: row;
`;

export const Title = styled.Text`
    font-size: 20px;
`;

export const ButtonLeft = styled.TouchableOpacity``;

export const ButtonRight = styled.TouchableOpacity``;

export const Info = styled.View`
    background-color: #0D47A1;
    justify-content: center;
    align-items: center;
    width: 85%;
    margin: 40px 28px;
    padding: 90px;
    border-radius: 20px;
    
`;
export const Name = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 15px;
    
`;

export const Email = styled.Text`
    color: #fff;
    font-size: 13px;
`;

export const MenuBottons = styled.View`
`;

export const Buttons = styled.TouchableOpacity`
    justify-content: space-between;
    flex-direction: row;
    margin: 5px 28px;
    border-bottom-width: 1px;

`;

export const TextButtons = styled.Text`
    font-weight: bold;
    font-size: 15px;
`;
