import { put, call } from 'redux-saga/effects'
import SignupActions from '../Redux/SignupRedux'
import LoginActions from '../Redux/LoginRedux'

import API from '../Services/Api'

const api =  API.cellardoorsAPI()

// attempts to signup
export function * signup ({firstname, lastname, email, password, terms}) {
  if (firstname === '' || lastname === '') {
    yield put(SignupActions.signupFailure('Name Required'))
  } else if (email === '') {
    yield put(SignupActions.signupFailure('Email Required'))
  } else if (password === '') {
    yield put(SignupActions.signupFailure('Password Required'))
  } else {
    try {
      const result = yield call(api.signup, firstname, lastname, email, password, terms)
      if (result.ok) {
        yield put(SignupActions.signupSuccess(result.data.data))
        yield put(LoginActions.loginSuccess(result.data.data))
      } else {
        yield put(SignupActions.signupFailure(result.data.error[0].message))
      }
    } catch (e) {
      yield put(SignupActions.signupFailure(e))
    }
  }
}
