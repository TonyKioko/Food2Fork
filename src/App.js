import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { recipes } from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetail';


class App extends Component {

  state = {
    recipes:recipes,
    url:'https://www.food2fork.com/api/search?key=706e34a6cd0040671f82652ba3e62c88',
    details_id:35382,
    pageIndex:0,
    search:""
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

  // componentDidMount() {
  //   this.getRecipes()
  // }
  handleDetails =(index,id) => {
    this.setState({
      pageIndex:index,
      details_id:id
    })
  }
  handleIndex =(index) => {
    this.setState({
      pageIndex:index
    })
  }
  displayPage=(index) => {
    switch(index){
      default:
      case 1:
        return (
        <RecipeList recipes={this.state.recipes} handleDetails={this.handleDetails} value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />

         )
      case 0:
          return(

        <RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex} />

          )

    }
  }
  handleChange = (e) => {
    console.log('hello from change')
  }
  handleSubmit = (e) => {
    console.log('hello from submit')
  }
  render() {
// console.log(this.state.recipes)

    return (
      <React.Fragment>

        {this.displayPage(this.state.pageIndex)}
        {/* <RecipeList recipes={this.state.recipes} />
        <RecipeDetails id={this.state.details_id} /> */}

      </React.Fragment>
    );
  }
}

export default App;
