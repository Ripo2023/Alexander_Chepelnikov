/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { persistor, store } from '../store';
import 'react-native-gesture-handler';
import RootNavigation from '../navigations';
import '../translations';
import { YaMap } from 'react-native-yamap';
import DropdownAlert from 'react-native-dropdownalert';

YaMap.init('11ce9ef3-ae3c-4fbd-ac01-2df7ac5f8432');
let dropDownAlertRef: any = null;
function App(): JSX.Element {
  dropDownAlertRef = useRef();

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <PaperProvider>
            <RootNavigation />
          </PaperProvider>
        </PersistGate>
      </Provider>
      <DropdownAlert
        containerStyle={{ position: 'absolute' }}
        ref={ref => {
          if (ref) {
            dropDownAlertRef = ref;
          }
        }}
      />
    </>
  );
}
export function alert(type: string, title: string, text: string) {
  // @ts-ignore
  dropDownAlertRef.alertWithType(type, title, text);
}
export default App;
