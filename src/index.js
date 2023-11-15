import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'

 ReactDOM.createRoot(document.querySelector('#root')).render(
   <React.StrictMode>
     <BrowserRouter>
       <Provider store={store}>
         <App />
       </Provider>
     </BrowserRouter>
   </React.StrictMode>
);