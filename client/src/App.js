import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import ClassList from "./ClassList";
import CreateStudentForm from "./CreateStudentForm";
import CreateTestForm from "./CreateTestForm";
import EditModal from "./EditModal";
import StudentChart from "./StudentChart";
import NavBar from "./NavBar";


class App extends Component {
  constructor() {
    super();
    this.state = {
      students: "",
      studentId: "",
      mathTests: "",
      elaTests: "",
      ssTests: "",
      form_subject: "",
      oneStudent: "",
      editModal: false
    };
    this.sendStudentId = this.sendStudentId.bind(this);
    this.getAllStudents = this.getAllStudents.bind(this);
    this.getOneStudent = this.getOneStudent.bind(this);
    this.getStudentMathTests = this.getStudentMathTests.bind(this);
    this.getStudentElaTests = this.getStudentElaTests.bind(this);
    this.getStudentSSTests = this.getStudentSSTests.bind(this);
    this.newStudentSubmitAction = this.newStudentSubmitAction.bind(this);
    this.newMathTestSubmitAction = this.newMathTestSubmitAction.bind(this);
    this.newElaTestSubmitAction = this.newElaTestSubmitAction.bind(this);
    this.newSSTestSubmitAction = this.newSSTestSubmitAction.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
    this.updateStudent = this.updateStudent.bind(this);
    this.formSelect = this.formSelect.bind(this);
    this.toggleEditModal = this.toggleEditModal.bind(this);
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

  getOneStudent(id) {
    fetch(`/students/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          oneStudent: data
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

  async deleteStudent(id) {
    await fetch(`/students/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));

    this.getAllStudents();
  }

  async updateStudent(updatedStudent, id) {
    await fetch(`/students/${id}`, {
      method: "PUT",
      headers: {
        Accept:         'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedStudent)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));

    this.getAllStudents();
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
    this.getOneStudent(this.state.studentId);
  }

  toggleEditModal(){
    this.setState({
      editModal: !this.state.editModal
    });
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
        return <CreateTestForm subject="Math" studentId={this.state.studentId} newTestSubmitAction={this.newMathTestSubmitAction} />;
    }
  }
  render() {
    return (
      <div className="App">
      <NavBar/>
      <EditModal updateStudent={this.updateStudent}  oneStudent={this.state.oneStudent} editModal={this.state.editModal} toggleEditModal={this.toggleEditModal}/>
        <div className="columns">
          <ClassList
            students={this.state.students}
            sendStudentId={this.sendStudentId}
            deleteStudent={this.deleteStudent}
            studentId={this.state.studentId}
            getOneStudent={this.getOneStudent}
            toggleEditModal={this.toggleEditModal}
          />
          <div className="column is-6">
            <StudentChart oneStudent={this.state.oneStudent} mathTests={this.state.mathTests} elaTests={this.state.elaTests} ssTests={this.state.ssTests} />
          </div>

          <div className="column is-one-quarter form-section">
            <CreateStudentForm newStudentSubmitAction={this.newStudentSubmitAction}/>
            <hr/>
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
