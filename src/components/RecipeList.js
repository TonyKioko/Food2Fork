import React, { Component } from 'react'
import Recipe from './Recipe'
import RecipeSearch from './RecipeSearch'


class RecipeList extends Component {
  render() {
    return (
        <React.Fragment>
<h1>
Hello from RecipeList

</h1>
<RecipeSearch />

<Recipe />

  </React.Fragment>
    )
  }
}

export default RecipeList;