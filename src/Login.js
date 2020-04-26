import React, { Component } from 'react';
import './App.css';
export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            err:''
        }
    }
    login(e){
        e.preventDefault();
        let username=e.target.elements.username.value;
        let password=e.target.elements.password.value;
        if(username==="aman" && password==="123"){
            this.props.history.push('/welcome/'+username);
        }
        else{
            this.setState({ 
                err:'Invalid'
            });
        }
    }
  render(){
    return(
      <div className="container bg-dark">
          {this.state.err!=''?this.state.err:''}
        <form method="post"onSubmit={this.login.bind(this)}>
            <div className="form-group text-white">
                <label for="userName">UserName</label>
                <input type="text" className="form-control" id="username" aria-describedby="userHelp"></input>
            </div>
            <div className="form-group text-white">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="password"></input>
            </div>
            {/* <button type="submit" className="btn btn-primary">Submit</button> */}
            <input type="submit" className="form-control" value="Login"></input>
        </form>
    </div>
    );
  }
}
