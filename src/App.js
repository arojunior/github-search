import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react'
import Search           from './containers/Search'

class App extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <Search />
            </div>
        </div>
    )
  }
}

export default App
