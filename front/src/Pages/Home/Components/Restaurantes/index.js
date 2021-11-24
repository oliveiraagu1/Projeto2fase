import React, {useState} from "react";
import * as C from "./style";
import FlatListRest from "./flatListRest";


const Restaurantes = () => {

    const [dados, setDados] = useState([
        {id: 1, title: "Restaurante do Quinha", img: require("./teste.jpg")},
        {id: 2, title: "Restaurante do Quinha", img: require("./teste.jpg")},
        {id: 3, title: "Restaurante do Quinha", img: require("./teste.jpg")},
        {id: 4, title: "Restaurante do Quinha", img: require("./teste.jpg")},
        {id: 5, title: "Restaurante do Quinha", img: require("./teste.jpg")},
        {id: 6, title: "Restaurante do Quinha", img: require("./teste.jpg")},
        {id: 7, title: "Restaurante do Quinha", img: require("./teste.jpg")},
        {id: 8, title: "Restaurante do Quinha", img: require("./teste.jpg")},



    ]);
    return(
        <C.Container>
            <C.Title>Restaurantes</C.Title>

            <C.MainView>
                <C.Main
                    data={dados}
                    keyExtractor={ item => String(item.id)}
                    renderItem={ ({ item }) => <FlatListRest data={item} />}
                />
            </C.MainView>
        </C.Container>
    )
}

export default Restaurantes;