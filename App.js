import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

import MainNavigator from './navigation';

import { Provider } from 'react-redux';
import store from './store';
import { init } from './db';

init()
  .then( ()=>console.log('Database initialized') )
  .catch((err)=>{
    console.log('Database failed to connect');
    console.log(err.message);
  });

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
      <MainNavigator />
    </Provider>
    
  );
}
