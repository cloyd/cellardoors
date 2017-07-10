// a library to wrap and simplify api calls
import apisauce from 'apisauce'

const config = {
  'host': 'https://aus.cellardoors.arcastaging.com/', // 'https://aus.cellardoors.arcastaging.com/',
  'token': '62dc-e8b8-c4ca-54fe-9a00-a3bc-245e-3a69'  // '62dc-e8b8-c4ca-54fe-9a00-a3bc-245e-3a69'
}
// our "constructor"
const cellardoorsAPI = (baseURL = 'https://aus.cellardoors.arcastaging.com/') => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 15 second timeout...
    // timeout: 15000
    timeout: 20000
  })

  // Wrap api's addMonitor to allow the calling code to attach
  // additional monitors in the future.  But only in __DEV__ and only
  // if we've attached Reactotron to console (it isn't during unit tests).
  if (__DEV__ && console.tron) {
    api.addMonitor(console.tron.apisauce)
  }

  const getConfig = () => api.get('api/v1/config.json', {token: config.token})
  const getHome = () => api.get('api/v1/home.json', {token: config.token})
  const getResult = ({params}) => {
    return api.get('api/v1/results.json', {
      token: config.token,
      ...params})
  }
  const getFeaturedListing = () => api.get('api/v1/listing/featured.json', {token: config.token})

  // AUTH
  const login = (username, password) => {
    // const body = formUrlencoded({username, password})
    const data = {username, password}
    // const options = {
    //   headers: {
    //     'Cache-Control': 'no-cache',
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   }
    // }
    return api.post('api/v1/login.json?token=62dc-e8b8-c4ca-54fe-9a00-a3bc-245e-3a69', data)
  }
  const socialLogin = (provider, token) => {
    const data = {provider, token}
    return api.post('api/v1/login/social.json?token=62dc-e8b8-c4ca-54fe-9a00-a3bc-245e-3a69', data)
  }
  const register = (firstname, lastname, email, password, terms) => {
    // const body = formUrlencoded({firstname, lastname, email, password, terms})
    const data = {firstname, lastname, email, password, terms}
    // const options = {
    //   headers: {
    //     'Cache-Control': 'no-cache',
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   }
    // }
    return api.post('api/v1/accounts.json?token=62dc-e8b8-c4ca-54fe-9a00-a3bc-245e-3a69', data)
  }

  // LISTINGS
  const getListingCategories = () => api.get('api/v1/listing/categories.json', {token: config.token})

  // Favorites
  const getFavorites = (accountId) => {
    return api.get('api/v1/favorites/' + accountId + '.json', {token: config.token})
  }

  const addToFavorites = (accountId, module, itemId) => {
    const body = formUrlencoded({module, itemId})
    const options = {
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    return api.post('api/v1/favorites/' + accountId + '.json', body, options)
  }

  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    getConfig,
    getHome,
    login,
    socialLogin,
    register,
    getListingCategories,
    getFeaturedListing,
    getResult,
    getFavorites,
    addToFavorites
  }
}

const formUrlencoded = (json) => {
  let body = ''
  for (let key in json) {
    // body += encodeURIComponent(key) + '=%22' + encodeURIComponent(json[key]) + '%22&'
    body += encodeURIComponent(key) + '=' + encodeURIComponent(json[key]) + '&'
  }
  // console.log('body', body)
  return body
}

// let's return back our create method as the default.
export default {
  cellardoorsAPI
}
