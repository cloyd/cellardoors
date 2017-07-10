import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { ListView, Image, ScrollView } from 'react-native'
import {
  View,
  Container,
  Content,
  Spinner,
  Text,
  Button,
  List,
  Card,
  CardItem,
  Left,
  Body,
  Right,
  Icon,
  Thumbnail
} from 'native-base'

import Images from '../Themes/Images'

import Styles from './Styles/ResultStyles'


import TabNav from '../Components/TabNav'
// import MapBox from '../Components/MapBox'
// import FilterDropdown from '../Components/FilterDropdown'
// import Listings from '../Components/Listings'

// import Favorites from './Favorites'

class ResultListings extends React.Component {
  static propTypes = {
    // region: PropTypes.object
  }
  constructor (props) {
    super(props)
    this.state = {
      showList: false,
      countryName: '',
      regionName: '',
      filterVisible: false
    }
  }

  componentWillMount () {
    // console.tron.log(this.props)
  }

  componentWillReceiveProps (newProps) {
    this.forceUpdate()
    console.tron.log(newProps)
  }

  componentDidMount () {
    // console.log('will mount', this.props)
    // const url = 'https://freegeoip.net/json/'
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     console.tron.log(responseJson)
    //     this.setState({
    //       countryName: responseJson.country_name,
    //       regionName: responseJson.region_name
    //     })
    //   })
    //   .catch((error) => {
    //     // console.tron.log(responseJson)
    //   })
  }
  componentWillUnmount () {
  }

  showFilter = () => {
    const { searching, results } = this.props
    if (!searching) {
      if (results) {
        // NavigationActions.search({animation: 'fade'})
      }
    }
  }

  renderMap = () => {
    const { searching, results, region } = this.props
    if (!searching) {
      if (results) {
        return (
          <View style={{flex: 1}}>
            <MapBox locations={results.data} location={region} />
          </View>
        )
      }
    }
    // return (
    //   <View style={Styles.centerView}>
    //     <View style={Styles.center}>
    //       <Spinner color={Styles.primaryColor} />
    //     </View>
    //   </View>
    // )
  }
  renderListButton = () => {
    const { searching, results } = this.props
    if (!this.state.showList && !searching && results) {
      return (
        <View style={{ backgroundColor: '#fff', height: 30 }}>
          <View style={Styles.listWrapper}>
            <Button full transparent onPress={() => this.setState({ showList: true })}>
              <Text style={Styles.listButtonText}>BACK TO LIST</Text>
            </Button>
          </View>
        </View>
      )
    }
    return <View />
  }

  renderList = () => {
    const { results } = this.props
    if (this.state.showList) {
      return <Listings listings={results.data} borderRight />
    }
    return <View style={{ backgroundColor: '#fff', height: 30, paddingBottom: 55 }} />
  }

  renderTopNav = () => {
    const {results} = this.props
    // console.tron.log({cat: results.filtering.categories.values})
    return (
      <View style={{ height: 50 }} >
        <TabNav data={results.filtering.categories.values} />
      </View>
    )
  }

  render () {
    const {searching, results} = this.props

    if (!searching) {
      if (results) {
        return (
          <Container style={Styles.container}>
            <View style={Styles.content}>
              {this.renderTopNav()}
              <View style={{ height: 30 }} >
                <View style={{flex: 1, backgroundColor: '#9E9E9E', justifyContent: 'center', alignItems: 'center'}}>
                  <Button full transparent onPress={this.showFilter}>
                    <Text style={{color: '#fff'}}>FILTER BY: FEATURED</Text>
                  </Button>
                </View>
              </View>
              <View style={{ flex: 1 }}>
                {/*{this.renderMap()}*/}
              </View>
              {this.renderListButton()}
              {/*{this.renderList()}*/}
            </View>
          </Container>
        )
      }
    }

    return (
      <View style={Styles.centerView}>
        <View style={Styles.center}>
          <Spinner color={Styles.primaryColor} />
        </View>
      </View>
    )

    // return <Container><Text>Loading...</Text></Container>
  }
}


const mapStateToProps = (state) => {
  return {
    // categories: state.listing.categories,
    results: state.search.results,
    searching: state.search.searching,
    region: state.regions.region
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // cancelSearch: () => dispatch(SearchActions.cancelSearch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultListings)

const categories = {

}
