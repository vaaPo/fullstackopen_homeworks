import React from 'react';
import ReactDOM from 'react-dom';
//### HW1.8   unicafe osa3: refactored to components (Button, Statistics(shows all stats), Statistic(shows one stat row))

const Statistic = ({ stat }) => <div>{stat}</div>
const Statisticn = ({ name,stat }) => <div>{name} {stat}</div>
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
);

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
  
    Statistics = () => {
        const showStats=(
        <React.Fragment>
            <div id="st2"><h2>statistiikka</h2>
             <Statisticn name="hyvä" stat={this.state.good}/>
             <Statisticn name="neutraali" stat={this.state.neutral}/>
             <Statisticn name="huono" stat={this.state.bad}/>
             <Statisticn name="keskiarvo" stat={this.feedbackMean()}/> 
             <Statisticn name="positiivisia" stat={this.positivePerc()}/> 
             <Statisticn name="lukumäärä" stat={this.state.counter}/> 
            </div>
        </React.Fragment>
        );
        console.log("render Statistics here");
        console.log(showStats);
        return showStats;
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
        return (fbmean);
    };

    positivePerc() {
        const pperc = (this.state.good / this.state.counter * 100).toFixed(2);
        return (pperc + "%");

    };

    render() {
      return (
        <div><h1>###HW1.8   unicafe</h1>
            <p>osa3: refactored to components (Button, Statistics(shows all stats), Statistic(shows one stat row))</p>
            <div><h2>Anna palautetta</h2></div>
            <div>
                <Button
                handleClick={this.goodPlusone.bind(this)}
                text="Hyvä"
                />
                <Button
                handleClick={this.neutralPlusone.bind(this)}
                text="Neutraali"
                />
                <Button
                handleClick={this.badPlusone.bind(this)}
                text="Huono"
                />
            </div>
            <div> <this.Statistics/></div>
       </div>
      );
    };
  };
  
ReactDOM.render(<App />, document.getElementById('root'));

