import { NavigationActions } from 'react-navigation'
import AppNavigation from '../Navigation/AppNavigation'

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
    NavigationActions.navigate({ routeName: 'LoggedInStack' })
  ]
}))

export function reducer (state = INITIAL_STATE, action) {
  console.log('action', action.type)
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
  }
  nextState = getStateForAction(action, state)
  return nextState || state
}


// export const reducer = (state, action) => {
//   const newState = AppNavigation.router.getStateForAction(action, state)
//   return newState || state
// }
