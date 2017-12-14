import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Button extends Component {
  handleClick = () => {
    this.props.incrementCounter(this.props.incrementValue)
  }
  render(){
    return(
      <button onClick={this.handleClick}>+{this.props.incrementValue}</button>
    )
  }
}

const Result = (props) => {
  return(
    <div>{props.counter}</div>
  );
}

class App extends Component {
  state = {counter: 0};

  incrementCounter = (incrementValue) => {
    this.setState((prevState)=>({
        counter: prevState.counter + incrementValue
    }))
  }

  render() {
    return(
      <div>
        <Button incrementValue={1} incrementCounter={this.incrementCounter}/>
        <Button incrementValue={5} incrementCounter={this.incrementCounter}/>
        <Button incrementValue={10} incrementCounter={this.incrementCounter}/>
        <Button incrementValue={100} incrementCounter={this.incrementCounter}/>
        <Result counter={this.state.counter}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));