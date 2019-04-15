import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

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
    let btnClass = '';
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person  
                  key={person.id}
                  name={person.name} 
                  click={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                  age={person.age}/>
          })}
        </div>
      );
      btnClass = classes.Red;
    }
    let assignedClasses = [];
    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.Red);
    }
    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.Bold);
    }

    return (
         <div className={classes.App}>
          <h1>Hello world.</h1>
          <p className={assignedClasses.join(' ')}>This is working!</p>
          <button 
            onClick={this.togglePersonsHandler}
            className={btnClass}
            >toggle
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
