import React from "react";
import * as C from "../styles";

const Palacio = () => {
  return (
    <C.ContainerPrincipal>
      <C.ContainerImage>
        <C.ImagemDescription
          source={require("../assets/catedral-description.png")}
        />
      </C.ContainerImage>
      <C.ContainerDescription>
        <C.ContainerTitleDescription>
          <C.TitleDescription>Descrição geral</C.TitleDescription>
        </C.ContainerTitleDescription>
        <C.TitleInfo>Catedral Metropolitana de Florianópolis</C.TitleInfo>
        <C.TextInfo>
          A primeira versão da catedral foi fundida em 1675, desde então vem
          sofrendo alterações e ampliações. A cidade foi crescendo ao seu redor
          ate as proporções atuais.
        </C.TextInfo>
      </C.ContainerDescription>
    </C.ContainerPrincipal>
  );
};
export default Palacio;
