import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      {name:'Max', age: 28},
      {name:'Tug', age: 26},
      {name:'Jeny', age: 25}
    ]
  };
  switchNameHandler = (newName) => {
    // DO NOT this.state.people[0].name = 'HEy';
    this.setState({
      people: [
        {name:newName, age: 28},
        {name:'Tug', age: 26},
        {name:'Jeny', age: 25}
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      people: [
        {name:'Max', age: 28},
        {name: event.target.value, age: 26},
        {name:'Jeny', age: 25}
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello world.</h1>
        <button onClick={() => this.switchNameHandler("Updated")}>Switch name</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age} />
        <Person name={this.state.people[1].name} age={this.state.people[1].age} click={() => this.switchNameHandler("Updated")} changed={this.nameChangedHandler}/>
        <Person name={this.state.people[2].name} age={this.state.people[2].age} />
      </div>
    );
  }
}

export default App;
