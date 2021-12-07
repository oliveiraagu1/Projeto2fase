import styled from "styled-components/native";

export const ContainerPrincipal = styled.View`
   position: relative;
   width: 100%;
   height: 100%;
`

export const ContainerImage = styled.View`
    width: 100%;
    height: 20%;
`
export const ImagemDescription = styled.Image`
    width: 100%;
    height: 300px;
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
    padding-top: 50px;
`
export const TextInfo = styled.Text `
    text-align: justify;
    color: #000;
    font-size: 14px;
    margin: 20px 20px 0 20px;
`