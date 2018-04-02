import React, { Component } from 'react';
import BasicInput from '../components/BasicInput';
import TextArea from '../components/TextArea';
import propTypes from 'prop-types';

class FormContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			prepTime: this.props.data.prepTime,
			cookTime: this.props.data.cookTime,
			additionalTime: this.props.data.additionalTime,
			totalTime: this.props.data.totalTime
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.formatTime = this.formatTime.bind(this);
	}

	handleInputChange(e) {
		if (e.target.name === 'prepTime') {
			let theEvent = e;
			let key = theEvent.keyCode || theEvent.which;
			key = String.fromCharCode(key);
			let regex = /[0-9]/;
			if (!regex.test(key)) {
				theEvent.returnValue = false;
				if (theEvent.preventDefault) theEvent.preventDefault();
			}
		}
	}

	formatTime(e) {
		this.setState({ [e.target.name]: e.target.value || 0 },
			function (e) {
				let
					hours = 0,
					minutes = (
						parseInt(this.state.prepTime, 10) +
						parseInt(this.state.cookTime, 10) +
						parseInt(this.state.additionalTime, 10)
					) || 0;

				if (minutes >= 60) {
					hours = minutes / 60;
					minutes = minutes % 60;
					this.setState({ totalTime: Math.trunc(hours) + 'h' + (minutes ? ' ' + minutes + 'm' : '') },
						() => {
							let obj = {
								target: {
									name: 'totalTime',
									value: this.state.totalTime
								}
							};
							this.props.changeHandler(obj);
						});
				} else {
					this.setState({ totalTime: minutes + 'm' },
						() => {
							let obj = {
								target: {
									name: 'totalTime',
									value: this.state.totalTime
								}
							};
							this.props.changeHandler(obj);
						});
				}
			});
	}

	render() {
		let data = this.props.data;

		return (
			<form className="FormContainer" onChange={this.props.changeHandler} onSubmit={(e) => e.preventDefault}>
				<div className="editorBox">
					<span className="editorBoxTitle">Edit recipe</span>
					<BasicInput
						inputType={'text'}
						title={'Title'}
						name={'title'}
						className={'recipe-title'}
						controlFunc={this.handleInputChange}
						content={data.title}
						placeholder={'Title'} />
					<TextArea
						title={'Description'}
						name={'description'}
						rows={10}
						controlFunc={this.handleInputChange}
						content={data.description}
						placeholder={'Description'}
					/>
					<div className="half">
						<BasicInput
							inputType={'text'}
							title={'Yield'}
							name={'yield'}
							controlFunc={this.handleInputChange}
							content={data.yield}
							placeholder={'Yield'} />
						<BasicInput
							inputType={'text'}
							title={'Cook Time Label'}
							name={'cookTimeLabel'}
							controlFunc={this.handleInputChange}
							content={data.cookTimeLabel}
							placeholder={'Cook Time Label'} />
						<BasicInput
							inputType={'text'}
							title={'Additional Time Label'}
							name={'additionalTimeLabel'}
							controlFunc={this.handleInputChange}
							content={data.additionalTimeLabel}
							placeholder={'Additional Time Label'} />
					</div>
					<div className="half last">
						<BasicInput
							inputType={'tel'}
							title={'Prep Time (minutes)'}
							name={'prepTime'}
							controlFunc={this.formatTime}
							content={data.prepTime}
							placeholder={'Prep Time'}
							maxLength={3}
						/>
						<BasicInput
							inputType={'tel'}
							title={(data.cookTimeLabel || 'Cook Time') + ' (minutes)'}
							name={'cookTime'}
							controlFunc={this.formatTime}
							content={data.cookTime}
							placeholder={data.cookTimeLabel || 'Cook Time'}
							maxLength={3}
						/>
						<BasicInput
							inputType={'tel'}
							title={(data.additionalTimeLabel || 'Additional Time') + ' (minutes)'}
							name={'additionalTime'}
							controlFunc={this.formatTime}
							content={data.additionalTime}
							placeholder={data.additionalTimeLabel || 'Additional Time'}
							maxLength={3}
						/>
						<BasicInput
							inputType={'text'}
							title={'Total Time'}
							name={'totalTime'}
							controlFunc={this.props.handleInputChange}
							content={this.state.totalTime}
							placeholder={'0m'}
							readOnly={true}
						/>
					</div>
				</div>
				<div className="editorBox">
					<TextArea
						title={'Ingredients'}
						name={'ingredients'}
						controlFunc={this.handleInputChange}
						content={data.ingredients}
						placeholder={'Ingredients'}
					/>
					<TextArea
						title={'Instructions'}
						name={'instructions'}
						controlFunc={this.handleInputChange}
						content={data.instructions}
						placeholder={'Instructions'}
					/>
					<TextArea
						title={'Notes'}
						name={'notes'}
						controlFunc={this.handleInputChange}
						content={data.notes}
						placeholder={'Notes'}
					/>
				</div>
			</form>
		);
	}
}

FormContainer.propTypes = {
	changeHandler: propTypes.func.isRequired
};

FormContainer.propTypes = {
	changeHandler: propTypes.func.isRequired,

	data: propTypes.shape({
		title: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
		description: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
		yield: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
		cookTimeLabel: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
		additionalTimeLabel: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
		ingredients: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
		instructions: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
		notes: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
		prepTime: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
		cookTime: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
		additionalTime: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
		totalTime: propTypes.string.isRequired,
	}).isRequired
}

export default FormContainer;