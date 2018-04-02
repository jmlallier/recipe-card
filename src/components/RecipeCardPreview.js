import React, { Component } from 'react';

class RecipeCardPreview extends Component {
	render() {
		let recipe = this.props.data;
		return (
			<div className='RecipeCardPreview'>
				<div className="editorBox">
					<span className="editorBoxTitle">Recipe preview</span>
					<h3 className='recipeTitle'>{recipe.title}</h3>
					<p className='recipeDescription'>{recipe.description}</p>
					<div className="imageBox">
						<img
							src={recipe.imgUrl}
							alt={recipe.title + ' image'} />
					</div>
					<p className="recipeYield">Yield: {recipe.yield}</p>
					<div className="recipeTimes">
						<p className="recipeTime">Prep Time: {recipe.prepTime || 0}m</p>
						<p className="recipeTime">Cook Time: {recipe.cookTime || 0}m</p>
						<p className="recipeTime">Additional Time: {recipe.additionalTime || 0}m</p>
						<p className="recipeTime">Total Time: {recipe.totalTime}</p>
					</div>
					<hr />
					<div className="recipeContent ingredients">
						<h3 className="sectionTitle">Ingredients</h3>
						<p>{recipe.ingredients}</p>
					</div>
					<div className="recipeContent">
						<h3 className="sectionTitle">Instructions</h3>
						<p>{recipe.instructions}</p>
					</div>
					<hr />
					<div className="recipeContent">
						<h3 className="sectionTitle">Notes</h3>
						<p>{recipe.notes}</p>
					</div>
				</div>
			</div>
		)
	}
};

export default RecipeCardPreview;