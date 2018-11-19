import React from 'react';
import ReactDOM from 'react-dom';
//### HW1.7   unicafe osa2: näytä lisäksi keskiarvot ja positiivisten määrä prosentteina%, kun hyvä=1, neutraali=0, huono=-1

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        good: 0,
        neutral: 0,
        bad: 0,
        counter: 0
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

    counterPlusone() {
        this.setState({ counter: this.state.counter + 1});
        console.log("counterPlusone this.state.counter = "+this.state.counter);
    };

    goodPlusone() {
        this.setState({ good: this.state.good + 1});
        console.log("goodPlusone this.state.good = "+ this.state.good);
        this.counterPlusone();
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
        <div><h1>###HW1.7   unicafe</h1>
            <p>osa2: näytä lisäksi keskiarvot ja positiivisten määrä prosentteina%, kun hyvä=1, neutraali=0, huono=-1</p>
            <div><h2>Anna palautetta</h2></div>
            <button onClick={this.goodPlusone.bind(this)}>hyvä</button>
            <button onClick={this.neutralPlusone.bind(this)}>neutraali</button>
            <button onClick={this.badPlusone.bind(this)}>huono</button>
            <div><h2>statistiikka</h2></div>
            <div> hyvä {this.state.good} </div>
            <div> neutraali {this.state.neutral} </div>
            <div> huono {this.state.bad} </div>
            <div> counter {this.state.counter} </div>
            <button onClick={this.nollaa.bind(this)}>
                nollaa

            </button>
       </div>
      );
    };
  };
  
ReactDOM.render(<App />, document.getElementById('root'));

