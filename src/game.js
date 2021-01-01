import React from 'react';

class Game extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            gameStart:false,
            run:0
        }
    }
    render(){
        // console.log(this.props.NamesArr);
        if(this.props.NamesArr.length<3){
            return(
                <button disabled>Enter At least 3 Players.</button>
            );
        }
        else{
            return(
                <div>
                    <GameEvaluate NamesArr={this.props.NamesArr} run={this.state.run}/>
                    <button type="button" onClick={() => {this.setState({run: this.state.run+1})}}>Start</button>
                </div>
            );
        }
    }
}

class GameEvaluate extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      prevAsker: 0,
      prevRespondent: 0,
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.run===0){
      console.log(false);
      return(false);
    }
    else if(nextProps.run!==this.props.run){
      console.log(nextProps.run);
      return(true);
    }
    else{
      return(false);
    }
  }
  render(){
    var prevAsker = this.state.prevAsker;
    var prevRespondent = this.state.prevRespondent;
    var respondent=0,asker=0;
    while((respondent===asker) || (prevRespondent===respondent) || (prevAsker===asker)){
        respondent=randomIndex(this.props.NamesArr.length);
        asker=randomIndex(this.props.NamesArr.length);
    }
    // this.state.prevAsker=asker
    // this.state.prevRespondent=respondent
    if(this.props.run>0){
      this.setState({prevAsker:asker,prevRespondent:respondent});
      return(
        <div className="OP">
          {this.props.NamesArr[respondent] + " " + this.props.NamesArr[asker]}
        </div>
      );
    }
    else{
      return(<div></div>)
    }
  }

}

function randomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
export default Game;
