import LogIn from './components/LogIn.jsx';
import "./App.css"
import NavBar from './components/NavBar.jsx';

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
  return (
    <>
    {/* <LogIn/> */}
    <NavBar/>
    </>
  )
}

export default App;
