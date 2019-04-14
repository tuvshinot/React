import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';

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
    const style = {
      border:'none',
      padding:'10px 20px',
      borderRadius:'10px',
      boxShadow:'0 2px 3px #ccc',
      cursor:'pointer',
      outline:'none',
      color:'white',
      backgroundColor:'green',
      ':hover' : {
        backgroundColor:'lightgreen',
        color:'black'
      }
    };

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
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor:'#20b2aa',
        color:'black'
      }
    }
    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
         <div className="App">
          <h1>Hello world.</h1>
          <p className={classes.join(' ')}>This is working!</p>
          <button onClick={this.togglePersonsHandler} style={style}>toggle</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
