import React from 'react'
import { connect } from 'react-redux';

const Result = (props) => {

  return (
    <div className='container'>
      <h2>Resultado:</h2>
      <div className="form-control boxNum">
        {props.result && props.result}
      </div>
    </div>
  )
}

const stateMapToPros = state => {
  return {
    result: state.random.result?.randomList
  }
}

export default connect(stateMapToPros)(Result)
