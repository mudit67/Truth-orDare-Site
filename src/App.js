import React, { Component } from "react";
import './App.css';
import ListNames from './listNames';
import Game from './game';

class App extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      users: [],
      user: "",
      showAlert: false
    }
    this.appendName = this.appendName.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }
  appendName(){
    var change=true;
    var Users = this.state.users;
    Users.map((user) => {
      // console.log(user + "  " + this.state.user)
      if(user.toUpperCase()===this.state.user.toUpperCase()){
        change=false;
        this.setState({showAlert: true});
      }
      return (" ");
      // console.log(change);
    });
    if(change && (this.state.user!=="")){
      // console.log(change);
      // Users.push(this.state.user);
      this.setState({users: this.state.users.concat(this.state.user)});
      this.setState({user:""});
    }
    console.log(this.state.users);
  }
  changeHandler(event){
    this.setState({showAlert: false});
    this.setState({user:event.target.value});
    // console.log(event);
  }
  render(){
    return(
      <>
        <h1>
          Truth or Dare
        </h1>
        <form onSubmit={(e) => {this.appendName();e.preventDefault();}}>
          <input value={this.state.user || ""} type="name" onChange={this.changeHandler}/>
        </form>
        <SameAlert show={this.state.showAlert} user={this.state.user}/>
        <ListNames namesArr={this.state.users}/>
        <br/>
        <br/>
        <Game NamesArr={this.state.users}/>
      </>
    );

  }
}

function SameAlert(props){
  // var CostomAlert;
  if(props.show){
    return(
      <>
        {props.user} <b>is already Entered.</b>
      </>
    );
  }
  else{
    return(
      <div/>
    );
  }
}


export default App;
