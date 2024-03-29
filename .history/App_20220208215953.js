import React from 'react'
import {Provider as PaperProvider } from 'react-native-paper'
import NavigationContainer from './src/navigation/index'
import {Provider as StoreProvider} from 'react-redux'
import store from './src/reducer/store'

export default function App(){
  return (
    <StoreProvider store = {store}>
    <PaperProvider>
      <NavigationContainer/>
    </PaperProvider>
    </StoreProvider>
  )
}