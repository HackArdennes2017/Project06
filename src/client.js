require('es6-promise').polyfill()
require('isomorphic-fetch')

import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { AppContainer } from 'react-hot-loader'
import moment from 'moment'
import ReactGA from 'react-ga'
import 'moment/locale/fr'

import './vote-sdk'

moment.locale('fr')
ReactGA.initialize('UA-105376957-3')

import createStore from 'store'

import App from 'components/App'

import 'styles/main.scss'

const history = createHistory()
const store = createStore(history, window.__INITIAL_STATE__)

const logPageView = path => {
  ReactGA.set({ page: path })
  ReactGA.pageview(path)
}

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      {Component(store, ConnectedRouter, { history })}
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App)
logPageView('/')

history.listen(location => {
  const { pathname } = location
  logPageView(pathname)
})

if (module.hot) {
  module.hot.accept('components/App', () => {
    const nextApp = require('components/App')
    render(nextApp)
  })
}
