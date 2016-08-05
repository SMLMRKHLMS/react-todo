import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import store from './components/Store/Store';
import './index.css';

ReactDOM.render(React.createElement(store(App)), document.getElementById('root'));
