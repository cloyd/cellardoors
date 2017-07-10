import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { Image } from 'react-native'
import {
  Text,
  Container,
  Button,
  Content,
  Body,
  Right,
  Left,
  Icon,
  Grid,
  Col,
  Row,
  View,
  List,
  ListItem,
  Card,
  CardItem,
  Spinner
} from 'native-base'

import Swiper from 'react-native-swiper'
import { Metrics, Images } from '../Themes'
import HomeActions from '../Redux/HomeRedux'
import RegionActions from '../Redux/RegionRedux'

const links = [
  {
    id: 'deals',
    title: 'Special Offers',
    description: 'SPECIALS & DEALS FOR OUR  MEMBERS',
    image: Images.dealsThumb
  }, {
    id: 'blog',
    title: 'Visit our Blog',
    description: 'READ ABOUT TALES FROM THE CELLAR DOOR',
    image: Images.blogThumb
  }, {
    id: 'about',
    title: 'About Us',
    description: 'WHY WE LOVE WINE AND REGIONAL TOURISM',
    image: Images.aboutThumb
  }
]

class HomeScreen extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    getData: PropTypes.func,
    user: PropTypes.object,
    data: PropTypes.object
  }

  constructor (props) {
    super(props)
    this.state = {

    }
    this.isAttempting = false
  }

  componentDidMount () {
    const {data, regions} = this.props
    if (!data) {
      this.props.getData()
    }

    if (!regions) {
      this.props.getRegions()
    }
  }

  componentWillReceiveProps (newProps) {
    this.forceUpdate()
    // if (!newProps.user) {
    //   // NavigationActions.auth()
    // }
  }

  handlePressDetail (region) {
    const { navigation } = this.props
    navigation.navigate('RegionDetail', region)
    // NavigationActions.wineRegions({animation: 'fade'})
    // NavigationActions.regionDetail({animation: 'fade', data: {region}})
  }

  handlePressLink (item) {
    // ActionConst.PUSH
    // this.props.push()
    // NavigationActions.aboutUs({data: {item}})
  }

  renderContent (item) {
    // if (this.props.fetching) {
    //   return <Spinner color='blue' />
    // }
    return (
      <Button block large transparent style={{flex: 1}}>
        <Text >
          Content
        </Text>
      </Button>
    )
  }

  renderLinks = () => {
    const linkItems = links.map((link) => {
      return (
        <View key={link.id} style={{paddingBottom: 10, flex: 0, flexGrow: 1}}>
          <Card style={{flex: 0, borderColor: '#E91E63', borderWidth: 1}} >
            <CardItem cardBody style={{flex: 1, flexDirection: 'column'}}>
              <Image source={link.image} style={{height: 50, width: null, flex: 1}} />
              <View style={{borderColor: '#009688', borderWidth: 1}}>
                <Text style={{fontSize: 12}}>{link.title}</Text>
                <Text note style={{fontSize: 8, wordWrap: 'break-word'}}>{link.description}</Text>
              </View>
            </CardItem>
            {/* <CardItem style={{flexDirection: 'column', justifyContent: 'flex-start', alignContent: 'flex-start'}}>
              <Text style={{fontSize: 12}}>{link.title}</Text>
              <Text note style={{fontSize: 8, flexWrap: 'wrap'}}>{link.description}</Text>
            </CardItem> */}
            <View style={{flex: 1, flexWrap: 'wrap', borderColor: '#009688', borderWidth: 1}}>
              {/* <Text style={{fontSize: 12}}>{link.title}</Text> */}
              {/* <Text note style={{fontSize: 8}}>{link.description}</Text> */}
            </View>
          </Card>
        </View>
      )
    }
    )

    return (
      <View style={{flex: 1, flexDirection: 'row', borderColor: '#03A9F4', borderWidth: 1, alignItems: 'stretch'}}>
        {linkItems}
      </View>
    )
  }

  render () {
    const { container, row, col, title, listIcon, row1, slide, image, sliderIcon } = styles
    if (this.props.data) {
      const { listings, events, articles, posts} = this.props.data
      const { regions, navigation } = this.props
      return (
        <Container>
          <Content style={container} showsHorizontalScrollIndicator={false}>
            <Grid>
              <Swiper height={240} showsButtons loop showsPagination={false}
                buttonWrapperStyle={{backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute', top: 30, left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between', alignItems: 'flex-start'}}
                nextButton={<Icon style={sliderIcon} name='arrow-forward' />}
                prevButton={<Icon style={sliderIcon} name='arrow-back' />}>
                <View style={slide}>
                  <Image resizeMode='cover' style={image} source={Images.slider1}>
                    <View style={{position: 'absolute', top: 30, left: 0, right: 0, bottom: 0, justifyContent: 'flex-start', alignItems: 'center'}}>
                      <Text style={{color: '#fff', fontSize: 30}}>South Australia</Text>
                      <Text style={{color: '#fff', fontSize: 15}}>ADD IT TO YOUR BUCKET LIST</Text>
                    </View>
                  </Image>
                </View>
                <View style={slide} >
                  <Image resizeMode='cover' style={image} source={Images.slider1}>
                    <View style={{position: 'absolute', top: 30, left: 0, right: 0, bottom: 0, justifyContent: 'flex-start', alignItems: 'center'}}>
                      <Text style={{color: '#fff', fontSize: 30}}>Lorem Ipsum</Text>
                      <Text style={{color: '#fff', fontSize: 15}}>LOREM IPSUM DOLOR SET AMIT</Text>
                    </View>
                  </Image>
                </View>
                <View style={slide}>
                  <Image resizeMode='cover' style={image} source={Images.slider1}>
                    <View style={{position: 'absolute', top: 30, left: 0, right: 0, bottom: 0, justifyContent: 'flex-start', alignItems: 'center'}}>
                      <Text style={{color: '#fff', fontSize: 30}}>Lorem ipsum 2</Text>
                      <Text style={{color: '#fff', fontSize: 15}}>LOREM IPSUM DOLOR SET AMIT</Text>
                    </View>
                  </Image>
                </View>
                <View style={slide}>
                  <Image resizeMode='cover' style={image} source={Images.slider1}>
                    <View style={{position: 'absolute', top: 30, left: 0, right: 0, bottom: 0, justifyContent: 'flex-start', alignItems: 'center'}}>
                      <Text style={{color: '#fff', fontSize: 30}}>Lorem dolor</Text>
                      <Text style={{color: '#fff', fontSize: 15}}>LOREM IPSUM DOLOR SET AMIT</Text>
                    </View>
                  </Image>
                </View>
              </Swiper>
              <Row style={[row, row1]}>
                <Col style={col}>
                  <Button transparent style={{flexDirection: 'row'}} onPress={() => { navigation.navigate('WineRegions') }}>
                    <Left />
                    <Body style={{flex: 4}}>
                      <Text style={title}>WINE REGIONS</Text>
                    </Body>
                    <Right>
                      <Icon style={listIcon} name='arrow-forward' />
                    </Right>
                  </Button>
                  <List button dataArray={regions} horizontal style={{marginVertical: 10}}
                    renderRow={(item) =>
                      <View style={{marginRight: 10, width: 170, marginBottom: 10}}>
                        <Card style={{flex: 0}} >
                          <CardItem cardBody button onPress={() => { this.handlePressDetail(item) }}>
                            {/* <Image source={{uri: item.image_url}} style={{height: 100, width: null, flex: 1}} /> */}
                            <Image source={Images[item.image]} style={{height: 100, width: null, flex: 1}} />
                          </CardItem>
                        </Card>
                        <View>
                          <Text style={{fontSize: 12}}>{item.title}</Text>
                        </View>
                      </View>
                    } />
                </Col>
              </Row>

              <Row style={row}>
                <Col style={col}>
                  <Button transparent style={{flexDirection: 'row'}}>
                    <Left />
                    <Body style={{flex: 5}}>
                      <Text style={title}>FEATURED CELLARDOORS</Text>
                    </Body>
                    <Right>
                      <Icon style={listIcon} name='arrow-forward' />
                    </Right>
                  </Button>
                  <List button dataArray={listings} horizontal style={{marginVertical: 10}}
                    renderRow={(item) =>
                      <View style={{marginRight: 10, width: 170, marginBottom: 10}}>
                        <Card style={{flex: 0}} >
                          <CardItem cardBody button >
                            <Image source={{uri: item.image_url}} style={{height: 100, width: null, flex: 1}} />
                          </CardItem>
                        </Card>
                        <View>
                          <Text style={{fontSize: 12}}>{item.title}</Text>
                        </View>
                      </View>
                    } />
                </Col>
              </Row>

              <Row style={[row, row1]}>
                <Col style={col}>
                  <Button transparent style={{flexDirection: 'row'}}>
                    <Left />
                    <Body style={{flex: 5}}>
                      <Text style={title}>FEATURED ACCOMMODATION</Text>
                    </Body>
                    <Right>
                      <Icon style={listIcon} name='arrow-forward' />
                    </Right>
                  </Button>
                  <List button dataArray={listings} horizontal style={{marginVertical: 10}}
                    renderRow={(item) =>
                      <View style={{marginRight: 10, width: 170, marginBottom: 10}}>
                        <Card style={{flex: 0}} >
                          <CardItem cardBody button>
                            <Image source={{uri: item.image_url}} style={{height: 100, width: null, flex: 1}} />
                          </CardItem>
                        </Card>
                        <View>
                          <Text style={{fontSize: 12}}>{item.title}</Text>
                        </View>
                      </View>
                    } />
                </Col>
              </Row>

              <Row style={styles.events}>
                <Image style={{...styles.backgroundImage}} source={Images.eventsBg} >
                  <Col style={col}>
                    <Button transparent style={{flexDirection: 'row'}}>
                      <Left />
                      <Body style={{flex: 4}}>
                        <Text style={title}>FEATURED EVENTS</Text>
                      </Body>
                      <Right>
                        <Icon style={listIcon} name='arrow-forward' />
                      </Right>
                    </Button>
                    <List button dataArray={events} horizontal style={{marginVertical: 10}} renderRow={(item) =>
                      <View style={{marginRight: 10, width: 170, marginBottom: 10}}>
                        <Card style={{flex: 0}} >
                          <CardItem cardBody button >
                            <Image source={{uri: item.image_url}} style={{height: 100, width: null, flex: 1}} />
                          </CardItem>
                        </Card>
                        <View>
                          <Text style={{fontSize: 12, color: '#fff'}}>{item.title}</Text>
                          <Text style={{fontSize: 10, color: '#ffcb05'}}>{item.recurring_phase}</Text>
                          <Text style={{fontSize: 10, color: '#fff'}}>{item.address}</Text>
                        </View>
                      </View>
                } />
                  </Col>
                </Image>
              </Row>

              <Row style={[row, row1]}>
                <Col style={col}>
                  <Button transparent style={{flexDirection: 'row'}}>
                    <Left />
                    <Body style={{flex: 6}}>
                      <Text style={title}>FEATURED TOURS & ACTIVITIES</Text>
                    </Body>
                    <Right>
                      <Icon style={listIcon} name='arrow-forward' />
                    </Right>
                  </Button>
                  <List button dataArray={posts} horizontal style={{marginVertical: 10}}
                    renderRow={(item) =>
                      <View style={{marginRight: 10, width: 170, marginBottom: 10}}>
                        <Card style={{flex: 0}} >
                          <CardItem cardBody button >
                            <Image source={{uri: item.image_url}} style={{height: 100, width: null, flex: 1}} />
                          </CardItem>
                        </Card>
                        <View>
                          <Text style={{fontSize: 12}}>{item.title}</Text>
                        </View>
                      </View>
                    } />
                </Col>
              </Row>

              <Row style={row}>
                <Col style={col}>
                  <List button dataArray={links} horizontal style={{marginVertical: 10}} renderRow={(item) =>
                    <View style={{marginRight: 10, width: 120}}>
                      <Card style={{flex: 0}} >
                        <CardItem cardBody button onPress={() => { this.handlePressLink(item) }}>
                          <Image source={item.image} style={{height: 50, width: null, flex: 1}} />
                        </CardItem>
                      </Card>
                      <View>
                        <Text style={{fontSize: 12}}>{item.title}</Text>
                        <Text note style={{fontSize: 8}}>{item.description}</Text>
                      </View>
                    </View>
                } />
                </Col>
              </Row>

              <Row style={{...row, ...row1, paddingBottom: 55}}>
                <Col style={{col}}>
                  <Button transparent style={{flexDirection: 'row'}}>
                    <Left />
                    <Body style={{flex: 5}}>
                      <Text style={title}>FEATUED FOOD & DINNING</Text>
                    </Body>
                    <Right>
                      <Icon style={listIcon} name='arrow-forward' />
                    </Right>
                  </Button>

                  <List button dataArray={articles} horizontal style={{marginVertical: 10}} renderRow={(item) =>
                    <View style={{marginRight: 10, width: 170, marginBottom: 10}}>
                      <Card style={{flex: 0}} >
                        <CardItem cardBody button>
                          <Image source={{uri: item.image_url}} style={{height: 100, width: null, flex: 1}} />
                        </CardItem>
                      </Card>
                      <View>
                        <Text style={{fontSize: 12}}>{item.title}</Text>
                      </View>
                    </View>
                } />
                </Col>
              </Row>

              {/* <Row style={row}>
                <Col style={col}>
                  <List button dataArray={posts} horizontal style={{marginVertical: 10}} renderRow={(item) =>
                    <View style={{paddingBottom: 10, width: 150}}>
                      <Card style={{flex: 0}} >
                        <CardItem cardBody button>
                          <Image source={{uri: item.image_url}} style={{height: 100, width: null, flex: 1}} />
                        </CardItem>
                      </Card>
                      <View>
                        <Text style={{fontSize: 10}}>{item.title}</Text>
                      </View>
                    </View>
                } />
                </Col>
              </Row> */}
            </Grid>
          </Content>
        </Container>
      )
    }
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <Spinner color='#dc5b5b' />
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    // paddingVertical: Metrics.baseMargin,
    // paddingHorizontal: Metrics.baseMargin
  },
  content: {
    borderWidth: 1,
    borderStyle: 'solid',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Metrics.doubleBaseMargin
  },
  row: {
    paddingVertical: Metrics.baseMargin,
    paddingHorizontal: Metrics.baseMargin
  },
  col: {
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: '#9E9E9E',
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Metrics.baseMargin
    // borderColor: '#2196F3',
    // borderWidth: 1
  },
  slide: {
    // marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    width: null,
    flex: 1,
    alignSelf: 'stretch'
  },
  title: {
    color: '#dc5b5b',
    textAlign: 'center'
  },
  events: {
    backgroundColor: '#1a1819'
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    height: null
  },
  listIcon: {
    fontSize: 18,
    color: '#c6ccd2',
    paddingRight: 10
  },
  sliderIcon: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 5
  },
  row1: {
    backgroundColor: '#f1f2f6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5
  }
}


const mapStateToProps = state => {
  return {
    fetching: state.home.fetching,
    data: state.home.data,
    user: state.login.user,
    regions: state.regions.regions
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(HomeActions.homeRequest()),
    getRegions: () => dispatch(RegionActions.regionRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
