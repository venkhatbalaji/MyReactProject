import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
    <App />
</ BrowserRouter >
, document.getElementById('root'));
serviceWorker.unregister();
