import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './Home';
import Operations from './Operations';
import Transfers from './Transfers';
import BankAccount from './BankAccount';
import Logout from './Logout';
import { colors } from '../../constants/colors';

const Bottom = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Operations: {
    lib: MaterialCommunityIcons,
    name: 'transfer',
  },
  Transfers: {
    lib: MaterialCommunityIcons,
    name: 'transfer',
  },
  BankAccount: {
    lib: MaterialCommunityIcons,
    name: 'bank',
  },
  Logout: {
    lib: MaterialCommunityIcons,
    name: 'logout',
  },
};

export default function BottomTabs() {
  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { lib: Icon, name } = icons[route.name];

          return <Icon name={name} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: colors.dark,
        },
        activeTintColor: colors.gray,
        inactiveTintColor: colors.secondary,
      }}
    >
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

      <Bottom.Screen
        name="Logout"
        component={Logout}
        options={{ title: 'Logout' }}
      />
    </Bottom.Navigator>
  );
}
