import { NavigationActions } from 'react-navigation'
import AppNavigation from '../Navigation/AppNavigation'
import MainDrawer from '../Navigation/MainDrawer'

const { navigate, reset } = NavigationActions
const { getStateForAction } = AppNavigation.router

const INITIAL_STATE = getStateForAction(
  navigate({ routeName: 'LoadingScreen' })
)

const NEW_STATE = getStateForAction(reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'TutorialStack' })
  ]
}))

const NOT_LOGGED_IN_STATE = getStateForAction(reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'NotLoggedInStack' })
  ]
}))

const LOGGED_IN_STATE = getStateForAction(reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'MainDrawer' })
  ]
}))

// const SEARCH = getStateForAction(reset({
//   index: 0,
//   actions: [
//     NavigationActions.navigate({ routeName: 'Search' })
//   ]
// }))

const SEARCH = getStateForAction(navigate({
  action: NavigationActions.navigate({ routeName: 'Search' })
}))
const NEARME = getStateForAction(navigate({
  action: NavigationActions.navigate({ routeName: 'Search' })
}))

const WINEREGIONS = getStateForAction(navigate({
  action: NavigationActions.navigate({ routeName: 'WineRegions' })
}))
const DEALS = getStateForAction(navigate({
  action: NavigationActions.navigate({ routeName: 'Deals' })
}))
const CHECKIN = getStateForAction(navigate({
  action: NavigationActions.navigate({ routeName: 'CheckIn' })
}))

// const CHECKIN = getStateForAction(reset({
//   index: 0,
//   actions: [
//     NavigationActions.navigate({ routeName: 'CheckIn' })
//   ]
// }))

  // const footerNav = NavigationActions.navigate({

  //   routeName: 'MainDrawer',

  //   params: {},

  //   action: NavigationActions.navigate({ routeName: 'Drink'})
  // })

export function reducer (state = INITIAL_STATE, action) {
  let nextState
  switch (action.type) {
    case 'AUTH':
      return NOT_LOGGED_IN_STATE
    case 'LOGOUT':
      return NOT_LOGGED_IN_STATE
    case 'LOGIN_SUCCESS':
      return LOGGED_IN_STATE
    case 'AUTO_LOGIN':
      return LOGGED_IN_STATE
    case 'TUTORIAL':
      return NEW_STATE
    case 'FOOTER_SET_ACTIVE':
      if (action.activeTab === 1) {
        return SEARCH
      } else if (action.activeTab === 2) {
        return NEARME
      } else if (action.activeTab === 3) {
        return WINEREGIONS
      } else if (action.activeTab === 4) {
        return DEALS
      } else if (action.activeTab === 5) {
        return CHECKIN
      }
      // return FOOTERNAV
  }
  nextState = getStateForAction(action, state)
  return nextState || state
}
