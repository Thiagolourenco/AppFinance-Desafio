import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';
import Register from './Register';

const Stack = createStackNavigator();

export default function Authentication() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
