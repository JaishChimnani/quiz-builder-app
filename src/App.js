import logo from './logo.svg';
import './App.css';
import Greeting from './Components/Greeting';
import Login from './Components/Login';
import {Route, Routes,Navigate} from 'react-router-dom'
import {BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import QuizMaker from './Components/QuizMaker';
import Navbar from './Components/Navbar';
import {loggedIn} from "./Components/Login"

function App() {
  
  return (
    <>
  <Router>
    <Navbar/>

    <Routes>


    <Route exact path="/login" element={<Login/>}></Route>
    {loggedIn ? 
                        <Navigate replace to={"/quiz"}></Navigate>:null}
    <Route exact path="/quiz" element={<QuizMaker/>}></Route>
    <Route exact path="/quiz-builder-app" element={<Greeting/>}></Route>
    </Routes>
  </Router>
    </>
  );
}

export default App;
