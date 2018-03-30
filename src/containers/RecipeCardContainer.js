import React, { Component } from 'react';
import FormContainer from '../containers/FormContainer';
import RecipeCardPreview from '../components/RecipeCardPreview';


class RecipeCardContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Avocado Prosciutto Brie Sandwiches',
			description: "Avocado Prosciutto Brie Sandwiches with blood orange mango chutney are just the thing to bring out when spring is in full swing. The sweet and spicy chutney gives this sandwich a star power that will be the center of everyone’s attention. It’s the amazing combination bright, light, salty and peppery flavors that every flaky croissant is begging to be piled up with.",
			yield: '2 servings'
		}
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(e) {
		let name = e.target.name;
		this.setState({ [name]: e.target.value }, () => (console.log(this.state)));
	}

	render() {
		return (
			<div className='wrapper'>
				<FormContainer
					inputFunc={this.handleInputChange}
					data={{ title: this.state.title, description: this.state.description, yield: this.state.yield }}
				/>
				<RecipeCardPreview data={{ title: this.state.title, description: this.state.description, yield: this.state.yield }} />
			</div>
		)
	}
}

export default RecipeCardContainer;