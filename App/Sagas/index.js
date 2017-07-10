import { takeLatest } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { LoginTypes } from '../Redux/LoginRedux'
import { SignupTypes } from '../Redux/SignupRedux'
import { HomeTypes } from '../Redux/HomeRedux'
import { RegionTypes } from '../Redux/RegionRedux'
import { SearchTypes } from '../Redux/SearchRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { login } from './LoginSagas'
import { signup } from './SignupSagas'
import { home } from './HomeSaga'
import { regions } from './RegionSagas'
import { search } from './SearchSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
    takeLatest(SignupTypes.SIGNUP_REQUEST, signup),

    takeLatest(HomeTypes.HOME_REQUEST, home),
    takeLatest(RegionTypes.REGION_REQUEST, regions, FixtureAPI),
    takeLatest(SearchTypes.SEARCH, search)

    // some sagas receive extra parameters in addition to an action
    // takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api)
  ]
}
