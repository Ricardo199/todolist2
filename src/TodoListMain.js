import React, {useState, useRef, useEffect} from "react";
import Todolist from "./todolist";
import uuidv4 from '/node_modules/uuid/dist/v4';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

export default function TodoListMain() {    
  const [todos, setTodos] = useState([]);
  const todoNameRef =useRef();

  useEffect(()=> {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      if(storedTodos)setTodos( prevTodos => [...prevTodos, ...storedTodos] );
  }, [])

  useEffect( () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }
  
  function hadndleAddTodo(e){
    const name= todoNameRef.current.value;
    if(name === '') return
      setTodos(prevTodos => {
          return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
      })
    todoNameRef.current.value= null;
  }
  
  function handleClearTodos(){
    const newTodos =todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
    <Todolist todos={todos} toggleTodo= {toggleTodo} />
    <input ref={todoNameRef} type="text" />
    <button onClick={hadndleAddTodo}>Add todo</button>
    <button onClick={handleClearTodos}>Clear completed todo</button>
    <div>{todos.filter(todo => !todo.complete).length} left todo</div>
  </>
  )
}
