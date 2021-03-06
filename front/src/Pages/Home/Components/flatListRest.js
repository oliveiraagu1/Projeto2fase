import React from "react";
import * as C from "../../../styles/styles_adm";
import { Ionicons } from "@expo/vector-icons";
import Stars from "react-native-stars";
import { DadosUsers } from "../../../Context/Contex";


const FlatListRest = ({ nav, data }) => {
  const { url } = DadosUsers();

  
  const teste = () => {
    
    nav.navigate("Detail", {id: data.id});
  }

  return (
    <C.ScrollFlat>
      <C.ViewFlat>
        <C.ButtonFlat activeOpacity={0.7} onPress={teste}>
          <C.ImgFlat source={{ uri: url + data.img }} />
        </C.ButtonFlat>
      </C.ViewFlat>
      <C.ViewInfoFlat>
        <C.TitleFlat>{data.title}</C.TitleFlat>
        <Stars
          default={data.avaliacao}
          count={5}
          half={true}
          starSize={24}
          fullStar={<Ionicons name="md-star" size={24} color="#ffd00a" />}
          emptyStar={
            <Ionicons name="md-star-outline" size={24} color="#ffd00a" />
          }
          halfStar={<Ionicons name="md-star-half" size={24} color="#ffd00a" />}
          disable={true}
        />
      </C.ViewInfoFlat>
    </C.ScrollFlat>
  );
};

export default FlatListRest;
