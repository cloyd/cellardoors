import { StackNavigator } from 'react-navigation'
import AuthenticatedScreen from '../Containers/AuthenticatedScreen'
import AnotherAuthenticatedScreen from '../Containers/AnotherAuthenticatedScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
export default StackNavigator({
  AuthenticatedScreen: {
    screen: AuthenticatedScreen
  },
  AnotherAuthenticatedScreen: { screen: AnotherAuthenticatedScreen }
}, {
  // Default config for all screens
  headerMode: 'float',
  navigationOptions: {
    title: 'Cellardoors.co',
    headerStyle: styles.header
  }
})
