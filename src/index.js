/*
* React
*/
import React        from 'react';
import { render }   from 'react-dom'
import { Provider } from 'react-redux'
/*
* Store
*/
import { store } from './modules'
/*
* App
*/
import App from './containers/App'

/*
* Render App
*/
render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)
