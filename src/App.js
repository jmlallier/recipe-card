import React, { Component } from 'react';
import './App.css';
import Data from './fake_db.json';
import RecipeCardContainer from './containers/RecipeCardContainer';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: Data.title,
			description: Data.description,
			yield: Data.yield,
			prepTime: Data.prepTime,
			cookTimeLabel: Data.cookTimeLabel,
			cookTime: Data.cookTime,
			additionalTimeLabel: Data.additionalTimeLabel,
			additionalTime: Data.additionalTime,
			totalTime: this.calculateTotalTime(Data),
			ingredients: Data.ingredients,
			instructions: Data.instructions,
			notes: Data.notes
		}

		this.calculateTotalTime = this.calculateTotalTime.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	calculateTotalTime(data) {
		let
			hours = 0,
			minutes = (
				parseInt(data.prepTime, 10) +
				parseInt(data.cookTime, 10) +
				parseInt(data.additionalTime, 10)
			) || 0;

		if (minutes >= 60) {
			hours = minutes / 60;
			minutes = minutes % 60;
			return Math.trunc(hours) + 'h' + (minutes ? ' ' + minutes + 'm' : '');
		} else {
			return minutes + 'm';
		}
	}

	handleInputChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		let recipe = {
			title: this.state.title,
			description: this.state.description,
			yield: this.state.yield,
			prepTime: this.state.prepTime,
			cookTimeLabel: this.state.cookTimeLabel,
			cookTime: this.state.cookTime,
			additionalTimeLabel: this.state.additionalTimeLabel,
			additionalTime: this.state.additionalTime,
			totalTime: this.state.totalTime,
			ingredients: this.state.ingredients,
			instructions: this.state.instructions,
			notes: this.state.notes
		};
		return (
			<div className="App">
				<header className='App-header'>
					<h1 className='App-title'>Edit Recipe</h1>
				</header>
				<RecipeCardContainer
					data={recipe}
					changeHandler={this.handleInputChange}
				/>
			</div>
		);
	}
}

export default App;
