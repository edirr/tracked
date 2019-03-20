import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import ClassList from "./ClassList";
import CreateStudentForm from "./CreateStudentForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: "",
      student_id: "",
      mathTests: "",
      elaTests: "",
      ssTests: ""
    };
    this.sendStudentId = this.sendStudentId.bind(this);
    this.getAllStudents = this.getAllStudents.bind(this);
    this.newStudentSubmitAction = this.newStudentSubmitAction.bind(this);
  }

  componentDidMount() {
    this.getAllStudents();
  }
  getAllStudents() {
    fetch(`/students`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          students: data
        });
      });
  }

  async newStudentSubmitAction(newStudent) {
    await fetch("/students", {
      method: "POST",
      headers: {
        Accept:         'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStudent)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));

    this.getAllStudents();
  }


  getStudentMathTests() {
    fetch(`/tests/math/student/${this.state.student_id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          mathTests: data
        });
      });
  }
  getStudentElaTests() {
    fetch(`/tests/ela/student/${this.state.student_id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          elaTests: data
        });
      });
  }

  getStudentSSTests() {
    fetch(`/tests/ss/student/${this.state.student_id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          ssTests: data
        });
      });
  }

  async sendStudentId(e) {
    await this.setState({ student_id: e.target.id });
    this.getStudentMathTests();
    this.getStudentElaTests();
    this.getStudentSSTests();
  }
  render() {
    return (
      <div className="App">
        <div className="columns">
          <ClassList
            students={this.state.students}
            sendStudentId={this.sendStudentId}
          />
          <div className="column is-half">Auto</div>

          <div className="column is-one-quarter has-background-danger">
            <CreateStudentForm newStudentSubmitAction={this.newStudentSubmitAction}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
