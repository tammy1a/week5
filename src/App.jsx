import LogIn from './components/LogIn.jsx';
import "./App.css"
import NavBar from './components/NavBar/NavBar.jsx';
import { Card, Input } from '@mui/material';
import { AddTask } from './components/AddTask.jsx';
import Task from './components/Task.jsx';
import { Router } from 'react-router-dom';


function App() {

  const userLoggedIn = localStorage.getItem("LoggedIn");
  
  if(userLoggedIn==null)
  {
    localStorage.setItem("LoggedIn",false);
  }
  else
  {
    console.log(userLoggedIn)
  }
  const currentLoggedUser = localStorage.getItem("CurrentUser");


  return (
    <>


    <NavBar/>
    <AddTask/>
    {/* <Task/> */}
    
    <LogIn/>
    
    </>
  )
}

export default App;
