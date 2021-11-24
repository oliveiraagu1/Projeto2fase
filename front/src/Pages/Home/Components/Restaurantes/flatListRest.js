import React from "react";
import * as C from "./style";
import { Ionicons } from "@expo/vector-icons";
import Stars from "react-native-stars";

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
          <Stars
            default={data.avaliacao}
            count={5}
            half={true}
            starSize={24}
            fullStar={<Ionicons name="md-star" size={24} color="#e7a74e" />}
            emptyStar={<Ionicons name="md-star-outline" size={24} color="#e7a74e" />}
            halfStar={<Ionicons name="md-star-half" size={24} color="#e7a74e" />}
            disable={true}
          />
        </C.ViewInfo>
      </C.ScrollFlat>
    </C.ContainerFlat>
  );
};

export default FlatListRest;
