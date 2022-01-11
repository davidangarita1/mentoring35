import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux';
import { fetchRandomNumbers } from '../actions/index';

const NumbersForm = (props) => {

	const [state, setState] = useState();

	const onSubmit = (e) => {
		e.preventDefault();
		props.dispatch(fetchRandomNumbers(state));
	};

	return (
		<Fragment>
			<form onSubmit={onSubmit}>
				<div className="input-group mt-3">
					<span className="input-group-text">Ingrese el rango de numeros</span>
					<input
						className="form-control"
						id="num1"
						type="number"
						min="0"
						max="100"
						placeholder='0'
						onChange={(e) => setState({ ...state, num1: e.target.value })}
					/>
					<input
						className="form-control"
						id="num2"
						type="number"
						min="1"
						max="100"
						placeholder='100'
						onChange={(e) => setState({ ...state, num2: e.target.value })}
					/>
				</div>
				<div className="input-group mt-3">
					<button 
					className="btn btn-success" 
					type="submit" 
					disabled={props.loading || !state}
					>Enviar</button>
				</div>
			</form>
		</Fragment>
	)
}

const stateMapToPros = state => {
	return {
		loading: state.view.loading
	}
}

export default connect(stateMapToPros)(NumbersForm)