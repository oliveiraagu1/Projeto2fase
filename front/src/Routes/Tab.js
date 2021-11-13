import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Pages/Home';
import Perfil from '../Pages/Perfil';
import Teste from '../Pages/Teste';
import Pontos from '../Pages/pontosHistoricos/Pontos';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {

    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="Home1" 
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name="Perfil" 
                component={Perfil}
                options={{
                    headerShown: false
                }}
                
            />
            <Tab.Screen 
                name="Teste" 
                component={Teste} 
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name="PontosHistoricos" 
                component={Pontos} 
                options={{
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

export default TabRoutes;