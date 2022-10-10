
import check from "../images/icon-check.svg"
import {FaTimes} from "react-icons/fa"
import {TiEdit} from "react-icons/ti"
import { useState } from "react"
import styled from "styled-components";


const Todo = (props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTodo, setEditedTodo] = useState("")

  const handleEditChange = (event) => {
    setEditedTodo(event.target.value)
  }

  const handleEditSubmit = (event) => {
    event.preventDefault()
    props.handleEdit(props.id, editedTodo)
    setEditedTodo("")
    setIsEditing(false)
    console.log(`Submitted`)
  }


  const viewTemplate = (
    <>
    <input
        className = "default-checkbox" 
        type="checkbox"
        defaultChecked={props.completed}
      />
      
      <span 
        className="custom-checkbox" 
        onClick={() => props.handleCompleted(props.id)}
        >
          <img src={props.completed ? check : null} />
      </span>
      <div className = "todo-info-div">
        <p className = "todo">{props.todo}</p>
        <TiEdit className = "edit-btn" size={17} onClick = {() => setIsEditing(true)} style={{position: "absolute", right: "10%", cursor: "pointer"}} />
        <div className="delete-icon" onClick={() => props.handleDelete(props.id)}><FaTimes size={20} /></div>
      </div>
      </>
  )

  const editTemplate = (
    <form onSubmit={handleEditSubmit}>
      <label>
        <input  className="editing-input" type="text" onChange={handleEditChange} />
      </label>
      <div className = "edit-btn-div">
        <button className = "submit-btn" type="submit">Submit</button> 
        <button className = "cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    </form>
  )

  return (
    <Wrapper key={props.id} themeBoolean={props.themeBoolean} completed={props.completed}>
      {isEditing ? editTemplate : viewTemplate}
    </Wrapper>
  )
}


export default Todo

export const Wrapper = styled.li`
    list-style: none;
    display: flex;
    font-size: 1.4rem;
    background-color: ${props => props.themeBoolean ? "hsl(var(--textbox-dark))" : "hsl(var(--textbox-light))"};
    position: relative;
    border-bottom: 1px solid hsl(0, 2%, 18%);
    
    border-radius: 3px 3px 0 0;
    
    p {
        margin-left: 20px;
    }

    p:hover {
      color: hsl(282, 89%, 62%);
    }

    span {
        display: grid;
        place-items: center;
        background: ${props => props.completed ? "linear-gradient(45deg, rgba(109,13,219,1) 0%, rgba(0,212,255,1) 100%)" : "none"};
        cursor: pointer;
    }

    span:hover {
        border: 1px solid #00d4ff;
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    label {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    button {
        align-self: center;
        border: none;
        background-color: ${props => props.themeBoolean ? "hsl(var(--textbox-dark))" : "hsl(var(--textbox-light))"};
        color: ${props => props.themeBoolean ? "hsl(var(--text-dark))" : "hsl(var(--text-light))"};
        border-radius: 3px;
        padding: 0.1rem;
        margin-top: 0.5rem;
    }

    input {
        color: ${props => props.themeBoolean ? "hsl(var(--text-dark))" : "hsl(var(--text-light))"};
    }

    .todo-info-div {
        display: flex; 
        align-items: center; 
        width: 100%;
        justify-content: space-between;
        text-decoration: ${props => props.completed ? "line-through" : null}
    }

    .editing-input {
    background-color: ${props => props.themeBoolean ? "hsl(var(--textbox-dark))" : "hsl(var(--textbox-light))"};
    border-left: none;
    border-top: none;
    border-right: none;
    border-bottom: 1px solid darkgrey;
    padding: 0.5rem;
    width: 90%;
    caret-color: darkgrey;
    }
    .edit-btn-div {
        display: flex;
        width: 100%;
        justify-content: space-around;
    }

    .edit-btn:hover {
        transform: scale(1.2);
        color: #00d4ff;
    }

    .submit-btn:hover {
        color: #00d4ff;
        transform: scale(1.2);
    }

    .cancel-btn:hover {
        color: red;
        transform: scale(1.2);
    }

    .delete-icon {
        margin-right: 0.5rem;
        cursor: pointer;
        transform: translateY(8%);
    }

    .delete-icon:hover {
        color: red;
        transform: scale(1.2)
    }

    .custom-checkbox {
      position: absolute;
      top: 27%;
    }
    
    .todo {
      margin-left: 3rem;
    }
`