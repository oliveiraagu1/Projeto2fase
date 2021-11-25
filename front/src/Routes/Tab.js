import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PerfilIcon from '../Assets/TabNav/perfil.svg'
import Home from '../Pages/Home';
import Perfil from '../Pages/Perfil';
import Teste from '../Pages/Teste';
import ButtonNew from '../Pages/Teste/ButtonNew';

import { Entypo, Feather } from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

export default function TabRoutes() {

    return (
        <Tab.Navigator
            screenOptions={{
                "tabBarStyle": [
                    {
                        "backgroundColor": "#E3F2FD",
                        "borderTopColor": "transparent",
                        "paddingBottom": 5,
                        "paddingTop": 5
                    }
                ]
            }}
        >
            <Tab.Screen
                name="Home1" 
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="home" size={size} color={color}/>
                    ),
                    headerShown: false,
                }}
            />
             <Tab.Screen
                name="Novo"
                component={Teste}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ focused, size }) => (
                        <ButtonNew size={size} focused={focused} />
                    ),
                    headerShown: false
                }}
            />

            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="user" size={size} color={color}/>
                    ),
                    headerShown: false
                }}
            />
           
        </Tab.Navigator>
    )
};

