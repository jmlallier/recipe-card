import React from 'react';
import Cleave from 'cleave.js/react';
import propTypes from 'prop-types';

const NumericInput = (props) => (
	<div className="form-group">
		<label className="form-label">{props.title}</label>
		<Cleave
			name={props.name}
			value={props.content}
			placeholder={props.placeholder}
			options={{blocks: [props.maxLength], delimiter: '', numericOnly: true}}
			onChange={props.controlFunc}
		/>
	</div>
);

NumericInput.propTypes = {
	title: propTypes.string.isRequired,
	name: propTypes.string.isRequired,
	content: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
	controlFunc: propTypes.func,
	placeholder: propTypes.string,
	maxLength: propTypes.number,
};

export default NumericInput;