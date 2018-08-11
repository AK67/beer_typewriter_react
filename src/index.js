import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import RestingFace from './components/restingFace';

ReactDOM.render(<RestingFace />, document.getElementById('root'));
registerServiceWorker();
