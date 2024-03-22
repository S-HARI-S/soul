import React from "react";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import Octagon from "./pinnedChats/flower";
import Rectangle from "./pinnedChats/reactangle";


const Tab = createMaterialBottomTabNavigator();

export default function BottomNavbar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Octagon} />
      <Tab.Screen name="Settings" component={Rectangle} />
    </Tab.Navigator>
  );
}
