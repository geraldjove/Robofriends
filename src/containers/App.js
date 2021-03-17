import React, { Component } from 'react';
import CardList from '../components/cardlist/cardlist.component';
import './App.css';
import SearchBox from '../components/searchbox/searchbox.component';
import Header from '../components/header/header.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}))
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  onClickChange = () => {
    const input = document.querySelector("input");
    this.setState({searchfield: input.value})
  }

  render() {
    const filteredRobots = this.state.robots.filter(users => {
        return users.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    return(
      <div>
        <Header />
        <SearchBox searchChange={this.onSearchChange} clickChange={this.onClickChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    )
  }

}

export default App
