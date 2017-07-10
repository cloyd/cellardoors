import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { ListView, Image } from 'react-native'
import {
  View,
  Text,
  Button,
  Icon,
  List
} from 'native-base'
import _ from 'lodash'
import { Colors } from '../Themes'
class TabNav extends React.Component {
  static propTypes = {
    // data: PropTypes.object
  }
  constructor (props) {
    super(props)
    this.state = {
      activeButton: 1,
      buttons: props.data,
      dataSource: props.data
    }
  }

  componentWillMount () {
  }

  componentWillReceiveProps (newProps) {
    this.forceUpdate()
    // console.tron.log('received props', newProps)
    this.setState({buttons: newProps.data})
    // const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    // this.state = {
    //   dataSource: ds.cloneWithRows(newProps.data)
    // }
  }

  componentDidMount () {
  }

  componentWillUnmount () {
    // console.log('componentWillUnmount')
  }

  handleSetActiveButton = (item) => {
    // dataSource.forEach((button) => {
    //   button.active = (button.id === item.id)
    // })
    this.setState({activeButton: item.id})
    // console.tron.log({states: this.state})
  }

  renderButtons = (item) => {
    const { activeButton } = this.state
    const buttonStyle = (item.id === activeButton) ? 'active' : 'notActive'
    const buttonTextStyle = (item.id === activeButton) ? 'textActive' : 'textNotActive'
    return (
      <Button style={Styles[buttonStyle]} onPress={() => this.handleSetActiveButton(item)}>
        <Text style={Styles[buttonTextStyle]}>{_.capitalize(item.label)}</Text>
      </Button>
    )
  }

  render () {
    const {buttons, activeButton} = this.state
    if (buttons) {
      return (
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', marginHorizontal: 10}}>
          <Button transparent iconLeft style={{paddingLeft: 0}}>
            <Icon name='arrow-back' style={{color: '#c6ccd2'}} />
          </Button>
          <List horizontal key={activeButton} dataArray={buttons}
            renderRow={(item) => this.renderButtons(item)}
            />
        </View>
      )
    }
    return <View />
  }
}

const Styles = {
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
  }
}

TabNav.defaultProps = {
  // data: {}
}

const mapStateToProps = (state) => {
  return {
    // region: state.regions.region
    // categories: state.listing.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // upadteCategories: (categories) => dispatch(SearchActions.listingCategoriesSuccess(categories))
    // cancelSearch: () => dispatch(SearchActions.cancelSearch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabNav)
