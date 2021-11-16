import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1px;
    
`;

export const ContainerHeader = styled.View`
    margin: 0 auto;
    width: 100%;
    background-color: #1E88E5;
`
export const SubContainerHeader = styled.View`
    
`
export const ContainerLogo = styled.View`
    left: 37%;
    z-index: 10;
    position: absolute;
    margin-top: 20px;
    
`
export const ContainerSelect = styled.View`
    width: 100%;
    border-top-left-radius: 30px ;
    background-color: #fff;
    padding-top: 20px;
    border-top-right-radius: 30px;
`



export const TextUser = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 50px;
    color: #fff;
`;

export const Title = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin-left: 40px;
    margin-top: 40px;
`;

export const ContainerPai = styled.View`
    width: 100%;
    margin: 0 auto;
    flex-direction: row;
`

export const ContainerButtons = styled.View`
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    flex-direction: row;

`

export const ButtonsCategorias = styled.TouchableOpacity`
    width: 49%;
    background-color: #fff;
    box-shadow: 0px 2px 2px gray;
    height: 120px;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-right: 10px;
`

export const ButtonText = styled.Text`
    color: #000;
`

export const ButtonPontosHistoricos = styled.TouchableOpacity`
    width: 100%;
    background-color: #fff;
    box-shadow: 1px 3px 3px gray;
    height: 120px;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
`