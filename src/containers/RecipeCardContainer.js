import React, {Component} from 'react';
import FormContainer from '../containers/FormContainer';

// import RecipeCardPreview from '../components/RecipeCardPreview';

class RecipeCardContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: ''
		}
	}
	
	render() {
		return (
			<FormContainer/>
		)
	}
}

export default RecipeCardContainer;