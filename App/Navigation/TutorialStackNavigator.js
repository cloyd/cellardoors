import { StackNavigator } from 'react-navigation'
import TutorialScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
export default StackNavigator({
  TutorialScreen: {
    screen: TutorialScreen,
  }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'TutorialScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})
