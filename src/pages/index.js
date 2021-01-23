import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import Authentication from './Authentication';
import Dashboard from './Dashboard/bottomTabs';

const Stack = createStackNavigator();

export default function Routes() {
  const token = useSelector((state) => state.auth.token);

  return (
    <Stack.Navigator initialRouteName="Authentication">
      {token === null ? (
        <Stack.Screen
          name="Authentication"
          component={Authentication}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}
