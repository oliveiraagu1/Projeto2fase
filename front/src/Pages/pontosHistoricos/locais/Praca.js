import React from "react";
import * as C from "../styles";

const Palacio = () => {
  return (
    <C.ContainerPrincipal>
      <C.ContainerImage>
        <C.ImagemDescription source={require("../assets/praca-xv.jpeg")} />
      </C.ContainerImage>
      <C.ContainerDescription>
        <C.ContainerTitleDescription>
          <C.TitleDescription>Descrição geral</C.TitleDescription>
        </C.ContainerTitleDescription>
        <C.TitleInfo>Praça XV de Novembro</C.TitleInfo>
        <C.TextInfo>
           A árvore da figueira foi replantada no meio da praça XV em 1891,
          coração da cidade. Onde se encontra até hoje. Seus galhos cobrem quase
          toda a praça e são sustentados por hastes de metal, para a preservação
          da estrutura antiga.
        </C.TextInfo>
      </C.ContainerDescription>
    </C.ContainerPrincipal>
  );
};
export default Palacio;
