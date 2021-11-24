import React from "react";
import * as C from "./style";
import { Feather } from "@expo/vector-icons";

const FlatListRest = ({ data }) => {
  return (
    <C.ContainerFlat>
      <C.ScrollFlat>
        <C.ViewFlat>
          <C.ButtonFlat>
            <C.ImgFlat source={data.img} />
          </C.ButtonFlat>
        </C.ViewFlat>
        <C.ViewInfo>
          <C.TitleFlat>{data.title}</C.TitleFlat>
          <Feather name="star" size={24} color="black" />
        </C.ViewInfo>
      </C.ScrollFlat>
    </C.ContainerFlat>
  );
};

export default FlatListRest;
