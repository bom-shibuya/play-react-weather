import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import WebFont from 'webfontloader'
import { App } from './App'
import * as serviceWorker from './serviceWorker'
import store from './store'
import { GlobalStyles, theme } from './styles'

const webfontConfig = {
  google: {
    families: ['Noto Sans JP', 'Roboto']
  }
}

WebFont.load(webfontConfig)

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <App />
        <GlobalStyles />
      </React.Fragment>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
