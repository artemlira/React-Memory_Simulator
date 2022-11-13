import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.scss';
import App from './App';
import Context from './components/Context'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);


