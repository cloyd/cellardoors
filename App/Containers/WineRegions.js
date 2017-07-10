import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListView, Image } from 'react-native'
import {
  View,
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Grid,
  Row,
  Col,
  Button,
  Thumbnail,
  List,
  ListItem,
  Right,
  Left,
  Body,
  Icon
} from 'native-base'

import Images from '../Themes/Images'
import Styles from './Styles/RegionsStyles'
import RegionActions from '../Redux/RegionRedux'
import TabNav from '../Components/TabNav'

// import Favorites from './Favorites'

const tempStates = [
  {id: 1, label: 'NSW/ACT', active: true},
  {id: 2, label: 'QLD', active: false},
  {id: 3, label: 'TAS', active: false},
  {id: 4, label: 'VIC', active: false},
  {id: 5, label: 'SA', active: false},
  {id: 6, label: 'WA', active: false}
]

class WineRegions extends Component {
  constructor (props) {
    super(props)
    this.state = {
      states: tempStates,
      activeState: 1
    }
  }

  componentWillMount () {

  }

  componentWillReceiveProps (newProps) {
    // console.log('received props', newProps)
  }

  componentDidMount () {
    // console.log('will mount', this.props)
    const { regions } = this.props
    // if (!regions) {
    this.props.getRegions()
    // }
  }

  componentWillUnmount () {
    // console.log('componentWillUnmount')
  }

  handlePressRegionDetail (region) {
    console.tron.log(region)
    const { navigation } = this.props
    this.props.selectRegion(region)
    navigation.navigate('RegionDetail', region)
  }

  setActiveState (id) {
    this.setState({activeState: id})
    
  }

  renderRegions = () => {
    const { regions } = this.props
    if (regions) {
      const regionsArray = regions.map((region) => {
        return (
          <View key={region.id} style={{width: 170, height: 130}}>
            <Card style={{flex: 0}} >
              <CardItem cardBody button onPress={() => this.handlePressRegionDetail(region)}>
                <Image source={Images[region.image]} style={{height: 100, width: null, flex: 1}} />
              </CardItem>
            </Card>
            <View style={Styles.regionTextWrapper}>
              <Text style={Styles.regionText}>{region.title}</Text>
              <Icon style={Styles.regionIcon} name='ios-information-outline' />
            </View>
          </View>
        )
      })

      return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', paddingBottom: 55 }}>
          {regionsArray}
        </View>
      )
    }
  }

  render () {
    const states = this.state.states
    return (
      <Container>
        <Content padder>
          <TabNav data={states} />
          {this.renderRegions()}
        </Content>
      </Container>
    )
  }
}

WineRegions.contextTypes = {drawer: React.PropTypes.object}
const mapStateToProps = (state) => {
  return {
    regions: state.regions.regions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRegions: () => dispatch(RegionActions.regionRequest()),
    selectRegion: (region) => dispatch(RegionActions.regionActive(region))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WineRegions)
