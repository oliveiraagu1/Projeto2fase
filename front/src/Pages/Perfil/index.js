import React from 'react';
import {View, Text} from 'react-native';

import {
    Container,
    InfoView,
    Nome,
    Email,
    Buttonfunc
} from './style';

const Perfil = () => {

    return(

        <Container>
            <InfoView>
                <Text>Vai ter um icone</Text>
                <Nome>Fulaninha</Nome>
                <Email>exemplo@gmail.com</Email>
            </InfoView>
            <Buttonfunc>
                <Text>Trocar apelido</Text>
            </Buttonfunc>
            <Buttonfunc>
                <Text>Trocar senha</Text>
            </Buttonfunc>
            <Buttonfunc>
                <Text>Favoritos</Text>
            </Buttonfunc>
            <Buttonfunc>
                <Text>Sair</Text>
            </Buttonfunc>
            <Buttonfunc>
                <Text style={{color: 'red'}}>Excluir conta</Text>
            </Buttonfunc>
        </Container>
    )

}

export default Perfil;