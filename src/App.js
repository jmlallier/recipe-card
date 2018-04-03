import React, { Component } from 'react';
import './App.css';
import Data from './fake_db.json';
import FormContainer from './components/FormContainer';
import RecipeCardPreview from './components/RecipeCardPreview';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'ti5yedlx';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/jmlallier/image/upload';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: Data.title,
			description: Data.description,
			imgUrl: Data.imgUrl,
			yield: Data.yield,
			prepTime: Data.prepTime,
			cookTimeLabel: Data.cookTimeLabel,
			cookTime: Data.cookTime,
			additionalTimeLabel: Data.additionalTimeLabel,
			additionalTime: Data.additionalTime,
			totalTime: this.calculateTotalTime(Data),
			ingredients: Data.ingredients,
			instructions: Data.instructions,
			notes: Data.notes,
			uploadedFileCloudinaryUrl: ''
		}

		this.calculateTotalTime = this.calculateTotalTime.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleImageUpload = this.handleImageUpload.bind(this);
		this.handleImageRemove = this.handleImageRemove.bind(this);
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

	handleImageUpload(file) {
		let upload = request.post(CLOUDINARY_UPLOAD_URL)
			.field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
			.field('file', file);

		upload.end((err, response) => {
			if (err) {
				console.error(err);
			}

			if (response.body.secure_url !== '') {
				this.setState({
					imgUrl: response.body.secure_url
				});
			}
		});
	}

	handleImageRemove(e) {
		e.preventDefault();
		this.setState({
			imgUrl: ''
		});
	}

	render() {
		let recipe = {
			title: this.state.title,
			description: this.state.description,
			imgUrl: this.state.imgUrl,
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
				<div className='wrapper recipeBackground'>
					<FormContainer data={recipe}
						changeHandler={this.handleInputChange}
						imageUploadHandler={this.handleImageUpload}
						removeImageHandler={this.handleImageRemove} />
					<RecipeCardPreview data={recipe}
						changeHandler={this.handleInputChange}
						imageUploadHandler={this.handleImageUpload}
						removeImageHandler={this.handleImageRemove} />
				</div>
			</div>
		);
	}
}

export default App;
