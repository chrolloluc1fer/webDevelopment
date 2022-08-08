import './App.css';
import LandingPage from './components/LandingPage';
import Template from './components/Template';
import Header from './components/Header';
import SignIn from './components/SignIn';
import About from './components/About';
import Register from './components/Register';

import { Switch, Router, Route } from 'react-router-dom'


function App() {
  return (
   <>
  
    <Header/>
      <Switch>
      <Route path='/' exact><LandingPage/></Route>
      <Route path='/template' exact><Template/></Route>
      <Route path='/signin' exact><SignIn/></Route>
      <Route path='/aboutus' exact><About/></Route>
      <Route path='/register' exact><Register/></Route>
    </Switch>
   
   

   
   </>
  );
}

export default App;
