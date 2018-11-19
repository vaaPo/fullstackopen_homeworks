import React from 'react';
import ReactDOM from 'react-dom';
//### HW1.8   unicafe osa3: refactored to components (Button, Statistics(shows all stats), Statistic(shows one stat row))



const Displayx = ({ counter }) => {
    return (
      <div>{counter}</div>
    )
};

const Statistic = ({ stat }) => <div>{stat}</div>

const Buttonx = (props) => (
<button onClick={props.handleClick}>
    {props.text}
</button>
);


const hello = (feedbackMean) => {
    const fbMean = () => { Statistic(this.feedbackMean)};
    console.log(fbMean);
  
    return (fbMean
    );
  };

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
            <div id="st2"><h2>statistiikka</h2></div>
            <div> hyvä {this.state.good} 
            <div> neutraali {this.state.neutral} 
            <div> huono {this.state.bad} 
            <div> <Statistic stat={this.feedbackMean()}/> 
            <div> <Statistic stat={this.positivePerc()}/> 
            <div> <Statistic stat={this.state.counter}/> </div></div></div></div></div></div>
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
        return ("keskiarvo "+fbmean);
    };

    positivePerc() {
        const pperc = (this.state.good / this.state.counter * 100).toFixed(2);
        return ("positiivisia "+pperc + "%");

    };

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
            <div> FIDDLE WITH DESTRUCTURING</div>
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
            <div> Displayx <Displayx counter={this.state.counter}/> </div>
            <div><h2>statistiikka</h2></div>
            <div> hyvä {this.state.good} </div>
            <div> neutraali {this.state.neutral} </div>
            <div> huono {this.state.bad} </div>
            <div> <Statistic stat={this.feedbackMean()}/> </div>
            <div> <Statistic stat={this.positivePerc()}/> </div>
            <div> <Statistic stat={this.state.counter}/> </div>
            PLAA
            <div> <this.Statistics/></div>
       </div>
      );
    };
  };
  
ReactDOM.render(<App />, document.getElementById('root'));

