import React from 'react'
import { connect } from 'react-redux';

const Result = (props) => {

  return (
    <div className='container'>
      <h2>Resultado:</h2>
      <textarea className='form-control boxNum' rows='10' value={props.result} readOnly></textarea>
    </div>
  )
}

const stateMapToPros = state => {
  return {
    result: state.random.result?.randomList
  }
}

export default connect(stateMapToPros)(Result)
