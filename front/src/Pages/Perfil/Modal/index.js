import React, { useRef } from "react";
import { Modalize } from "react-native-modalize";
import * as C from "./style";

const ModalPerfil = () => {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    
  }

  return (
    <C.Container>
      <Modalize ref={modalizeRef} snapPoint={180}>
        <C.ModalView>
          <C.ButtonEdit>
            <C.TextButton>Editar</C.TextButton>
          </C.ButtonEdit>
          <C.ButtonCancel>
            <C.TextButton>Cancelar</C.TextButton>
          </C.ButtonCancel>
        </C.ModalView>
      </Modalize>
    </C.Container>
  );
};
export default ModalPerfil;
