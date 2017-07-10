import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Screen1 from '../Containers/Screen1'
import Screen2 from '../Containers/Screen2'
import WineRegions from '../Containers/WineRegions'
import WineRegion from '../Containers/WineRegion'
import Results from '../Containers/Results'
import CheckIn from '../Containers/CheckIn'

import styles from './Styles/NavigationStyles'

const DrawerIcon = ({ navigate }) => {
  return (
    <Icon
      name='md-menu'
      size={28}
      color='#fff'
      onPress={() => navigate('DrawerOpen')}
      style={{ paddingLeft: 20 }}
    />
  )
}

const ProfileIcon = ({ navigate }) => {
  return (
    <Icon
      name='ios-contact'
      size={28}
      color='#fff'
      onPress={() => navigate('DrawerOpen')}
      style={{ paddingRight: 20 }}
    />
  )
}

const defaultNavigationOptions = {
  navigationOptions: ({navigation}) => ({
    title: 'Cellardoors.co',
    headerRight: <ProfileIcon {...navigation} />,
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerBackTitle: null
  })
}

export const HomeStack = StackNavigator({
  Screen1: {
    screen: Screen1,
    navigationOptions: ({navigation}) => ({
      headerLeft: <DrawerIcon {...navigation} />,
      headerRight: <ProfileIcon {...navigation} />
    })
  },
  Screen2: {
    screen: Screen2
  }
}, defaultNavigationOptions)

export const ResultsStack = StackNavigator({
  Results: {
    screen: Results,
    navigationOptions: ({navigation}) => ({
      title: 'Cellardoors.co',
      headerLeft: <DrawerIcon {...navigation} />,
      headerRight: <ProfileIcon {...navigation} />
    })
  }
}, defaultNavigationOptions)

export const WineRegionsStack = StackNavigator({
  WineRegions: {
    screen: WineRegions,
    navigationOptions: ({navigation}) => ({
      title: 'Cellardoors.co',
      headerLeft: <DrawerIcon {...navigation} />,
      headerRight: <ProfileIcon {...navigation} />
    })
  },
  WineRegion: {
    screen: WineRegion,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.name
    })
  },
  WineRegionListings: {
    screen: Results,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.name || 'Cellardoors.co'
    })
  }
}, defaultNavigationOptions)

export const CheckInStack = StackNavigator({
  CheckIn: {
    screen: CheckIn,
    navigationOptions: ({navigation}) => ({
      title: 'Cellardoors.co',
      headerLeft: <DrawerIcon {...navigation} />,
      headerRight: <ProfileIcon {...navigation} />
    })
  }
}, defaultNavigationOptions)

const MainDrawer = DrawerNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      drawerLabel: 'Home'
    }
  },
  WineRegions: {
    screen: WineRegionsStack,
    navigationOptions: {
      drawerLabel: 'Wine Regions'
    }
  },
  Search: {
    screen: ResultsStack,
    navigationOptions: {
      drawerLabel: 'Search'
    }
  },
  CheckIn: {
    screen: CheckInStack,
    navigationOptions: {
      drawerLabel: 'Check In'
    }
  },
  Drink: {
    screen: ResultsStack,
    navigationOptions: {
      drawerLabel: 'Drink'
    }
  },
  Eat: {
    screen: ResultsStack,
    navigationOptions: {
      drawerLabel: 'Eat'
    }
  },
  Stay: {
    screen: ResultsStack,
    navigationOptions: {
      drawerLabel: 'Stay'
    }
  },
  Play: {
    screen: ResultsStack,
    navigationOptions: {
      drawerLabel: 'Play'
    }
  },
  Enjoy: {
    screen: ResultsStack,
    navigationOptions: {
      drawerLabel: 'Enjoy'
    }
  },
  Events: {
    screen: ResultsStack,
    navigationOptions: {
      drawerLabel: 'Events'
    }
  },
  Deals: {
    screen: ResultsStack,
    navigationOptions: {
      drawerLabel: 'Deals'
    }
  },
  Tales: {
    screen: ResultsStack,
    navigationOptions: {
      drawerLabel: 'Tales from the Cellar Door'
    }
  }
})

export default MainDrawer
