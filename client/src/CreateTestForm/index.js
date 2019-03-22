import React, { Component } from "react";
import "./style.css";

class CreateTestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      grade: "",
      date: "",
      studentId: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(event) {
    // destructure the event
    const { name, value } = event.target;

    // set the state as needed
    this.setState({
      [name]: value,
      studentId: this.props.studentId
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.studentId === ""){
      return
    }
    console.log(event);

    const { newTestSubmitAction } = this.props;

    // const { thing2, thing3, ...good } = this.state
      newTestSubmitAction(this.state)
    

    this.setState({      
    name: "",
    grade: "",
    date: "",
    studentId: ""});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p className="add-subject">Add {this.props.subject} Score</p>
        <div className="field">
          <label className="label">Test Name</label>
          <div className="control">
            <input
              onChange={this.updateState}
              name="name"
              className="input"
              type="text"
              value={this.state.name}
              placeholder={`Unit 1 ${this.props.subject} Test`}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Grade</label>
          <div className="control">
            <input
              onChange={this.updateState}
              name="grade"
              className="input"
              type="text"
              value={this.state.grade}
              placeholder="95"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Date</label>
          <div className="control">
            <input
              onChange={this.updateState}
              name="date"
              className="input"
              type="text"
              value={this.state.date}
              placeholder="2018-10-15"
            />
          </div>
        </div>
        <div className="control">
          <button className="button is-primary">Submit</button>
        </div>
      </form>
    );
  }
}

export default CreateTestForm;
