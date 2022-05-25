import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import Menu from './App';
// import Page from './App';

// const page = ReactDOM.createRoot(document.getElementById('root'));
// page.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


const home = ReactDOM.createRoot(document.getElementById('root'));

home.render(
  <React.StrictMode>
    <Menu />
    {/* <img src="./logo192.png" alt=""/> */}
  </React.StrictMode>
)

// const page = ReactDOM.createRoot(document.getElementById('root'));

// page.render(
//   <React.StrictMode>
//     <Page />
//   </React.StrictMode>

// )



