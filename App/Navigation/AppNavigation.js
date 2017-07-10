import React from 'react'
import { Animated, Easing } from 'react-native'
import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'

import LoadingScreen from '../Containers/LoadingScreen'
import TutorialStackNavigator from './TutorialStackNavigator'
import LoggedInStackNavigator from './LoggedInStackNavigator'
import NotLoggedInStackNavigator from './NotLoggedInStackNavigator'
import MainDrawer, { CheckInStack, ResultsStack} from './MainDrawer'
import CheckIn from '../Containers/CheckIn'

import { Button, Text } from 'native-base'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    LoadingScreen: { screen: LoadingScreen },
    TutorialStack: { screen: TutorialStackNavigator },
    LoggedInStack: { screen: LoggedInStackNavigator },
    MainDrawer: { screen: MainDrawer },
    NearMe: { screen: ResultsStack },
    WineRegions: { screen: MainDrawer, initialRouteName: 'WineRegions'},
    Deals: { screen: MainDrawer, initialRouteName: 'Deals'},
    CheckIn: { screen: CheckInStack },
    NotLoggedInStack: { screen: NotLoggedInStackNavigator }
  },
  {
    mode: 'card',
    headerMode: 'none',
    transitionConfig: () => (fadeTransition),
    navigationOptions: {
      headerStyle: styles.header,
      headerBackTitleStyle: styles.headerTitle
    }
  }
)

const fadeTransition = {
  transitionSpec: {
    duration: 300,
    // easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps
    const { index } = scene

    // const inputRange = [index-1, index, index+1];
    // const opacity = position.interpolate({
    //     inputRange,
    //     outputRange: [ 0, 1, 0],
    // });

    const opacity = position.interpolate({
      inputRange: [index - 1, index - 0.99, index],
      outputRange: [0, 1, 1]
    })

    return { opacity }
  }
}

const MyTransition = (index, position) => {
  const inputRange = [index - 1, index, index + 1]
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0.8, 1, 1]
  })

  const scaleY = position.interpolate({
    inputRange,
    outputRange: ([0.8, 1, 1])
  })

  return {
    opacity,
    transform: [
            {scaleY}
    ]
  }
}

let TransitionConfiguration = () => {
  return {
        // Define scene interpolation, eq. custom transition
    screenInterpolator: (sceneProps) => {
      const {position, scene} = sceneProps
      const {index, route} = scene
      const params = route.params || {} // <- That's new
      const transition = params.transition || 'default' // <- That's new
      return {
        myCustomTransition: MyCustomTransition(index, position),
        default: MyTransition(index, position)
      }[transition]
    }
  }
}

const transitionConfig = () => ({
  screenInterpolator: (sceneProps) => {
    const { position, scene, progress } = sceneProps
    const { index } = scene
    const inputRange = [index - 1, index, index + 1]
    const opacity = position.interpolate({
      inputRange,
      outputRange: [0, 1, 0]
    })

    return { opacity }
  }
})

export default PrimaryNav
