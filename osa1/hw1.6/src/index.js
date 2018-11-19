import React from 'react';
import ReactDOM from 'react-dom';
//### HW1.6   unicafe osa1: anna palautetta buttons (hyvä, neutraali, huono) ja statistiikka - selain-istuntopohjainen

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        good: 0,
        neutral: 0,
        bad: 0
      };
    };
  
 
  
    nollaa() {
      this.setState({ good: 0 });
      this.setState({ neutral: 0 });
      this.setState({ bad: 0 });
      console.log("nollaus this.state.good " + this.state.good);
      console.log("nollaus this.state.neutral " + this.state.neutral);
      console.log("nollaus this.state.bad " + this.state.bad);
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
        <div><h1>### HW1.6   unicafe</h1>
            <p>osa1: anna palautetta buttons (hyvä, neutraali, huono) ja statistiikka - selain-istuntopohjainen</p>
            <div><h2>Anna palautetta</h2></div>
            <button onClick={this.goodPlusone.bind(this)}>hyvä</button>
            <button onClick={this.neutralPlusone.bind(this)}>neutraali</button>
            <button onClick={this.badPlusone.bind(this)}>huono</button>
            <div><h2>statistiikka</h2></div>
            <div> hyvä {this.state.good} </div>
            <div> neutraali {this.state.neutral} </div>
            <div> huono {this.state.bad} </div>
            <button onClick={this.nollaa.bind(this)}>
                nollaa
            </button>
       </div>
      );
    };
  };
  
ReactDOM.render(<App />, document.getElementById('root'));

