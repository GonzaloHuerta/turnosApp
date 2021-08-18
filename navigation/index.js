import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from "./tab";

export default () => {
  return (
    <NavigationContainer>
       <TabNavigator /> 
    </NavigationContainer>
  );
};
