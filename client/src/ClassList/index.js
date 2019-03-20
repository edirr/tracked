import React, { Component } from "react";
import StudentTile from "../StudentTile";

class ClassList extends Component {
  constructor() {
    super();
    this.state = {
    };
    this.createClassList = this.createClassList.bind(this);
  }

  createClassList(){
    const classList = this.props.students < 1 ? "" : this.props.students.map((student)=>{
      return <StudentTile studentId={this.props.studentId} id={student.id} fname={student.fname} lname={student.lname} sendStudentId={this.props.sendStudentId}/>
    //   <div key={i}>{student.fname} {student.lname}</div>
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
