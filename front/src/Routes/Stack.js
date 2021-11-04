import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Inicio from '../Pages/Inicio';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Cadastro';
import Home from '../Pages/Home';
import TabRoutes from '../Routes/Tab'


const Stack = createNativeStackNavigator();

const StackRoutes = () => {

    return(

        <Stack.Navigator initialRouteName={Home}>
            
             <Stack.Screen
                name='Inicio'
                component={Inicio}
            /> 
              <Stack.Screen
                name='Login'
                component={Login}
            /> 
              <Stack.Screen
                name='Cadastro'
                component={Cadastro}
            />
             <Stack.Screen
                name='Home'
                component={TabRoutes}
            />
        </Stack.Navigator>
    )
}

export default StackRoutes;