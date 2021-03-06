import React from 'react';
import ReactDOM from 'react-dom';
//### HW1.9   unicafe osa4: näytä "ei yhtään palautetta annettu" jos palautteita ei ole annettu


const Statistic = ({ name,stat }) => <div>{name} {stat}</div>
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
             <Statistic name="hyvä" stat={this.state.good}/>
             <Statistic name="neutraali" stat={this.state.neutral}/>
             <Statistic name="huono" stat={this.state.bad}/>
             <Statistic name="keskiarvo" stat={this.feedbackMean()}/> 
             <Statistic name="positiivisia" stat={this.positivePerc()}/> 
             <Statistic name="lukumäärä" stat={this.state.counter}/> 
            </div>
        </React.Fragment>
        );
        const cnt=this.state.counter;

        console.log("render Statistics here");
        console.log("cnt is " + cnt);
        //HW1.9 magic for conditional return
        switch(cnt) {
            case 0:
                return (<div id="nostats">ei yhtään palautetta annettu</div>);
            default:
                return (showStats);
        };
    };
    //TODO find out why I have Warning: Unreachable code  no-unreachable
    nollaa() {
      this.setState({ good: 0 });
      this.setState({ neutral: 0 });
      this.setState({ bad: 0 });
      this.setState({ counter: 0});
      this.setState({ sum: 0});
      console.log("nollaus this.state.good " + this.state.good);
      console.log("nollaus this.state.neutral " + this.state.neutral);
      console.log("nollaus this.state.bad " + this.state.bad);
      console.log("nollaus this.state.counter " + this.state.counter);
      console.log("nollaus this.state.sum " + this.state.sum);
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
        <div><h1>### HW1.9   unicafe</h1>
            <p> osa4: näytä "ei yhtään palautetta annettu" jos palautteita ei ole annettu</p>
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
            <Button
                handleClick={this.nollaa.bind(this)}
                text="Reset, nollaa metriikat"
                />

       </div>
      );
    };
  };
  
ReactDOM.render(<App />, document.getElementById('root'));

