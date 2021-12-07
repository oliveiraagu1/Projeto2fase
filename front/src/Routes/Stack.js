import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicio from "../Pages/Inicio";
import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";

import Restaurantes from "../Pages/Home/Components/Restaurantes";
import Boates from "../Pages/Home/Components/Boates";
import Atracoes from "../Pages/Home/Components/Atracoes";
import Praias from "../Pages/Home/Components/Praias";

import Detail from "../Pages/Detail";

import PontosHistoricos from "../Pages/pontosHistoricos/HomePontos";
import Palacio from "../Pages/pontosHistoricos/locais/Palacio";
import Catedral from "../Pages/pontosHistoricos/locais/Catedral";
import Forte from "../Pages/pontosHistoricos/locais/Forte";
import Praca from "../Pages/pontosHistoricos/locais/Praca";
import Engenho from "../Pages/pontosHistoricos/locais/Engenho";

import TabRoutes from "../Routes/Tab";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inicio"
        component={Inicio}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen
        name="Home"
        component={TabRoutes}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PontosHistoricos"
        component={PontosHistoricos}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Palacio" component={Palacio} />
      <Stack.Screen name="Catedral" component={Catedral} />
      <Stack.Screen name="Forte" component={Forte} />
      <Stack.Screen name="Praca" component={Praca} />
      <Stack.Screen name="Engenho" component={Engenho} />
      <Stack.Screen
        name="Restaurantes"
        component={Restaurantes}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Boates"
        component={Boates}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Atracoes"
        component={Atracoes}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Praias"
        component={Praias}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
