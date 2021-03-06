import React, { Component } from "react";
import "./style.css";

class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   fname: this.props.oneStudent< 1 ? "" : this.props.oneStudent.fname,
    //   lname: this.props.oneStudent < 1 ? "" : this.props.oneStudent.lname,
    //   age: this.props.oneStudent < 1 ? "" : this.props.oneStudent.age,
    fname: "",
    lname: "",
    age: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
    this.propsToState = this.propsToState.bind(this);
  }

  updateState(event) {
    // destructure the event
    const { name, value } = event.target;

    // set the state as needed
    this.setState({
      [name]: value
    });
  }

  propsToState(){
      this.setState({
          fname: this.props.oneStudent.fname,
          lname: this.props.oneStudent.lname,
          age: this.props.oneStudent.age
      })
  }
  handleSubmit(event) {
    event.preventDefault();
    if(this.state.fname !== "" && this.state.lname !== "" && this.state.age !== "" ){
      const { updateStudent } = this.props;
      const { id } = this.props.oneStudent;
  
      // const { thing2, thing3, ...good } = this.state
      updateStudent(this.state, id);
  
      this.setState({
          fname: "",
          lname: "",
          age: ""
      })
      this.props.toggleEditModal();
    }
    // event.preventDefault();
    // const { updateStudent } = this.props;
    // const { id } = this.props.oneStudent;

    // // const { thing2, thing3, ...good } = this.state
    // updateStudent(this.state, id);

    // this.setState({
    //     fname: "",
    //     lname: "",
    //     age: ""
    // })
    // this.props.toggleEditModal();
  }

  render() {
    return (
      <div className={`modal ${this.props.editModal ? "is-active" : ""}`}>
        <div className="modal-background" />
        <div className="modal-content content">
          <form onSubmit={this.handleSubmit}>
            <p className="heading">Edit Student</p>
            <div className="field">
              <label className="label">First Name</label>
              <div className="control">
                <input
                  onChange={this.updateState}
                  name="fname"
                  className="input"
                  type="text"
                  value={this.state.fname}
                  placeholder={this.props.oneStudent.fname}
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
                  placeholder={this.props.oneStudent.lname}
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
                  placeholder={this.props.oneStudent.age}
                />
              </div>
            </div>
            <div className="control">
              <button className="button is-primary">Submit</button>
            </div>
          </form>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={()=> this.props.toggleEditModal()} />
      </div>
    );
  }
}

export default EditModal;
