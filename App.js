import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';

import Routes from './src/pages';
import { persistor, store } from './src/store';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes />
          <FlashMessage floating duration={1500} />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
