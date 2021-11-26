import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: #1E88E5;
`;

export const ContainerHeader = styled.View`
  width: 100%;
  background-color: #1e88e5;
`;
export const SubContainerHeader = styled.View`
  width: 100%;
  margin-top: 50px;
  
`;

export const ContainerLogo = styled.TouchableOpacity`
  left: 37%;
  z-index: 10;
  position: absolute;
  margin-top: -60px;
`;


export const ViewInfo = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #f4f0f5;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 20px;
`;  

export const ViewUser = styled.View`
  margin-left: 25px;
`;

export const TextUser = styled.Text`
  margin-top: 30px;
  font-weight: bold;
  font-size: 20px;
  color: #FFF;
`; 