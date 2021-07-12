import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureProductsStore from './Patterns/Hook Store/products-store';

configureProductsStore();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


