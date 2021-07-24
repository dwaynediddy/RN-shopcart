import 'react-native-gesture-handler'

import React, { useEffect } from 'react'

import {
  Text,
  View,
} from 'react-native'

import RNBootSplash from "react-native-bootsplash"

import BottomNav from './src/navigation/BottomNav'

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true })
  });
  return (
          <BottomNav />
  )
}


export default App
