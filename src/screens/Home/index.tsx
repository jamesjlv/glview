import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";

export const Home = () => {
  const { navigate } = useNavigation();

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigate("Renderer")}>
        <Text style={{ fontSize: 20 }}>Go to Renderer</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
