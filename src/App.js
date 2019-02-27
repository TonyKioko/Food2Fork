import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { recipes } from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetail';


class App extends Component {

  state = {
    recipes:[],
    url:'https://www.food2fork.com/api/search?key=706e34a6cd0040671f82652ba3e62c88'
  }

  async getRecipes(){
    try{
      const data = await fetch(this.state.url)
      const jsonData = await data.json()
      this.setState({
        recipes:jsonData.recipes
      })
    }catch(error){
console.log(error)
    }
  }

  componentDidMount() {
    this.getRecipes()
  }
  render() {
console.log(this.state.recipes)

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
