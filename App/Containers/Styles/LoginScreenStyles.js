import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    // paddingTop: 70,
    backgroundColor: '#f1f2f6'
  },
  form: {
    // backgroundColor: Colors.snow,
    margin: Metrics.baseMargin,
    borderRadius: 4,
    marginBottom: 10
  },
  row: {
    paddingVertical: Metrics.baseMargin,
    paddingHorizontal: Metrics.baseMargin,
    flexDirection: 'row',
    flex: 1
  },
  rowLabel: {
    color: Colors.charcoal
  },
  textInput: {
    height: 40,
    color: Colors.coal
  },
  textInputReadonly: {
    height: 40,
    color: Colors.steel
  },
  loginRow: {
    paddingBottom: Metrics.baseMargin,
    paddingHorizontal: Metrics.baseMargin,
    flexDirection: 'row',
    // marginTop: 10
  },
  loginSocial: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  loginButtonWrapper: {
    flex: 1
  },
  loginButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.charcoal,
    backgroundColor: Colors.panther,
    padding: 6
  },
  loginText: {
    textAlign: 'center',
    color: Colors.silver
  },
  topLogo: {
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  or: {
    textAlign: 'center'
  },
  facebookButton: {
    backgroundColor: Colors.facebook,
    flex: 1,
    justifyContent: 'center'
  },
  googleButton: {
    backgroundColor: Colors.google,
    flex: 1,
    justifyContent: 'center'
  },
  footerRow: {
    marginHorizontal: '30%',
    justifyContent: 'space-around'
  },
  headerRow: {
    flex: 1,
    justifyContent: 'flex-start',
    alignSelf: 'center'
  },
  headerTitle: {
    fontSize: 30
  }
})
