import React from "react";
import "./style.css";

const StudentTile = props => (
<div className="student-tile" onClick={props.sendStudentId} id={props.id}>{ props.fname} {props.lname} </div>
)
export default StudentTile;
