import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList' //which is a parent of the Card component
//imported card component and created it in the main folder
import reportWebVitals from './reportWebVitals';
import 'tachyons';
//to add different names to the cards we need properties
import { robots } from './robots'
//when imports and exports are not default we have to destructure them {name, second name...}
//we imported robots.js in which there is an array of objects with different names and data about robots
ReactDOM.render(
              <CardList robots={robots} />
              //nothing has changed because fn Card in card.js needs to accept the parameters

,document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
