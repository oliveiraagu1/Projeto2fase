import React from "react";
import * as C from "../styles";

const Palacio = () => {
  return (
    <C.ContainerPrincipal>
      <C.ContainerImage>
        <C.ImagemDescription
          source={require("../assets/fortaleza-description.jpeg")}
        />
      </C.ContainerImage>
      <C.ContainerDescription>
        <C.ContainerTitleDescription>
          <C.TitleDescription>Descrição geral</C.TitleDescription>
        </C.ContainerTitleDescription>
        <C.TitleInfo>Forte São José da Ponta Grossa</C.TitleInfo>
        <C.TextInfo>
          A Fortaleza de São José da Ponta Grossa localiza-se entre as praias do
          Forte e do Jurerê, Projetada pelo brigadeiro José da Silva Pais
          primeiro governador da Capitania de Santa Catarina (1739-1745) e
          construída por escravos. É um dos vértices do triângulo defensivo da
          barra da baía Norte da ilha na primeira metade do século XVIII,
          integrado por mais três fortalezas, juntas, deveriam proteger a ilha
          de Santa Catarina, consolidando a ocupação do sul da Colônia, e
          atuando como base estratégica de apoio para a manutenção do domínio
          português sobre a Colônia do Sacramento.
        </C.TextInfo>
      </C.ContainerDescription>
    </C.ContainerPrincipal>
  );
};
export default Palacio;
