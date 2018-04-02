import React from 'react';
import propTypes from 'prop-types';

const BasicInput = (props) => (
	<div className="form-group">
		<label className="form-label">{props.title}</label>
		<input
			className={props.className + ' form-input'}
			name={props.name}
			type={props.inputType}
			value={props.content}
			onChange={props.controlFunc}
			placeholder={props.placeholder}
			readOnly={props.readOnly || false}
			minLength={props.minLength || null}
			maxLength={props.maxLength || null}
		/>
	</div>
);

BasicInput.propTypes = {
	title: propTypes.string.isRequired,
	className: propTypes.string,
	name: propTypes.string.isRequired,
	inputType: propTypes.oneOf(['text', 'tel', 'number']).isRequired,
	content: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
	controlFunc: propTypes.func,
	placeholder: propTypes.string,
	readOnly: propTypes.bool,
	minLength: propTypes.number,
	maxLength: propTypes.number,
};

export default BasicInput;