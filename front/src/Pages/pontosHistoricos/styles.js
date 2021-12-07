import styled from "styled-components/native";


export const ContainerPontos = styled.View`
   margin: 10px auto;
   width: 100%;
` 

//HEADER 
export const TitlePontosHistoricos = styled.Text`
    color: #2196F3;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
` 
export const ButtonVoltar = styled.TouchableOpacity`
   width: 35px;
   height: 30px;
` 
export const ContainerHeader = styled.View`
    display: flex;
    flex-direction: row-reverse;
    align-items: baseline;
    height: 30px;
    margin: 10px auto;
` 
//CONTAINER 1
export const ButtonPalacio = styled.TouchableOpacity`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 30px;
` 
export const Imagem = styled.Image`
    border-radius: 16px;
    width: 343px;
    height: 210px;
` 
//CONTAINER 2
export const ButtonFortaleza = styled.TouchableOpacity`
    width: 50%;
    margin-top: 10px;
` 
export const ButtonCatedral = styled.TouchableOpacity`
    width: 50%;
    margin-top: 10px;
` 
export const Container = styled.View`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 342px;
    margin: 0 auto;
    padding-bottom: 15px;
`
export const ImagemCatedral = styled.Image`
    border-radius: 16px;
    width: 163px;
    height: 330px;
    margin-left: 5px;
` 
export const ImagemPequena = styled.Image`
    border-radius: 16px;
    width: 165px;
    height: 160px;
` 
//CONTAINER 3
export const ButtonPraca = styled.TouchableOpacity`
    position: absolute;
    top: 55%;
    left: 9%;
` 
//CONTAINER 4
export const ContainerEngenho = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    margin: 0 auto;
` 

//PALACIO 
export const ContainerImage = styled.View`
    width: 100%;
    height: 20%;
`
export const ImagemDescription = styled.Image`
    width: 100%;
    height: 300px;
`
export const ContainerPrincipal = styled.View`
   position: relative;
   width: 100%;
   height: 100%;
`
export const ContainerDescription = styled.View`
    background-color: #FFF;
    height: 80%;
    width: 100%;
    border-radius: 40px;
    position: absolute;
    top: 250px;
`

export const ContainerTitleDescription = styled.View`
    background-color: #90CAF9;
    width: 163px;
    height: 41px;
    border-radius: 10px;
    justify-content: center;
    position: absolute;
    left: 30%;
    top: -20px;
`

export const TitleDescription = styled.Text`
    font-size: 17px;
    font-weight: 600;
    text-align: center;
    color: #fff;
`
export const TitleInfo = styled.Text `
    font-size: 25px;
    font-weight: 700;
    margin-top: 150px;
    margin: 0 auto;
    text-align: center;
`
export const TextInfo = styled.Text `
    text-align: justify;
    color: #000;
    font-size: 14px;
    margin: 20px 20px 0 20px;
`