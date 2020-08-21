import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from 'expo'
import {Archivo_400Regular, Archivo_700Bold} from '@expo-google-fonts/archivo'
import {Poppins_400Regular, Poppins_600SemiBold, useFonts} from '@expo-google-fonts/poppins'


import React from 'react';
import AppStack from './src/routes/appStack';

export default function App() {
  let[fontsLoaded] = useFonts({
      Archivo_400Regular,
      Archivo_700Bold,
      Poppins_600SemiBold,
      Poppins_400Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
         <AppStack />
         <StatusBar style="light"/>
      </>
      
       
      
    )
  }
  
  ;
}


