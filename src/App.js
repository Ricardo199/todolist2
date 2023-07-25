import React, {setState} from "react";
import { Login } from "./login";
import {Register} from "./register";
import './App.css'

function App() {
  const [currentForm, setCurrentForm] = setState['login'];
  const toggleForm = (formName) => {setCurrentForm(formName)};
  return(
    currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
  )
}
export default App