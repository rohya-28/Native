import { View, Text } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/native'
import { StatusBar } from 'react-native'

const FocusStatusBar = (props) => {
 const isFocused = useIsFocused() 

  return  isFocused ? <StatusBar animated={true} {...props}/> :null ;
}

export default FocusStatusBar