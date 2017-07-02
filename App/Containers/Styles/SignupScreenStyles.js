import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

export default {
  container: {
    paddingTop: 30,
    paddingVertical: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin
  },
  form: {
    borderRadius: 4,
    marginBottom: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin
  },
  row: {
    paddingVertical: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
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
    marginTop: 10
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
  checkboxRow: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: Metrics.baseMargin
  },
  checkboxLabel: {
    marginLeft: 20
  },
  or: {
    textAlign: 'center'
  },
  socialButton: {
    paddingBottom: Metrics.baseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    flexDirection: 'row',
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
    justifyContent: 'center',
    alignSelf: 'center',
    paddingBottom: Metrics.baseMargin
  },
  headerTitle: {
    fontSize: 30
  },
  submitButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: Metrics.doubleBaseMargin
  }
}
