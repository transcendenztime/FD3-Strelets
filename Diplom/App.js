"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combinedReducer from './redux/reducers.js';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import PagesRouter from './pages/PagesRouter';
import CategoriesLinks from './pages/CategoriesLinks';


import './styles/App.css';


let store=createStore(combinedReducer);


ReactDOM.render( 
  <BrowserRouter>
    <Provider store={store}>
      <div> 
        <Header />

        <main className = "main">
          <div className = "nav-categories">
            <CategoriesLinks />
          </div>
          <div className = "content">
            <PagesRouter />
          </div>
        </main>
        
        <Footer />
      </div>
    </Provider>
  </BrowserRouter>
, document.getElementById('container') );
