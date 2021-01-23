import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Operations from './Operations';
import Transfers from './Transfers';
import BankAccount from './BankAccount';

const Bottom = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Bottom.Navigator initialRouteName="Home">
      <Bottom.Screen name="Home" component={Home} options={{ title: 'Main' }} />
      <Bottom.Screen
        name="Operations"
        component={Operations}
        options={{ title: 'Operations' }}
      />
      <Bottom.Screen
        name="Transfers"
        component={Transfers}
        options={{ title: 'Transfers' }}
      />
      <Bottom.Screen
        name="BankAccount"
        component={BankAccount}
        options={{ title: 'BankAccount' }}
      />
    </Bottom.Navigator>
  );
}
