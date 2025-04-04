import { act, useEffect, useReducer, useState } from 'react'
import './App.css'
import TodoInput from './TodoInput'
import ToDoList from './ToDoList'
import todosReducer from './TodoReducer'

function App() {
  function addTodo(id, info) {
    dispatch({
      type: 'added',
      id: id,
      info: info
    })
  }
  function deleteTodo(id) {
    dispatch({
      type: 'deleted',
      id: id,
    })
  }
  function checkTodo(id) {
    dispatch(
      {
        type: 'checked',
        id: id
      }
    )
  }
  function updateTodo(id, newinfo) {
    dispatch({
      type: 'updated',
      id: id,
      newinfo: newinfo
    })
  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify([]))
  }, [])
  
  const [todosList, dispatch] = useReducer(todosReducer, JSON.parse(localStorage.getItem("todos")) || [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todosList))
  }, [todosList])

  return (
    <div className='w-full min-h-screen  bg-slate-800 flex flex-col items-center'>
      <TodoInput addTodo={addTodo}></TodoInput>
      <ToDoList todosList={todosList} deleteTodo={deleteTodo} updateTodo={updateTodo} checkTodo={checkTodo}></ToDoList>
    </div>
  )
}

export default App
