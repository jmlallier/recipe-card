import React, { Component } from 'react';
import BasicInput from '../components/BasicInput';
import TextArea from '../components/TextArea';


class FormContainer extends Component {
	constructor(props) {
		super(props);
		let data = props.data;
		this.state = {
			title: data.title,
			description: data.description,
			yield: data.yield
		}
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleYieldChange = this.handleYieldChange.bind(this);
	}

	handleTitleChange(e) {
		this.setState({ title: e.target.value });
	}

	handleYieldChange(e) {
		this.setState({ yield: e.target.value });
	}

	handleDescriptionChange(e) {
		this.setState({ description: e.target.value });
	}

	handleClearForm(e) {
		e.preventDefault();
		this.setState({
			title: '',
			description: '',
			yield: ''
		});
	}

	handleFormSubmit(e) {
		e.preventDefault();

		const formPayload = {
			title: this.state.title,
			description: this.state.description,
			yield: this.state.yield,
		};

		console.log('Send this in a POST request:', formPayload);
		this.handleClearForm(e);
	}

	render() {
		return (
			<form className="FormContainer" onChange={this.props.inputFunc} onSubmit={this.handleFormSubmit}>
				<BasicInput
					inputType={'text'}
					title={'Title'}
					name={'title'}
					controlFunc={this.handleTitleChange}
					content={this.state.title}
					placeholder={'Title'} />
				<TextArea
					title={'Description'}
					name={'description'}
					rows={10}
					controlFunc={this.handleDescriptionChange}
					content={this.state.description}
					placeholder={'Description'}
				/>
				<div className="half">
				<BasicInput
					inputType={'text'}
					title={'Yield'}
					name={'yield'}
					controlFunc={this.handleYieldChange}
					content={this.state.yield}
					placeholder={'Yield'} />
				</div>
				<div className="half last"></div>
				<div className="button-group">
					<button
						className="button clearForm"
						onClick={this.handleClearForm}>Clear form
				</button>
					<input
						type="submit"
						className="button submitForm"
						value="Submit" />
				</div>
			</form>
		);
	}
}

export default FormContainer;