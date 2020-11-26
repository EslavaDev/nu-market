/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { StackNavigation } from './navigation';
import { store } from './store';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <StackNavigation />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
