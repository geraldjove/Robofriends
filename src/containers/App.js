import React, { Component } from 'react';
import CardList from '../components/cardlist/cardlist.component';
import './App.css';
import Header from '../components/header/header.component';
import SearchBox from '../components/searchbox/searchbox.component';

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
    return this.setState({searchfield: event.target.value});
  }

  onClickChange = () => {
    console.log(this.state.searchfield);
    const input = document.querySelector("input");
    return (this.setState({searchfield: input.value}));
  }


  render(){
    const filteredRobots = this.state.robots.filter(users => {
      return users.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return (
      <div>
        <Header />
        <SearchBox searchChange={this.onSearchChange} onClickChange={this.onClickChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    )
  }
}

export default App
