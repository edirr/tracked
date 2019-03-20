import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import ClassList from "./ClassList";
import CreateStudentForm from "./CreateStudentForm";
import CreateTestForm from "./CreateTestForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: "",
      studentId: "",
      mathTests: "",
      elaTests: "",
      ssTests: "",
      form_subject: ""
    };
    this.sendStudentId = this.sendStudentId.bind(this);
    this.getAllStudents = this.getAllStudents.bind(this);
    this.getStudentMathTests = this.getStudentMathTests.bind(this);
    this.getStudentElaTests = this.getStudentElaTests.bind(this);
    this.getStudentSSTests = this.getStudentSSTests.bind(this);
    this.newStudentSubmitAction = this.newStudentSubmitAction.bind(this);
    this.newMathTestSubmitAction = this.newMathTestSubmitAction.bind(this);
    this.newElaTestSubmitAction = this.newElaTestSubmitAction.bind(this);
    this.newSSTestSubmitAction = this.newSSTestSubmitAction.bind(this);
    this.formSelect = this.formSelect.bind(this);
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

  async newMathTestSubmitAction(newMathTest) {
    await fetch("/tests/math", {
      method: "POST",
      headers: {
        Accept:         'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMathTest)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));

    this.getStudentMathTests();
  }

  async newElaTestSubmitAction(newElaTest) {
    await fetch("/tests/ela", {
      method: "POST",
      headers: {
        Accept:         'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newElaTest)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));

    this.getStudentElaTests();
  }

  async newSSTestSubmitAction(newSSTest) {
    await fetch("/tests/ss", {
      method: "POST",
      headers: {
        Accept:         'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSSTest)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));

    this.getStudentSSTests();
  }


  getStudentMathTests() {
    fetch(`/tests/math/student/${this.state.studentId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          mathTests: data
        });
      });
  }
  getStudentElaTests() {
    fetch(`/tests/ela/student/${this.state.studentId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          elaTests: data
        });
      });
  }

  getStudentSSTests() {
    fetch(`/tests/ss/student/${this.state.studentId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          ssTests: data
        });
      });
  }

  async sendStudentId(e) {
    await this.setState({ studentId: e.target.id });
    this.getStudentMathTests();
    this.getStudentElaTests();
    this.getStudentSSTests();
  }

  formSelect(){
    switch(true) {
      // case (desc.includes("overcast")|| desc.includes("scattered")):
      //   return <FontAwesomeIcon className="overcast-icon" icon="cloud-sun"/>;
      case (this.state.form_subject === "math"):
        return <CreateTestForm subject="Math" studentId={this.state.studentId} newTestSubmitAction={this.newMathTestSubmitAction} />;
      case (this.state.form_subject === "ela"):
        return <CreateTestForm subject="ELA" studentId={this.state.studentId} newTestSubmitAction={this.newElaTestSubmitAction} />;
      case (this.state.form_subject === "ss"):
        return <CreateTestForm subject="SS" studentId={this.state.studentId} newTestSubmitAction={this.newSSTestSubmitAction} />
      default:
        return <CreateTestForm subject="ELA" studentId={this.state.studentId} newTestSubmitAction={this.newElaTestSubmitAction} />;
    }
  }
  render() {
    return (
      <div className="App">
        <div className="columns">
          <ClassList
            students={this.state.students}
            sendStudentId={this.sendStudentId}
            studentId={this.state.studentId}
          />
          <div className="column is-half">Auto</div>

          <div className="column is-one-quarter has-background-danger">
            <CreateStudentForm newStudentSubmitAction={this.newStudentSubmitAction}/>
            <div className="subject">
              <button className={`button ${this.state.form_subject === "ela" ? 'is-info' : 'is-primary'}`} onClick={()=>this.setState({form_subject: "ela"})} name="ela" value="ela">ELA
              </button>
              <button className={`button ${this.state.form_subject === "math" ? 'is-info' : 'is-primary'}`} onClick={()=>this.setState({form_subject: "math"})} name="math" value="math">Math
              </button>
              <button className={`button ${this.state.form_subject === "ss" ? 'is-info' : 'is-primary'}`} onClick={()=>this.setState({form_subject: "ss"})} name="ss" value="ss">SS
              </button>
              </div>
              {this.formSelect()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
