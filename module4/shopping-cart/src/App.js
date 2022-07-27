import Preview from './components/Preview';
import NavBar from './components/NavBar';
import Cart from './components/Cart'
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {
  return (
    <>
       <Router>
      <NavBar/>
      <Switch>
        <Route path ='/cart'>
          <Cart/>
        </Route>
        <Route path ='/preview'>
          <Preview/>
        </Route>
        <Route path ='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>

    </>
  );
}

export default App;
