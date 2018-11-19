import React from 'react';
import ReactDOM from 'react-dom';
//### HW1.8   unicafe osa3: refactored to components (Button, Statistics(shows all stats), Statistic(shows one stat row))

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        good: 0,
        neutral: 0,
        bad: 0,
        counter: 0,
        sum: 0
      };
    };
  
 
  
    nollaa() {
      this.setState({ good: 0 });
      this.setState({ neutral: 0 });
      this.setState({ bad: 0 });
      this.setState({ counter: 0});
      this.setState({ sum: 0});
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
        this.setState({ sum: this.state.sum +1});
        console.log("goodPlusone this.state.good = "+ this.state.good);
        this.counterPlusone();
    };
  
    neutralPlusone() {
        this.setState({ neutral: this.state.neutral + 1});
        this.setState({ sum: this.state.sum + 0});  // pfff
        console.log("neutralPlusone this.state.neutral = "+ this.state.neutral);
        this.counterPlusone();
    };

    badPlusone() {
        this.setState({ bad: this.state.bad + 1});
        this.setState({ sum: this.state.sum -1});
        console.log("badPlusone this.state.bad = "+ this.state.bad);
        this.counterPlusone();
    };

    feedbackMean() {
        const fbmean = (this.state.sum/this.state.counter).toFixed(2);
        return ("keskiarvo "+fbmean);
    }
    positivePerc() {
        const pperc = (this.state.good / this.state.counter * 100).toFixed(2);
        return ("positiivisia "+pperc + "%");

    }
    render() {
      return (
        <div><h1>###HW1.8   unicafe</h1>
            <p>osa3: refactored to components (Button, Statistics(shows all stats), Statistic(shows one stat row))</p>
            <div><h2>Anna palautetta</h2></div>
            <button onClick={this.goodPlusone.bind(this)}>hyvä</button>
            <button onClick={this.neutralPlusone.bind(this)}>neutraali</button>
            <button onClick={this.badPlusone.bind(this)}>huono</button>
            <div><h2>statistiikka</h2></div>
            <div> hyvä {this.state.good} </div>
            <div> neutraali {this.state.neutral} </div>
            <div> huono {this.state.bad} </div>
            <button onClick={this.nollaa.bind(this)}>nollaa</button>
            <div> counter {this.state.counter} </div>
            <div> {this.feedbackMean()}</div>
            <div> {this.positivePerc()}</div>
       </div>
      );
    };
  };
  
ReactDOM.render(<App />, document.getElementById('root'));

