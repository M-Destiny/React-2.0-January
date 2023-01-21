import ReactDOM from  'react-dom/client';
import React from 'react';
import App from './components/App.js';

import './css/style.css';

import router1 from './components/routing'
import { RouterProvider } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render('hello')
// root.render(<h1>hello</h1>);
root.render(
   <RouterProvider router={router1} /> 
);