import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

const ButtonNew = ({ size, focused }) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: focused ? "#0D47A1" : "#0D47A1" },
      ]}
    >
      <Entypo name="plus" color={focused ? "#FFF" : "#F8f8f8"} size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#3eccf5",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: -10,
  },
});

export default ButtonNew;
