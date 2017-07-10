import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  homeRequest: null,
  homeSuccess: ['data'],
  homeFailure: ['error']
})

export const HomeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  error: null,
  fetching: false
})

/* ------------- Reducers ------------- */

// we're attempting to home
export const request = (state) => {
  return state.merge({ fetching: true })
}

// we've successfully logged in
export const success = (state, { data }) => {
  return state.merge({ fetching: false, error: null, data })
}

// we've had a problem logging in
export const failure = (state, { error }) => {
// console.log('failed', error)
  return state.merge({ fetching: false, error })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.HOME_REQUEST]: request,
  [Types.HOME_SUCCESS]: success,
  [Types.HOME_FAILURE]: failure
})

/* ------------- Selectors ------------- */

