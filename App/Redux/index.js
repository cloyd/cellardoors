import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    appState: require('./AppStateRedux').reducer,
    nav: require('./NavigationRedux').reducer,
    login: require('./LoginRedux').reducer,
    signup: require('./SignupRedux').reducer,
    github: require('./GithubRedux').reducer,
    search: require('./SearchRedux').reducer,
    footerTabs: require('./FooterTabsRedux').reducer,
    home: require('./HomeRedux').reducer,
    regions: require('./RegionRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
