import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseContextGlobal from './Context/UseContextGlobal';
import reducer, { initialState } from './Context/Reducer';

ReactDOM.render(
  <React.StrictMode>
    <UseContextGlobal initialState={initialState} reducer={reducer} >
      <App />
    </UseContextGlobal>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
