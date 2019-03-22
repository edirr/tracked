import React from "react";
import "./style.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit)

const StudentTile = props => (
  <div
    className={`button student-tile ${
      props.studentId == props.id ? "is-info" : "is-primary"
    }`}
    onClick={props.sendStudentId}
    id={props.id}
  >
    <p onClick={props.sendStudentId} id={props.id} className="student-name" >{props.fname} {props.lname}</p> 
    <div className="student-buttons">    
    <FontAwesomeIcon icon="edit" className="edit-btn" onClick={()=>{ props.toggleEditModal(); props.getOneStudent(props.id); }} ></FontAwesomeIcon>
    <button onClick={()=>props.deleteStudent(props.id)} className="delete delete-btn" />
    </div>

    
  </div>
);
export default StudentTile;
