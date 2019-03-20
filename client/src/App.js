import React, { Component } from "react";
import "./App.css";

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
        <h1>HELLO THERE</h1>
      </div>
    );
  }
}

export default App;
