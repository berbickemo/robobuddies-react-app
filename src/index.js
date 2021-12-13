import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
//imported card component and created it in the main folder
import reportWebVitals from './reportWebVitals';
import 'tachyons';
//to add different names to the cards we need properties
import { robots } from './robots'
//when imports and exports are not default we have to destructure them {name, second name...}
//we imported robots.js in which there is an object with different names and data about robots
ReactDOM.render(
              <div>
              <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
              <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
              <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
              
              </div>
              //nothing has changed because fn Card in card.js needs to accept the parameters

,document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
