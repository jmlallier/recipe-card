import React, {Component} from 'react';
import './App.css';
import RecipeCardContainer from './containers/RecipeCardContainer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<RecipeCardContainer/>
			</div>
		);
	}
}

export default App;
