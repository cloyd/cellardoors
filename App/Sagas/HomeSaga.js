import { put, call } from 'redux-saga/effects'
import HomeActions from '../Redux/HomeRedux'
// import ListingsAction from '../Redux/ListingRedux'

import API from '../Services/Api'

const api = API.cellardoorsAPI()

export function * home (action) {
  // yield put(ListingsAction.listingCategoriesRequest(api))
  try {
    const result = yield call(api.getHome)
    const results = result.data.data
    if (result.ok) {
      yield put(HomeActions.homeSuccess(results))
    }
  } catch (e) {
    yield put(HomeActions.homeFailure())
  }
}
