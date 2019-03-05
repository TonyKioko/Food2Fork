import React, { Component } from 'react'
import { recipe } from '../tempDetails'

class RecipeDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      recipe:recipe,
      url:`https://www.food2fork.com/api/get?key=706e34a6cd0040671f82652ba3e62c88&rId=${this.props.id}`
    }
  }

//   async getRecipes(){
//     try{
//       const data = await fetch(this.state.url)
//       const jsonData = await data.json()
//       this.setState({
//         recipes:jsonData.recipes
//       })
//     }catch(error){
// console.log(error)
//     }
//   }

  async componentDidMount() {
    try{
      const data = await fetch(this.state.url)
      const jsonData = await data.json()
      this.setState({
        recipe:jsonData.recipe
      })
    }catch(error){
console.log(error)
    }
  }
  
  render() {
    const { image_url,publisher,publisher_url,source_url,title,ingredients } = this.state.recipe;
    console.log(this.state.recipe)

    const { handleIndex }=this.props;

    return (
        <React.Fragment>
<div className="container">
  <div className="row">
  <div className="col-10 mx-auto col-md-6 my-3">
      <button className="btn btn-warning mb-5 text-capitalize" onClick={()=>handleIndex(1)}>
      back to recipe list
      </button>
      <img src={image_url} alt="" className="d-block w-100"/>
  </div>
      <div className="col-10 mx-auto col-md-6 my-3">
      
      <h6 className="text-uppercase">{title}</h6>
      <h6 className="text-warning text-capitalize">{publisher}</h6>
      <a href={publisher_url} className="btn btn-primary text-capitalize" target="_blank" rel="noopener noreferrer">publisher web page</a>

      <a href={source_url} className="btn btn-success text-capitalize mt-2 mx-3" target="_blank" rel="noopener noreferrer">publisher web page</a>
      <ul className="list-group mt-4">
      <h2 className="mt-3 mb-4">Ingredients</h2>

      {ingredients.map((item,index) => {
        return(
          <li key={index} className="list-group-item">{item}</li>
        )
      })}
      </ul>

      </div>

  </div>
</div>
  </React.Fragment>
    )
  }
}

export default RecipeDetail;