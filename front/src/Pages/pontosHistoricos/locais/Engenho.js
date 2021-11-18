import React from "react";
import * as C from "../styles";

const Palacio = () => {
  return (
    <C.ContainerPrincipal>
      <C.ContainerImage>
        <C.ImagemDescription
          source={require("../assets/engenho-description.jpeg")}
        />
      </C.ContainerImage>
      <C.ContainerDescription>
        <C.ContainerTitleDescription>
          <C.TitleDescription>Descrição geral</C.TitleDescription>
        </C.ContainerTitleDescription>
        <C.TitleInfo>Casarão e Engenho dos Andrades </C.TitleInfo>
        <C.TextInfo>
          A freguesia de Santo Antônio de Lisboa recebeu, em meados do século
          XVII, significativo contingente populacional vindo dos Açores. Ao se
          estabelecerem na localidade, essas pessoas dedicaram-se, à produção
          agrícola, como farinha de mandioca, açúcar mascavo etc. O edifício foi
          construído em 1860 de construção rústica, chão de terra batida e
          telhado aparente.
        </C.TextInfo>
      </C.ContainerDescription>
    </C.ContainerPrincipal>
  );
};
export default Palacio;
