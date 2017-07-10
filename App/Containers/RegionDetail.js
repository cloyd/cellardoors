import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { ListView, Image } from 'react-native'
import {
  View,
  Container,
  Content,
  Text,
  Grid,
  Row,
  Col,
  Button,
  H1
} from 'native-base'

import Images from '../Themes/Images'
import Styles from './Styles/RegionsStyles'
import SearchActions from '../Redux/SearchRedux'

class RegionDetail extends React.Component {
  static propTypes = {
    region: PropTypes.object
  }
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount () {
    // console.tron.log({regionDetail: this.props})
  }

  componentWillReceiveProps (newProps) {
    // console.log('received props', newProps)
  }

  componentWillUnmount () {
  }

  componentDidMount () {
    // console.log('will mount', this.props)
  }

  handlePressListing = () => {
    const { performSearch, region, navigation} = this.props
    const { params } = navigation.state
    const searchParams = { location: region.title }
    performSearch(searchParams)
    navigation.navigate('WineRegionListings', params)
  }

  render () {
    const { region } = this.props
    const { params } = this.props.navigation.state
    // if (region) {
      return (
        <Container >
          <Content>
            <Grid>
              <Row>
                <Image resizeMode='cover' style={Styles.headerImage} source={Images[params.image]} />
              </Row>
              <Row style={Styles.row}>
                <Col>
                  <H1>{params.title}</H1>
                  <Text note>NEW SOUTH WALES</Text>
                </Col>
              </Row>
              <Row style={Styles.row}>
                <Col>
                  <Text>
                  Hunter Valley is located just a short 2 hour drive north of Sydney.
                  The area was first established in 1897 by the little digger fred shovel who dug a road from Sydney to Cessnock with his trusty little shovel and wheelbarrow.
                  It only took him around 3 months to dig his way up to Newcastle.
                </Text>
                </Col>
              </Row>
              <Row style={Styles.galleryRow}>
                <Col>
                  <Image resizeMode='cover' style={Styles.galleryImage} source={Images.gundagai} />
                </Col>
                <Col style={{width: 10}} />
                <Col>
                  <Image resizeMode='cover' style={Styles.galleryImage} source={Images.hilltops} />
                </Col>
              </Row>
              <Row style={Styles.row}>
                <Col>
                  <Text style={Styles.p}>
                  Hunter Valley is located just a short 2 hour drive north of Sydney.
                  The area was first established in 1897 by the little digger fred shovel who dug a road from Sydney to Cessnock with his trusty little shovel and wheelbarrow.
                  It only took him around 3 months to dig his way up to Newcastle. Hunter Valley is located just a short 2 hour drive north of Sydney.
                  The area was first established in 1897 by the little digger fred shovel who dug a road from Sydney to Cessnock with his trusty little shovel and wheelbarrow.
                  It only took him around 3 months to dig his way up to Newcastle.
                </Text>
                </Col>
              </Row>
              <Row style={Styles.row}>
                <Col>
                  <Text style={Styles.h3}>Places to visit</Text>

                  <Text style={Styles.p}>
                  Hunter Valley is located just a short 2 hour drive north of Sydney. The area was first established in 1897 by the little digger. Hunter Valley is located just a short 2 hour drive north of Sydney. The area was first established in 1897 by the little digger.
                </Text>

                  <Text style={Styles.h3}>Things to do</Text>

                  <Text style={Styles.p}>
                  Hunter Valley is located just a short 2 hour drive north of Sydney. The area was first established in 1897 by the little digger. Hunter Valley is located just a short 2 hour drive north of Sydney.
                </Text>

                  <Text style={Styles.h3}>How to get there</Text>

                  <Text style={Styles.p}>
                  Hunter Valley is located just a short 2 hour drive north of Sydney. The area was first established in 1897 by the little digger. Hunter Valley is located just a short 2 hour drive north of Sydney. The area was first established in 1897 by the little digger.
                </Text>
                </Col>
              </Row>
              <Row style={[Styles.row, Styles.buttonRow]}>
                <Col style={{flexDirection: 'row', justifyContent: 'center', paddingBottom: 55}}>
                  <Button style={{flex: 0, justifyContent: 'center'}} onPress={this.handlePressListing}>
                    <Text style={{textAlign: 'center'}}>VIEW LISTING</Text>
                  </Button>
                </Col>
              </Row>
            </Grid>
          </Content>
        </Container>
      )
    // }
    // return <View />
  }
}


const mapStateToProps = (state) => {
  return {
    region: state.regions.region,
    data: state.home.homedata
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    performSearch: (searchTerm, location, page, modules, category) => dispatch(SearchActions.search(searchTerm, location, page, modules, category))
    // cancelSearch: () => dispatch(SearchActions.cancelSearch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegionDetail)
