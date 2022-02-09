import React, { Component } from 'react'
import From from '../components/From'
import Result from '../components/Result'
import NumbersForm from '../components/NumbersForm'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {// component stateful
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Lista Random</h1>
            <h3>Sistema Ramdom - Ordena numeros Aleatorios</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 offset-2 text-center">
            <From />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <h3>Lista de números aleatorios con Rango</h3>
          </div>
          <div className="col-md-8 offset-2 text-center">
            <NumbersForm />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 offset-2 text-center">
            <hr />
            <Result />
          </div>
        </div>
      </div>
    )
  }
}

export default App


