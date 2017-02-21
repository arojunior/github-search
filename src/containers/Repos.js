import React, { Component } from 'react';
import SearchInput, {createFilter} from 'react-search-input'
import ReposList from './../components/ReposList'

const KEYS_TO_FILTERS = ['description', 'name']

class Repos extends Component{

  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    }

  }

  render() {
    const { repos }      = this.props
    const { searchTerm } = this.state
    const filtered  = repos.filter(createFilter(searchTerm, KEYS_TO_FILTERS))
    const reposList = ReposList(filtered)

    return (
      <div>
        <h2>{filtered.length} repositories</h2>
        <SearchInput
            className="search-input"
            inputClassName="form-control"
            type="text"
            placeholder="Search repo"
            onChange={this.searchUpdated.bind(this)}
        />
        <br />
        {reposList}
      </div>
    )
 }

 searchUpdated (term) {
   this.setState({
       searchTerm: term
   })
 }

}

export default Repos
