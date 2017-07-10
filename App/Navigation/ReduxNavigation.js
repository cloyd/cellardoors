import React from 'react'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'
import {View, Text} from 'native-base'

// here is our redux-aware our smart component
function ReduxNavigation (props) {
  const { dispatch, nav } = props
  console.tron.log({dispatch})
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav
  })

  return (
    <AppNavigation navigation={navigation}  />
  )  
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)
