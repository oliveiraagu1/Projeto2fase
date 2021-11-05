import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Pages/Home';
import Perfil from '../Pages/Perfil';
import Teste from '../Pages/Teste';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {

    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
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
        </Tab.Navigator>
    )
}

export default TabRoutes;