import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../screens/Home";
import { Renderer } from "../../screens/modelrenderer";

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ title: "Welcome" }}
          component={Home}
        />
        <Stack.Screen
          name="Renderer"
          options={{ title: "3d Renderer" }}
          component={Renderer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
