import React, { Component } from 'react'
import { Footer, FooterTab, Button, Icon, Text } from 'native-base'
import { connect } from 'react-redux'
import * as ReactNavigation from 'react-navigation'




import FooterTabActions from '../Redux/FooterTabsRedux'

class FooterTabs extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount() {
  }

  handlePressNav () {
    // NavigationActions.pop()
  }

  handlePressSearch (tab, params = {}) {
    // console.tron.log({navv: NavigationActions})
    const { performSearch, setActiveTab, activeTab} = this.props
    setActiveTab(tab)
    // if (activeTab !== tab) {
    //   performSearch(params)
    // }
    // NavigationActions.navigate({ routeName: 'MainDrawer' })
    

    // const navigateAction = NavigationActions.navigate({

    //   routeName: 'MainDrawer',

    //   params: {},

    //   action: NavigationActions.navigate({ routeName: 'Drink'})
    // })

    // NavigationActions.dispatch(navigateAction)

    
  }

  render () {
    // let state = this.props.state
    // let selected = state.children[state.index]
    // while (selected.hasOwnProperty('children')) {
    //   state = selected
    //   selected = selected.children[selected.index]
    // }
    const { activeTab, setActiveTab  } = this.props
    return (
      <Footer style={{ backgroundColor: 'rgba(0,0,0,0.75)', position: 'absolute', bottom: 0, zIndex: 2 }}>
        <FooterTab>
          <Button active={activeTab === 1} onPress={() => this.handlePressSearch(1)}>
            {/* <Button active={selected.name === 'search' && !selected.data.near} onPress={() => NavigationActions.search({animation: 'fade', data: {near: false}})} > */}
            <Icon name='ios-search-outline' />
            <Text style={styles.text} allowFontScaling={false}>
              SEARCH
            </Text>
          </Button>
          <Button active={activeTab === 2} onPress={() => this.handlePressSearch(2)}>
            {/* <Button active={activeTab === 1} active={(selected.name === 'search' && selected.data.near)} onPress={() => NavigationActions.search({animation: 'fade', data: {near: true}})}> */}
            <Icon name='ios-map-outline' />
            <Text style={styles.text} allowFontScaling={false}>
              NEAR ME
            </Text>
          </Button>
          <Button active={activeTab === 3} onPress={() => setActiveTab(3) }>
            <Icon name='ios-wine-outline' />
            <Text style={styles.text} allowFontScaling={false}>
              REGIONS
            </Text>
          </Button>
          <Button active={activeTab === 4} onPress={() => this.handlePressSearch(4, { module: 'deal' })}>
            <Icon name='ios-cash-outline' />
            <Text style={styles.text} allowFontScaling={false}>
              DEALS
            </Text>
          </Button>
          <Button active={activeTab === 5} onPress={() =>  setActiveTab(5) }>
            <Icon name='ios-bookmark-outline' />
            <Text style={styles.text} allowFontScaling={false}>
              CHECK IN
            </Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}

const styles = {
  text: {
    fontSize: 8
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.nav,
    activeTab: state.footerTabs.activeTab
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // performSearch: (params) => dispatch(SearchActions.search(params)),
    setActiveTab: (activeTab) => dispatch(FooterTabActions.footerSetActive(activeTab))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterTabs)
