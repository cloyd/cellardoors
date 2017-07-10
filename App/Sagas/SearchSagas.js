import { put, call } from 'redux-saga/effects'
import SeachActions from '../Redux/SearchRedux'

import API from '../Services/Api'

const api = API.cellardoorsAPI()
// attempts to login
export function * search (params = {}) {
  try {
    const result = yield call(api.getResult, params)
    if (result.ok) {
      const results = result.data
      yield put(SeachActions.searchResultSuccess(results))
    } else {
      yield put(SeachActions.cancelSearch(result.problem))
    }
  } catch (e) {
  // console.log('error', e)
    yield put(SeachActions.cancelSearch())
  }
}
