import React, { Component } from 'react';
import './App.css';

export default class Welcome_Page extends Component{
  logout(){
    this.props.history.push('/logout');
  }
  render(){
    const {username}=this.props.match.params; 
    return(
      <div> 
         <h1>Welcome {username}</h1>
         <button onClick={this.logout.bind(this)}>LogOut</button>
      </div>
    );
  }
}