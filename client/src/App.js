import { useContext, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Wrapper from "./wrappers/LandingPage"
import {TodoWrapper} from "./wrappers/Form"
import { ThemeContext } from './context/themeContext';
import Todo from './components/Todo';
import ComponentWrapper from './wrappers/ComponentsWrapper';
import { TodoMapWrapper } from "./wrappers/TodoMap"
import TodoBottom from './components/TodoBottom';
import Input from './components/Input';
import Layout from './Layout/Layout';
import axios from "axios"

function App() {


  const {themeBoolean, size} = useContext(ThemeContext)
  const [inputValue, setInputValue] = useState("")
  const [todos, setTodos] = useState([])

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    const newTodo = {id: nanoid(), todo: inputValue, completed: false  }
    setTodos([
      ...todos,
      newTodo
    ])
    setInputValue("")
  }

  const handleCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const handleDelete = (id) => {
    const remainingTodos = todos.filter((todo) => id !== todo.id)
    setTodos(remainingTodos)
  }

  const handleDeleteAll = () => {
    const remainingTodos = todos.filter((todo) => !todo.completed)
    setTodos(remainingTodos)
  }

  const handleEdit = (id, editedTodo) => {
    
    const editTodos = todos.map((todo) => {
      if (id === todo.id) {
        return {...todo, todo: editedTodo}
      }
      return todo
    })
    
    setTodos(editTodos)
  }

  const todoMap = todos.map((todo) => (
    <Todo 
      id={todo.id}
      todo={todo.todo}
      completed={todo.completed}
      themeBoolean={themeBoolean}
      handleCompleted={handleCompleted}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  ))


  // assign maximum length of characters todo input will accept, based on window size.
  let currentSize = 0

  if (size < 450) {
      currentSize = 20
  } else if (size > 450 && size < 700) {
      currentSize = 25
  } else if (size > 700) {
      currentSize = 30
  } 


  return (
    <Wrapper themeBoolean = {themeBoolean}>
    <Layout />
      <ComponentWrapper>
      <TodoWrapper onSubmit = {handleSubmit}>
      <Input
        type="text"
        name={inputValue}
        placeholder = {`Maximum ${currentSize} characters`}
        handleChange={handleChange} 
        inputValue={inputValue} 
        maxLength = {currentSize}  
        required
      />
      </TodoWrapper>
      <TodoMapWrapper themeBoolean={themeBoolean} className="todo-map-wrapper">
      {todoMap}  
      </TodoMapWrapper>
      <TodoBottom todoLength={todos.length} handleDeleteAll={handleDeleteAll} />
    </ComponentWrapper>
    </Wrapper>
  );

}



export default App;
