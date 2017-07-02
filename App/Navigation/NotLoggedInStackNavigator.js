import { StackNavigator } from 'react-navigation'
import LoginScreen from '../Containers/LoginScreen'
import SignUpScreen from '../Containers/SignUpScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
export default StackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: { title: 'Cellardoors.co' }
  },
  SignUpScreen: {
    screen: SignUpScreen,
    navigationOptions: { title: 'Cellardoors.co' }
  },
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'SignUpScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})
