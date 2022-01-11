import React from 'react'
import { connect } from 'react-redux';

const NumberResult = (props) => {

	return (
		<div>
			{props.result && 'Resultado: ' + props.result}
		</div>
	)
}


const stateMapToPros = state => {
	return {
		result: state.random.result?.randomList
	}
}

export default connect(stateMapToPros)(NumberResult)