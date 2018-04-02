import React from 'react';
import FormContainer from '../containers/FormContainer';
import RecipeCardPreview from '../components/RecipeCardPreview';


const RecipeCardContainer = (props) => (
	<div className='wrapper recipeBackground'>
		<FormContainer {...props} />
		<RecipeCardPreview {...props} />
	</div>
);

export default RecipeCardContainer;