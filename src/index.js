/*
* React
*/
import React from 'react';
import { render } from 'react-dom'

/*
* Redux
*/
import { Provider } from 'react-redux'
import boot from 'redux-boot'
import servicesModule from './modules/api/services'

import apiModule from './modules/api'

const modules = [servicesModule, apiModule]

const app = boot({}, modules)

/*
* App
*/
import App from './containers/App'

/*
* Render App
*/
app.then(({action, store}) => {

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )

})
