import React, { useState } from 'react'
import { connect } from 'react-redux';
import { fetchRandom } from '../actions';

const From = (props) => {// component stateless
  const [state, setState] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    props.dispatch(fetchRandom(state));
  };

  return <div>
    <form onSubmit={onSubmit}>
      <div className="input-group mt-3">
        <label className="form-label mb-3" htmlFor="list"></label>
        <textarea
          className="form-control"
          id="list"
          style={{ width: "300px", height: "120px" }}
          onChange={(e) => setState(e.target.value)}
          placeholder='Ingrese los numeros separados por coma:'
        ></textarea>
      </div>

      <br />
      <button
        className="btn btn-success"
        type="submit"
        disabled={props.loading}>
        Enviar
      </button>
    </form>
  </div>
}


const stateMapToPros = state => {
  return {
    loading: state.view.loading
  }
}


export default connect(stateMapToPros)(From)
