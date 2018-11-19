import React from 'react';
import ReactDOM from 'react-dom';
//### HW1.6   unicafe osa1: anna palautetta buttons (hyvä, neutraali, huono) ja statistiikka - selain-istuntopohjainen

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        counter: 1,
        good: 0,
        neutral: 0,
        bad: 0
      };
    };
  
    kasvataYhdella() {
      this.setState({ counter: this.state.counter + 1 });
      console.log("kasvataYhdella this.state.counter " + this.state.counter);
    };
  
    nollaa() {
      this.setState({ counter: 0 });
      console.log("nollaus this.state.counter " + this.state.counter);
    };

    goodPlusone() {
        this.setState({ good: this.state.good + 1});
        console.log("goodPlusone this.state.good = "+ this.state.good);
    };
  
    neutralPlusone() {
        this.setState({ neutral: this.state.neutral + 1});
        console.log("neutralPlusone this.state.neutral = "+ this.state.neutral);
    };

    badPlusone() {
        this.setState({ bad: this.state.bad + 1});
        console.log("badPlusone this.state.bad = "+ this.state.bad);
    };

    render() {
      return (
        <div>
          <div>{this.state.counter}</div>
          <div>
            <button onClick={this.kasvataYhdella.bind(this)}>
              plus
            </button>
            <button onClick={this.nollaa.bind(this)}>
                zero
            </button>
          </div>
            <div><h2>Anna palautetta</h2></div>
            <button onClick={this.goodPlusone.bind(this)}>hyvä</button>
            <button onClick={this.neutralPlusone.bind(this)}>neutraali</button>
            <button onClick={this.badPlusone.bind(this)}>huono</button>
            <div><h2>statistiikka</h2></div>
            <div> hyvä {this.state.good} </div>
            <div> neutraali {this.state.neutral} </div>
            <div> huono {this.state.bad} </div>
        </div>
      );
    };
  };
  
ReactDOM.render(<App />, document.getElementById('root'));

