import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Init from './components/Init';
import Home from './components/Home';
import Nav from './components/Nav';
import Add from './components/Add';
import Recipe from './components/Recipe';
import RecipeDetail from './components/RecipeDetail';


function App() {

  return (
    <div className="App">
    
        <Route  path='/home'><Nav /></Route>

      <Switch>
        <Route exact path='/'>
          <Init />
        </Route>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/home'>
          <Recipe />
        </Route>
        <Route exact path='/home/add'>
          <Add />
        </Route>
        <Route exact path='/home/:id'>
          <RecipeDetail />
        </Route>
        <Route><h1>404 Not Found!</h1></Route>
      </Switch>
    </div>
  );
}

export default App;
