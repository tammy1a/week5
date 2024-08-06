import LogIn from './components/LogIn.jsx';
import "./App.css"
import NavBar from './components/NavBar/NavBar.jsx';
import { Card } from '@mui/material';
import Task  from './components/Task.jsx';

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
    {/* <NavBar/> */}
    <Task/>
    
    {/* <LogIn/> */}
    
    </>
  )
}

export default App;
