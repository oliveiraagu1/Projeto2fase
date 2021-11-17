import React from 'react';
import { StatusBar } from 'react-native';
import { Feather } from "@expo/vector-icons";
import * as C from './style';

const Perfil = () => {

    return (
        
        <C.Container>
            <StatusBar
                backgroundColor='#fff'
                barStyle='dark-content'
            />
            <C.ContainerHeader>
                <C.ButtonLeft>
                    <Feather name='chevron-left' size={24} color='black' />
                </C.ButtonLeft>
                <C.Title>Meu Perfil</C.Title>
                <C.ButtonRight>
                    <Feather name='more-horizontal' size={24} color='black' />
                </C.ButtonRight>
            </C.ContainerHeader>
            <C.Info>

                <C.Name>Exemplo</C.Name>
                <C.Email>exemplo@exemplo.com</C.Email>
            </C.Info>

            <C.MenuBottons>
                <C.Buttons>
                    <C.TextButtons>Trocar Apelido</C.TextButtons>
                    <Feather name='chevron-right' size={24} color='black' />
                </C.Buttons>
                <C.Buttons>
                    <C.TextButtons>Trocar Senha</C.TextButtons>
                    <Feather name='chevron-right' size={24} color='black' />
                </C.Buttons>
                <C.Buttons>
                    <C.TextButtons>Favoritos</C.TextButtons>
                    <Feather name='chevron-right' size={24} color='black' />
                </C.Buttons>
                <C.Buttons>
                    <C.TextButtons>Sair</C.TextButtons> 
                </C.Buttons>
                <C.Buttons>
                    <C.TextButtons style={{color: 'red'}}>Excluir Conta</C.TextButtons> 
                </C.Buttons>
            </C.MenuBottons>
        </C.Container>
    )

}

export default Perfil;