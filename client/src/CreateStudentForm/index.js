import React, { Component } from "react";

class CreateStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      age: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(event) {
    // destructure the event
    const { name, value } = event.target;

    // set the state as needed
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log(event);
    event.preventDefault();
    const { newStudentSubmitAction } = this.props;

    // const { thing2, thing3, ...good } = this.state
    newStudentSubmitAction(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Add Student</p>
        <div className="field">
          <label className="label">First Name</label>
          <div className="control">
            <input
              onChange={this.updateState}
              name="fname"
              className="input"
              type="text"
              value={this.state.fname}
              placeholder="Alex Smith"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Last Name</label>
          <div className="control">
            <input
              onChange={this.updateState}
              name="lname"
              className="input"
              type="text"
              value={this.state.lname}
              placeholder="Alex Smith"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Age</label>
          <div className="control">
            <input
              onChange={this.updateState}
              name="age"
              className="input"
              type="text"
              value={this.state.age}
              placeholder="12"
            />
          </div>
        </div>
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    );
  }
}

export default CreateStudentForm;
