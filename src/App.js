import React from "react";
import './App.css';
import ListNames from './listNames';
import Game from './game';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus}  from '@fortawesome/free-solid-svg-icons';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      users: [],
      user: "",
      showAlert: false
    }
    this.appendName = this.appendName.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }
  appendName(){
    var change=true;
    var Users = this.state.users;
    Users.map((user) => {
      if(user.toUpperCase()===this.state.user.toUpperCase()){
        change=false;
        this.setState({showAlert: true});
      }
      return (" ");
    });
    if(change && (this.state.user!=="")){
      this.setState({users: this.state.users.concat(this.state.user)});
      this.setState({user:""});
    }
    // console.log(this.state.users);
  }
  changeHandler(event){
    this.setState({showAlert: false});
    this.setState({user:event.target.value});
  }
  removeUser(index){
    var Newarr = this.state.users;
    Newarr.splice(index,1);
    this.setState({users: Newarr});
  }
  render(){
    return(
      <>
        <nav>
          <h1>
            Truth or Dare
          </h1>
        </nav>
        <form onSubmit={(e) => {this.appendName();e.preventDefault();}}>
          <div className="input-container">
            <input value={this.state.user || ""} type="name" onChange={this.changeHandler} placeholder="Enter a player name."/>
            <div className="input-bar"/>
          </div>
          <FontAwesomeIcon icon={faPlus} className="add-icon" onClick={(e) => {this.appendName();e.preventDefault();}}/>
        </form>
        <SameAlert className="samealert" show={this.state.showAlert} user={this.state.users[0]}/>
        <ListNames namesArr={this.state.users} removeUser={(userIn) => {this.removeUser(userIn);}}/>
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
      <div className="samealert">
        {props.user} <b>is already Entered.</b>
      </div>
    );
  }
  else{
    return(
      <div/>
    );
  }
}


export default App;
