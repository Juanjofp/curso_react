// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

setInterval(
    () => ReactDOM.render(<App />, document.getElementById('root')),
    1000
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
