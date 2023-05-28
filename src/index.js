import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Provider from './Context/Provider';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);