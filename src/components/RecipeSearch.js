import React, { Component } from 'react'

class RecipeSearch extends Component {
  render() {
    return (
        <React.Fragment>
<div className="container">
  <div className="row">
  <div className="col-10 mx-auto col-md-8 mt-5 text-center">
  <h1 className="text-capitalize">
  search for recipe with {" "}
  <strong className="text-danger">Food2Fork</strong>
  </h1>
  <form  className="mt-4">
  
<label htmlFor="search" className="text-capitalize">type recipes seperated by comma</label>
<div className="input-group">
<input type="text"  name="search" placeholder="chicken,carrots,onions" className="form-control" />
<div className="input-group-append">
<button type="submit" className="input-group-text bg-primary text-white">
<i className="fas fa-search" />
</button>
</div>
</div>
  </form>
  </div>
  </div>
</div>
  </React.Fragment>
    )
  }
}

export default RecipeSearch;