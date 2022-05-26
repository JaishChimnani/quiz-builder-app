import logo from './logo.svg';
import './App.css';
import Greeting from './Components/Greeting';
import Login from './Components/Login';
import {Route, Routes,Navigate, useParams} from 'react-router-dom'
import {BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import QuizMaker from './Components/QuizMaker';
import {loggedIn} from "./Components/Login"
import { useState } from 'react';
import QuizDisplay from './Components/QuizDisplay';
import CreateQuiz from './Components/CreateQuiz';
import Error from './Components/Error';

function App() {
  const  [loggedIn,setLoggedIn]=useState(false);

  const {id}=useParams();
  console.log(id);
  return (
    <>
  <Router>
    

    <Routes>


    <Route exact path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}></Route>
    {loggedIn ? 
                        <Navigate replace to={"/quiz"}></Navigate>:null}
    <Route exact path="/quiz" element={<QuizMaker/>}></Route>
    <Route exact path="/create" element={<CreateQuiz/>}></Route>
    <Route exact path={"/quiz-builder-app"} element={<Greeting/>}></Route>
    <Route  path={"/quiz/:id"} element={<QuizDisplay />}></Route>
    <Route  path={"*"} element={<Error />}></Route>
    </Routes>
  </Router>
    </>
  );
}

export default App;
