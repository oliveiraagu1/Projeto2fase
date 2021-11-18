import React from "react";
import * as C from "../styles";

const Palacio = () => {
  return (
    <C.ContainerPrincipal>
      <C.ContainerImage>
        <C.ImagemDescription
          source={require("../assets/palacio-description.jpeg")}
        />
      </C.ContainerImage>
      <C.ContainerDescription>
        <C.ContainerTitleDescription>
          <C.TitleDescription>Descrição geral</C.TitleDescription>
        </C.ContainerTitleDescription>
        <C.TitleInfo>Palácio Cruz e Sousa</C.TitleInfo>
        <C.TextInfo>
          O Palácio Cruz e Sousa foi construído no século XVIII, pela iniciativa
          do Brigadeiro José da Silva Paes no intuito de transformá-lo em sede
          da Casa do Governo. Em 1979, o edifício foi rebatizado de Palácio Cruz
          e Sousa, uma homenagem ao poeta catarinense. Cinco anos depois, foi
          tombado como Patrimônio Histórico de Santa Catarina e passou por nova
          restauração. Atualmente é exemplo da arquitetura eclética, uma mistura
          de estilos que vai do barroco ao neoclássico. 
        </C.TextInfo>
      </C.ContainerDescription>
    </C.ContainerPrincipal>
  );
};
export default Palacio;
