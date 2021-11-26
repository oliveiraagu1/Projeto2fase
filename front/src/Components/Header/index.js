import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Logo from "../../Assets/logo.svg";
import * as C from "./style";

const Header = ({ dados }) => {
  return (
    <C.Container>
      <C.ViewUser>
        <C.TextUser>Ola {dados}!</C.TextUser>
      </C.ViewUser>
      <C.ContainerHeader>
        <C.SubContainerHeader>
          <C.ContainerLogo activeOpacity={0.7}>
            <Logo width={100} height={100} />
          </C.ContainerLogo>
          <C.ViewInfo>
            

          </C.ViewInfo>
        </C.SubContainerHeader>
      </C.ContainerHeader>
    </C.Container>
  );
};

export default Header;
