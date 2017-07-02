import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default{
  ...ApplicationStyles.screen,
  wrapper: {
    // borderColor: '#03A9F4', borderWidth: 1
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  slide: {
    // marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    width: null,
    height: null,
    flex: 1,
    alignSelf: 'stretch'
  },
  activeDotStyle: {backgroundColor: Colors.brandTitle, width: 10, height: 10, borderRadius: 5, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3},
  paginationStyle: { bottom: 100 },
  sliderContent: { position: 'absolute', top: 0, left: 0, right: 0, bottom: -250, justifyContent: 'center', alignItems: 'center', paddingHorizontal: Metrics.section },
  h1: {color: Colors.brandTitle, fontSize: 30, textAlign: 'center', paddingVertical: Metrics.baseMargin},
  text: {color: Colors.text, fontSize: 15, textAlign: 'center'},
  buttonsRow: { position: 'absolute', top: null, left: 0, right: 0, bottom: 30, marginHorizontal: 30 },
  buttonWrapper: { justifyContent: 'space-between', flexDirection: 'row' },
  buttonSignUp: { flex: 0.5, justifyContent: 'center', marginRight: 5 },
  buttonSkip: { flex: 0.5, justifyContent: 'center', marginLeft: 5 },
  deviceHeight: Metrics.height
}
