import React from "react";
import "./style.css";

const StudentTile = props => (
<div className={`button student-tile ${props.studentId == props.id ? 'is-info' : 'is-primary'}`} onClick={props.sendStudentId} id={props.id}>{ props.fname} {props.lname} </div>
)
export default StudentTile;
