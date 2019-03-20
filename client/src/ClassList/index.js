import React, { Component } from "react";

class ClassList extends Component {
  constructor() {
    super();
    this.state = {

    };
    this.createClassList = this.createClassList.bind(this);
  }

  createClassList(){
    const classList = this.props.students < 1 ? "" : this.props.students.map((student, i)=>{
      return <div key={i}>{student.fname} {student.lname}</div>
    });
    return classList
  }

  render() {
    return (
      <div className="column is-one-quarter class-list">
        {this.createClassList()}
      </div>
    );
  }
}

export default ClassList;
