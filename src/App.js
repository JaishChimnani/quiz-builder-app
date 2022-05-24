import logo from './logo.svg';
import './App.css';
import Greeting from './Components/Greeting';
import Login from './Components/Login';
import {Route, Routes} from 'react-router-dom'
import {BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import QuizMaker from './Components/QuizMaker';

function App() {
  
  return (
    <>
  <Router>
    <Switch>

    <Route exact path={"/login"} component={Login}></Route>
    {/* {loggedIn} */}
    <Route exact path={"/quiz"} component={QuizMaker}></Route>
    <Route exact path={"/"} component={Greeting}></Route>
    </Switch>
  </Router>
    </>
  );
}

export default App;
