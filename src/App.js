import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Welcome_Page from './Welcome_Page';

export default class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/welcome/:username" component={Welcome_Page}/>
          <Route path="/logout" component={Login}/>
          </Switch>
        </div>        
      </BrowserRouter>
    );
  }
}