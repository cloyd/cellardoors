import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  signupRequest: ['firstname', 'lastname', 'email', 'password', 'terms'],
  signupSuccess: ['user'],
  signupFailure: ['error']
})

export const SignupTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  firstname: null,
  lastname: null,
  email: null,
  password: null,
  terms: true,
  error: null,
  fetching: false,
})

/* ------------- Reducers ------------- */

// we're attempting to signup
export const request = (state, { firstname, lastname, email, password, terms }) => {
  // console.log('request', { firstname, lastname, email, password, terms })
  return state.merge({ fetching: true })
}

// we've successfully logged in
export const success = (state, { user }) => {
  return state.merge({ fetching: false, error: null, user })
}

// we've had a problem logging in
export const failure = (state, { error }) => {
  return state.merge({ fetching: false, error })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGNUP_REQUEST]: request,
  [Types.SIGNUP_SUCCESS]: success,
  [Types.SIGNUP_FAILURE]: failure
})

/* ------------- Selectors ------------- */

