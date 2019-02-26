import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { recipes } from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetail';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        Hello from App
        <RecipeList />
        <RecipeDetails />

      </React.Fragment>
    );
  }
}

export default App;
