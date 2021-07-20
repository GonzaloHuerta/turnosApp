import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

import Navigator from './navigation/Navigator';

import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  
  const [dataLoaded] = useFonts({
    'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  })

  if(!dataLoaded){
    return <AppLoading />
  }

  return ( 
    <Provider store={store}>
      <Navigator />
    </Provider>
    
  );
}
