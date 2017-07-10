import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  regionRequest: null,
  regionSuccess: ['regions', 'region'],
  regionFailure: null,
  regionActive: ['region']
})

export const RegionTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  regions: null,
  region: null
})

/* ------------- Reducers ------------- */

// request the listings for a city
export const request = (state) => {
  return state.merge({ fetching: true })
}

// successful listings lookup
export const success = (state, action) => {
  const { regions } = action
  return state.merge({ fetching: false, error: null, regions })
}

// failed to get the listings
export const failure = (state) =>
  state.merge({ fetching: false, error: true, regions: null })

export const active = (state, action) => {
  const { region } = action
  return state.merge({ fetching: false, error: null, region })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REGION_REQUEST]: request,
  [Types.REGION_SUCCESS]: success,
  [Types.REGION_FAILURE]: failure,
  [Types.REGION_ACTIVE]: active
})
