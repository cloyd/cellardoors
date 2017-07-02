import React from 'react'
import { StackNavigator } from 'react-navigation'
import Nativebase from '../Containers/Nativebase'
import LaunchScreen from '../Containers/LaunchScreen'

import LoadingScreen from '../Containers/LoadingScreen'
import TutorialStackNavigator from './TutorialStackNavigator'
import LoggedInStackNavigator from './LoggedInStackNavigator'
import NotLoggedInStackNavigator from './NotLoggedInStackNavigator'



import { Button, Text } from 'native-base'

const profile = () => {
  <Text>profile</Text>
}

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LoadingScreen: { screen: LoadingScreen },
  TutorialStack: { screen: TutorialStackNavigator },
  LoggedInStack: { screen: LoggedInStackNavigator },
  NotLoggedInStack: { screen: NotLoggedInStackNavigator },
  Nativebase: { screen: Nativebase},
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  // headerMode: 'none',
  // initialRouteName: 'LaunchScreen',
  // navigationOptions: {
  //   title: 'Home',
  //   headerStyle: styles.header,
  //   headerLeft: (
  //      <Button transparent><Text style={{color: 'blue'}}>Menu</Text></Button>
  //   ),
  //   headerRight: (
  //      <Button transparent><Text style={{color: 'blue'}}>profile</Text></Button>
  //   )
  // }

  headerMode: 'none',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
