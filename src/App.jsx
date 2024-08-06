import LogIn from './components/LogIn.jsx';
import "./App.css"
import NavBar from './components/NavBar/NavBar.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Card, Input } from '@mui/material';
import { AddTask } from './components/AddTask.jsx';
import Task from './components/Task.jsx';
import { Router } from 'react-router-dom';
import UserDetails from './components/UserDetails.jsx';
import About from './components/About.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';


function App() {

  const userLoggedIn  = localStorage.getItem("LoggedIn");
  console.log(userLoggedIn,typeof userLoggedIn);
  
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
    <BrowserRouter>
    <>
      <NavBar LoggedIn={userLoggedIn}/>

      <Routes >

      {userLoggedIn==="false" && (
            <>
              <Route path="/login" element={<LogIn />} />
              <Route path="/" element={<Navigate to={"/login"}/>} />
            </>
          )}
        
        <Route element={<ProtectedRoute />}>
            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="/register" element={<Navigate to="/" />} />
            {userLoggedIn == "true" ? (
              <>
                <Route path="/" element={<Navigate to="/userDetails" />} />
                <Route path="/profile" element={<UserDetails />} />
              </>
            ) : (
              <>
              </>
            )}
          </Route>

      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>

    </>
    </BrowserRouter>
    </>
  )
}

export default App;
