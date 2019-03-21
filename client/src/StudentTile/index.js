import React from "react";
import "./style.css";

const StudentTile = props => (
  <div
    className={`button student-tile ${
      props.studentId == props.id ? "is-info" : "is-primary"
    }`}
    onClick={props.sendStudentId}
    id={props.id}
  >
    <p className="student-name">{props.fname} {props.lname}</p> 
    <button onClick={()=>{ props.toggleEditModal(); props.getOneStudent(props.id); }} className="edit-btn">Edit</button>
    <button onClick={()=>props.deleteStudent(props.id)} className="delete delete-btn" />
    
  </div>
);
export default StudentTile;
