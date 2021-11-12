import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Inicio from '../Pages/Inicio';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Cadastro';
import TabRoutes from '../Routes/Tab'


const Stack = createNativeStackNavigator();

const StackRoutes = () => {

    return(

        <Stack.Navigator>
            
            {/* <Stack.Screen
                name='Inicio'
                component={Inicio}
                options={{
                    headerShown: false
                }}
            /> 
              <Stack.Screen
                name='Login'
                component={Login}
            /> 
              <Stack.Screen
                name='Cadastro'
                component={Cadastro} */
            /* /> */}
             <Stack.Screen
                name='Home'
                component={TabRoutes}
                options={{
                    
                    headerShown: false,
                   
                }}
            />
        </Stack.Navigator>
    )
}

export default StackRoutes;