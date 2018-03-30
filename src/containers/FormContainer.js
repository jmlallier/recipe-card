import React, {Component} from 'react';
import BasicInput from '../components/BasicInput';
// import TextArea from '../components/TextArea';

class FormContainer extends Component {
	constructor(props) {
		super(props);
		this.state             = {
			title: 'Test',
		};
		this.handleFormSubmit  = this.handleFormSubmit.bind(this);
		this.handleClearForm   = this.handleClearForm.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
	}
	
	componentDidMount() {
		/*
		fetch('./fake_db.json')
		.then(res => res.json())
		.then(data => {
			this.setState({
				title: data.title,
			});
		});
		*/
	}
	
	handleTitleChange(e) {
		this.setState({title: e.target.value}, () => console.log('title: ', this.state.title));
	}
	
	handleClearForm(e) {
		e.preventDefault();
		this.setState({
			title: ''
		});
	}
	
	handleFormSubmit(e) {
		e.preventDefault();
		
		const formPayload = {
			ownerName: this.state.title,
		};
		
		console.log('Send this in a POST request:', formPayload);
		this.handleClearForm(e);
	}
	
	render() {
		return (
			<form className="container" onSubmit={this.handleFormSubmit}>
				<h2>{this.state.title}</h2>
				<h5>Recipe Card</h5>
				<BasicInput
					inputType={'text'}
					title={'Title'}
					name={'title'}
					controlFunc={this.handleTitleChange}
					content={this.state.title}
					placeholder={'Title'}/>
				<input
					type="submit"
					className="btn btn-primary float-right"
					value="Submit"/>
				<button
					className="btn btn-link float-left"
					onClick={this.handleClearForm}>Clear form
				</button>
			</form>
		);
	}
}

export default FormContainer;