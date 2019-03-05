import React, { Component } from 'react'
import Recipe from './Recipe'
import RecipeSearch from './RecipeSearch'


class RecipeList extends Component {
  render() {
    const { recipes,handleDetails,handleChange,handleSubmit,value,error } = this.props
    return (
        <React.Fragment>

<RecipeSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit}/>
<div className="container my-5">
<div className="row">
<div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
<h1>Recipe List</h1>
</div>

</div>

<div className="row">

{error?<h1 className="text-danger">{error}</h1> :
recipes.map(recipe => {
  return (
<Recipe  key={recipe.recipe_id} recipe={recipe} handleDetails={()=>handleDetails(0,recipe.recipe_id)} />

  )
})

}


</div>

</div>


  </React.Fragment>
    )
  }
}

export default RecipeList;
