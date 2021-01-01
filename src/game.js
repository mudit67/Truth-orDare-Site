import React from 'react';

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            gameStart:false,
            run:0
        }
    }
    render(){
        // console.log(this.props.NamesArr);
        // debugger;
        if(this.props.NamesArr.length<3){
            return(
                <button disabled>Enter At least 3 Players.</button>
            );
        }
        else{
          // debugger;
            return(
                <div>
                    <GameEvaluate NamesArr={this.props.NamesArr} run={this.state.run}/>
                    <button type="button" onClick={() => {randomIndex(this.props.NamesArr.length);this.setState({run: this.state.run+1});}}>Start</button>
                </div>
            );
        }
    }
}

class GameEvaluate extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  shouldComponentUpdate(nextProps, nextState){

    if(nextProps.run===0){
      // console.log(false);
      return(false);
    }
    else if(nextProps.run!==this.props.run){
      // console.log(nextProps.run);
      return(true);
    }
    else{
      return(false);
    }
  }
  render(){
    if(this.props.run>0){
      // debugger;
      return(
        <div className="OP">
          {this.props.NamesArr[window.respondent] + " " + this.props.NamesArr[window.asker]}
        </div>
      );
    }
    else{
      return(<div></div>)
    }
  }

}
function randomNumber(max){
  return Math.floor(Math.random() * Math.floor(max));
}
function randomIndex(max) {
    debugger;
    window.respondent=randomNumber(max);
    window.asker=randomNumber(max);
    while((window.respondent===window.asker) || (window.prevRespondent===window.respondent) || (window.prevAsker===window.asker)){
        window.respondent=randomNumber(max);
        window.asker=randomNumber(max);
    }
    window.prevAsker=window.asker;
    window.prevRespondent=window.respondent;
    console.log("Random");
}
export default Game;
