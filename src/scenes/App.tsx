/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { persistor, store } from '../store';
import RootNavigation from '../navigations';
import '../translations';
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider>
          <RootNavigation />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
