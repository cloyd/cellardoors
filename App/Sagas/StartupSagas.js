import { put, select } from 'redux-saga/effects'
import GithubActions from '../Redux/GithubRedux'
import AppStateActions, {isRehydrationComplete} from '../Redux/AppStateRedux'
import LoggedInActions, { isLoggedIn, isNew } from '../Redux/LoginRedux'

import { is } from 'ramda'

// exported to make available for tests
export const selectAvatar = (state) => state.github.avatar
export const selectLoggedInStatus = (state) => isLoggedIn(state.login)
export const selectNewStatus = (state) => isNew(state.login)

export const localStorage = (state) => isRehydrationComplete(state.appState)


// process STARTUP actions
export function * startup (action) {
  if (__DEV__ && console.tron) {
    // straight-up string logging
    console.tron.log('Hello, I\'m an example of how to log via Reactotron.')

    // logging an object for better clarity
    console.tron.log({
      message: 'pass objects for better logging',
      someGeneratorFunction: selectAvatar
    })

    // fully customized!
    const subObject = { a: 1, b: [1, 2, 3], c: true }
    subObject.circularDependency = subObject // osnap!
    console.tron.display({
      name: '🔥 IGNITE 🔥',
      preview: 'You should totally expand this',
      value: {
        '💃': 'Welcome to the future!',
        subObject,
        someInlineFunction: () => true,
        someGeneratorFunction: startup,
        someNormalFunction: selectAvatar
      }
    })
  }

  // console.log('action', action)
  // const avatar = yield select(selectAvatar)
  // console.log('avatar', avatar)
  // only get if we don't have it yet
  // if (!is(String, avatar)) {
  //   yield put(GithubActions.userRequest('GantMan'))
  // }
  const local = yield select(localStorage)
  console.log('local', local)
  if (!local) {
    yield put(AppStateActions.setRehydrationComplete())
  }
    const isNew = yield select(selectNewStatus)
    const isLoggedIn = yield select(selectLoggedInStatus)
    console.log('isNew', isNew)
    console.log('isLoggedIn', isLoggedIn)  

    if (isNew) {
      yield put(LoggedInActions.tutorial())
    } else {
      if (isLoggedIn) {
        yield put(LoggedInActions.autoLogin())
      }
    }
}
