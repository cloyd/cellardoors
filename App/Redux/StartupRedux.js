import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'


/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null,
  footerVisible: ['visible']
})

export const StartupTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  visible: true
})



/* ------------- Reducers ------------- */

// we've successfully logged in
export const setActive = (state, { visible }) => {
  return state.merge({ visible })
}

// we've had a problem logging in
export const reset = (state) => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FOOTER_VISIBLE]: setActive,
  [Types.FOOTER_RESET]: reset
})

/* ------------- Selectors ------------- */


