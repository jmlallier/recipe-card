import React, { Component } from 'react';

class RecipeCardPreview extends Component {
	render() {
		return (
			<div className='RecipeCardPreview'>
				<h3 className='recipeTitle'>{this.props.data.title}</h3>
				<p className='recipeDescription'>{this.props.data.description}</p>
				<p className="recipeYield">Yield: {this.props.data.yield}</p>
			</div>
		)
	}
};

export default RecipeCardPreview;