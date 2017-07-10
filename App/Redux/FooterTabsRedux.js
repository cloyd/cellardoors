import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  footerSetActive: ['activeTab'],
  footerReset: ['error']
})

export const FooterTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  activeTab: null
})

/* ------------- Reducers ------------- */

// we've successfully logged in
export const setActive = (state, { activeTab }) => {
  return state.merge({ activeTab })
}

// we've had a problem logging in
export const reset = (state) => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FOOTER_SET_ACTIVE]: setActive,
  [Types.FOOTER_RESET]: reset
})

/* ------------- Selectors ------------- */

