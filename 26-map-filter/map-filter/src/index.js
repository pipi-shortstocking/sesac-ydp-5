import React from 'react';
import ReactDOM from 'react-dom/client';
import Alphabet from './Alphabet';
import App from './App';
import Event_ex from './ex/Event_ex';
import React_ex from './ex/React_ex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Alphabet />
  // </React.StrictMode>

  // <React.StrictMode>
  //   <Event_ex />
  // </React.StrictMode>

  <React.StrictMode>
    <React_ex />
  </React.StrictMode>
);
