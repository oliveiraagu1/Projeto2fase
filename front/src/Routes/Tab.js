import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PerfilIcon from '../Assets/TabNav/perfil.svg'


import Home from '../Pages/Home';
import Perfil from '../Pages/Perfil';
import Teste from '../Pages/Teste';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {

    return (
        <Tab.Navigator
            screenOptions={{
                "tabBarStyle": [
                    {
                        "backgroundColor": "#E3F2FD",


                    }
                ]
            }}
        >
            <Tab.Screen
                name="Home1" component={Home} options={{
                    headerShown: false,
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
};

