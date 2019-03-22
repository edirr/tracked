import React, { Component } from "react";
import StudentTile from "../StudentTile";
import "./style.css";

class ClassList extends Component {
  constructor() {
    super();
    this.state = {
    };
    this.createClassList = this.createClassList.bind(this);
  }

  createClassList(){
    const classList = this.props.students < 1 ? "" : this.props.students.map((student)=>{
      return <StudentTile toggleEditModal={this.props.toggleEditModal} getOneStudent={this.props.getOneStudent} deleteStudent={this.props.deleteStudent} studentId={this.props.studentId} id={student.id} fname={student.fname} lname={student.lname} sendStudentId={this.props.sendStudentId}/>
    //   <div key={i}>{student.fname} {student.lname}</div>
    });
    return classList
  }

  render() {
    return (
      <div className="column is-3 class-section">
      <h1 className="class-heading">Class List</h1>
      <div className="class-list">
      {this.createClassList()}
      </div>

      </div>
    );
  }
}

export default ClassList;
