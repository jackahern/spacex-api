import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
//import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

class Index extends Component {
  render() {
    return (
      <Router>
        <App />
      </Router>
    )
  }
}


ReactDOM.render(
  <React.StrictMode>
    <Index/>
  </React.StrictMode>,
  document.getElementById('root')
);


