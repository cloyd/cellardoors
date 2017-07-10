import { call, put } from 'redux-saga/effects'
import RegionActions from '../Redux/RegionRedux'

export function * regions (api) {
  // make the call to the api
  const response = yield call(api.getRegions)
  if (response.ok) {
    const regions = response.data.regions
    yield put(RegionActions.regionSuccess(regions))
  } else {
    yield put(RegionActions.regionFailure())
  }
}
