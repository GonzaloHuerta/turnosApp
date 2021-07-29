import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./auth";
import TabNavigator from "./tab";

export default () => {
  const [user, setUser] = useState('text'); //le puse un txt en el estado para que no renderize el login

  return (
    <NavigationContainer>
      {
        user ? <TabNavigator /> : <AuthNavigator />
      }
    </NavigationContainer>
  );
};
