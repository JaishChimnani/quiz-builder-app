import logo from './logo.svg';
import './App.css';
import Greeting from './Components/Greeting';
import Login from './Components/Login';
import {Route, Routes} from 'react-router-dom'
import {BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import QuizMaker from './Components/QuizMaker';
import Navbar from './Components/Navbar';

function App() {
  
  return (
    <>
  <Router>
    <Navbar/>

    <Routes>


    <Route exact path="/login" element={<Login/>}></Route>
    {/* {loggedIn ? <Route exact path="/quiz"></Route>} */}
    <Route exact path="/quiz" element={<QuizMaker/>}></Route>
    <Route  path="/quiz-builder-app" element={<Greeting/>}></Route>
    </Routes>
  </Router>
    </>
  );
}

export default App;
