import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import { Entypo } from "@expo/vector-icons"
import styled from 'styled-components/native';

const ButtonNew = ({ size, focused }) => {

    return(

        <View style={[styles.container, { backgroundColor: focused ? "#3eccf5" : "#6fdfff"}]}>
            <Entypo name="plus" color={focused ? "#FFF" : "#F8f8f8"} size={size} />
        </View>
    )

};

//"#3eccf5" : "#6fdfff"

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#3eccf5",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    }
});

export default ButtonNew;