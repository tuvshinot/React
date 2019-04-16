import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
      {id:'ahkjshfkajsdhfkjsdf', name:'Max', age: 28},
      {id:'ahjkljklklkl', name:'Tug', age: 26},
      {id:'ahkjshfkajsdhfkjs', name:'Jeny', age: 25}
    ],
    showPersons: false
  };

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // copying
    persons.splice(index, 1);
    this.setState({persons: persons})
  };
  
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons});
  };

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    let persons = null;
    if(this.state.showPersons) {
      persons = 
          <Persons 
              persons={this.state.persons}
              click={this.deletePersonHandler}
              changed={this.nameChangedHandler}
          />
    }
    return (
         <div className={classes.App}>
          <Cockpit 
            appTitle={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            click={this.togglePersonsHandler}
          />
          {persons}
        </div>
    );
  }
}

export default App;
