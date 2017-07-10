// import Themes from '../../Themes/native-base-theme/variables/cellardoorsTheme'
import {Metrics, Colors} from '../../Themes'

export default {
  stateButtons: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: Colors.grayButton,
    height: 30
  },
  active: {
    backgroundColor: Colors.grayButton,
    color: '#fff',
    height: 30,

    alignSelf: 'center'
  },
  notActive: {
    backgroundColor: 'transparent',
    height: 30,
    alignSelf: 'center'
  },
  textActive: {

  },
  textNotActive: {
    color: Colors.grayButton
  },
  regionTextWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5
  },
  regionText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.text
  },
  regionIcon: {
    color: Colors.text
  },
  headerImage: {
    width: null,
    flex: 1,
    alignSelf: 'stretch',
    height: 250
  },
  galleryImage: {
    width: null,
    height: 140,
    flex: 1,
    alignSelf: 'stretch'
  },
  row: {
    paddingVertical: Metrics.baseMargin,
    paddingHorizontal: Metrics.baseMargin,
    flexDirection: 'row',
    flex: 1
  },
  galleryRow: {
    paddingVertical: Metrics.baseMargin,
    flexDirection: 'row',
    flex: 1
  },
  buttonRow: {
    paddingTop: Metrics.doubleSection,
    paddingBottom: Metrics.section
  },
  h3: {
    paddingBottom: Metrics.doubleBaseMargin,
    paddingTop: Metrics.baseMargin,
    fontSize: 17
    // borderColor: '#4CAF50', borderWidth: 1
  },
  p: {
    fontSize: 15
  }

}
