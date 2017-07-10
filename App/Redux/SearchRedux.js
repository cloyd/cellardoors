import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { filter } from 'ramda'
import { startsWith } from 'ramdasauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  search: ['params'],
  cancelSearch: null,
  request: ['searchLocation'],
  searchResultSuccess: ['results'],
  currentPage: 1,
  updateFilters: ['filters'],
  resetFilters: null,
  getFilters: null
})

export const SearchTypes = Types
// export const TemperatureTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  searchTerm: '',
  searchLocation: '',
  page: 1,
  searching: false,
  results: null,
  filters: tempFilters,
  reset: false
})

/* ------------- Reducers ------------- */

// export const performSearch = (state, { searchTerm }) => {
//   // const results = filter(startsWith(searchTerm), INITIAL_STATE.results)
//   const results = filter(searchTerm, INITIAL_STATE.results)
//   return state.merge({ searching: true, searchTerm, results })
//   // return {...INITIAL_STATE, searchTerm, results}
// }

export const request = (state) => state.merge({ fetching: true })

export const cancelSearch = (state) => INITIAL_STATE

export const performSearch = (state, action) => {
  // const searching = (action.page)
  return state.merge({ searching: true, results: null })
}

export const searchResultSuccess = (state, action) => {
  let results = action.results
  results.data = (state.results) ? state.results.data.concat(action.results.data) : action.results.data
  return state.merge({ searching: false, results })
}
export const getFilters = (state) => {
  return state.merge({ filters: tempFilters })
}

export const updateFilters = (state, action) => {
  const filters = action.filters
  return state.merge({ filters, reset: false })
}

export const resetFilters = (state) => {
  return state.merge({ filters: tempFilters, reset: true })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH]: performSearch,
  [Types.CANCEL_SEARCH]: cancelSearch,
  [Types.SEARCH_RESULT_SUCCESS]: searchResultSuccess,
  [Types.REQUEST_SEARCH]: request,
  [Types.CURRENT_PAGE]: currentPage,
  [Types.UPDATE_FILTERS]: updateFilters,
  [Types.RESET_FILTERS]: resetFilters,
  [Types.GET_FILTERS]: getFilters
})

/* ------------- Selectors ------------- */

// /*export const currentPage = (state) => {
// // console.logg('currentPage', state)
//   return state.page
// }*/

export const currentPage = state => state.page

export const getResults = (state) => {
  // console.log('getResults state', state.search.results)
  return state.search.results
}

const tempFilters = [
  {
    title: 'Wine Regions',
    filters: [
      {id: 1, title: 'Canberra District', image: 'canberraDistrict', geo: {lat: -35.5217551, long: 148.8001222, zoom: 10}, active: false},
      {id: 2, title: 'Cowra', image: 'corwa', geo: {lat: -33.8499221, long: 148.4947148, zoom: 11}, active: false},
      {id: 3, title: 'Gundagai', image: 'gundagai', geo: {lat: -35.0446913, long: 148.0604727, zoom: 13}, active: false},
      {id: 4, title: 'Hilltops', image: 'hilltops', geo: {lat: -34.3438822, long: 150.4430588, zoom: 13}, active: false},
      {id: 5, title: 'Hunter Valley', image: 'hunterValley', geo: {lat: -32.741284, long: 142.8196613, zoom: 6}, active: false},
      {id: 6, title: 'Mudge', image: 'gundagai', geo: {lat: -32.741284, long: 142.8196613, zoom: 6}, active: false},
      {id: 7, title: 'New England', image: 'hilltops', geo: {lat: -32.741284, long: 142.8196613, zoom: 6}, active: false},
      {id: 8, title: 'Orange', image: 'corwa', geo: {lat: -33.2508791, long: 148.9915525, zoom: 12}, active: false},
      {id: 9, title: 'Perricoota', image: 'corwa', geo: {lat: -32.741284, long: 142.8196613, zoom: 6}, active: false},
      {id: 10, title: 'Riverina', image: 'corwa', geo: {lat: -32.741284, long: 142.8196613, zoom: 6}, active: false},
      {id: 11, title: 'Shoalhaven Coast', image: 'corwa', geo: {lat: -32.741284, long: 142.8196613, zoom: 6}, active: false},
      {id: 12, title: 'Southern Highlands', image: 'corwa', geo: {lat: -34.4900601, long: 150.0739998, zoom: 10}, active: false},
      {id: 13, title: 'Tumbarumba', image: 'corwa', geo: {lat: -35.7260762, long: 147.9672076, zoom: 12}, active: false}
    ]
  },
  {
    title: 'Category',
    filters: [
      {id: 5, title: 'DRINK', friendly_url: 'drink', items: 5, active: false},
      {id: 14, title: 'EAT', friendly_url: 'eat', items: 4, active: false},
      {id: 24, title: 'ENJOY', friendly_url: 'enjoy', items: 6, active: false},
      {id: 33, title: 'PLAY', friendly_url: 'play', items: 1, active: false},
      {id: 43, title: 'STAY', friendly_url: 'stay', items: 3, active: false}
    ]
  },
  {
    title: 'Facilities',
    filters: [
        {id: 1, title: 'Cellar Door', active: false},
        {id: 2, title: 'Tasting Tours', active: false},
        {id: 3, title: 'Gift Shop', active: false},
        {id: 4, title: 'Wine Sales', active: false},
        {id: 5, title: 'Restaurant', active: false}
    ]
  }
]
