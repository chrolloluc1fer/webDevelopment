import './App.css';
import LandingPage from './components/LandingPage';
import Template from './components/Template';
import Header from './components/Header';
import SignIn from './components/SignIn';
import About from './components/About';
import Register from './components/Register';
import Contact from './components/Contact';
import Education from './components/Education';
import Final from './components/Final';
import { Switch, Router, Route } from 'react-router-dom'
import Skill from './components/Skill';
import { useSelector } from 'react-redux';

function App() {
  let state = useSelector((state) => state);
  let auth = state.authReducer;
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact><LandingPage /></Route>
        <Route path='/template' exact component={auth.isAuth ? Template : SignIn}></Route>
        <Route path='/signin' exact component={auth.isAuth ? LandingPage : SignIn}><SignIn /></Route>
        <Route path='/aboutus' exact><About /></Route>
        <Route path='/register' exact component={auth.isAuth ? LandingPage : SignIn}></Route>
        <Route path='/contact' exact component={auth.isAuth ? Contact : SignIn}><Contact /></Route>
        <Route path='/education' exact component={auth.isAuth ? Education : SignIn}><Education /></Route>
        <Route path='/skill' exact component={auth.isAuth ? Skill : SignIn}><Skill /></Route>
        <Route path='/final' exact component={auth.isAuth ? Final : SignIn}><Final /></Route>
      </Switch>
    </>
  );
}

export default App;
