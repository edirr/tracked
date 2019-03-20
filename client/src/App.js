import React, { Component } from "react";
import "./App.css";
import 'bulma/css/bulma.css';
import ClassList from "./ClassList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: ""
    };
  }
  componentDidMount() {
    fetch(`http://localhost:5000/students`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          students: data
        });
      });
  }
  render() {
    return (
      <div className="App">
        <div className="columns">
          <ClassList students={this.state.students}/>
          <div className="column is-half">Auto</div>
          <div className="column is-one-quarter has-background-danger">is-one-quarter</div>
        </div>
      </div>
    );
  }
}

export default App;
