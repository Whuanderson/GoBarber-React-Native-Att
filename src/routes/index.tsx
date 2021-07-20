import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: '#312e38' } }} >
        <Screen
          name="SignIn"
          component={SignIn}
        />
      <Screen
        name="SignUp"
        component={SignUp}
        />
    </Navigator>
  )
}