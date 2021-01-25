import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Bottom from './bottomTabs';
import AddBank from './Bank';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Bottom">
      <Stack.Screen
        name="Bottom"
        component={Bottom}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddBank"
        component={AddBank}
        options={{
          title: 'Adicionar Banco',
        }}
      />
    </Stack.Navigator>
  );
}
