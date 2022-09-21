import {Wrapper} from "../wrappers/Todo"
import check from "../images/icon-check.svg"
import {FaTimes} from "react-icons/fa"
import {TiEdit} from "react-icons/ti"
import { useState } from "react"


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
        <p>{props.todo}</p>
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