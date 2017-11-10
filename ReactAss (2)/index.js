import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import App from './src/App'
//import './src/css/style.css'
import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render(<App />, document.getElementById('app'));