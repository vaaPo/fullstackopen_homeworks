import React from 'react';
import ReactDOM from 'react-dom';
//### HW1.10x unicafe osa5: refactored to use same event handler, see https://fullstackopen.github.io/osa1/#funktio-joka-palauttaa-funktion
//


const Statistic = ({ name,stat }) => <div>{name} {stat}</div>
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
);

// 1.10x hints:
const olio = {
    a: 1,
    b: 2
  };
  
  olio['c'] = 3;
  
  console.log(olio.a);    // tulostuu 1
  
  console.log(olio['b']);  // tulostuu 2
  
  const apu = 'c';
  console.log(olio[apu]);  // tulostuu 3

var object1 = {a: 'foo', b: 42, c: {}};

console.log(object1.a);
// expected output: "foo"

var a = 'foo';
var b = 42;
var c = {};
var object2 = {a: a, b: b, c: c};

console.log(object2.b);
// expected output: 42
// 1.10x hints:


class App extends React.Component {
    constructor() {
      super();              // this !
      this.state = {
        good: 0,
        neutral: 0,
        bad: 0,
        counter: 0,
        sum: 0,
        funfuncounter : 1
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
//        showis = 

        console.log("render Statistics here");
        console.log("cnt is " + cnt);
        console.log("STATISTICS this.state.good", this.state.good);
        //HW1.9 magic for conditional return
        //return (showStats);
        switch(this.state.counter) {
            case 0:
                return (<div id="nostats">ei yhtään palautetta annettu</div>);
                //https://eslint.org/docs/2.0.0/rules/no-unreachable
            default:
                return (showStats);
            //TODO find out why I have Warning: Unreachable code  no-unreachable
            // TODO https://eslint.org/docs/2.0.0/rules/no-unreachable 
            //eslint-disable-next-line
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

    //TODO https://stackoverflow.com/questions/29280445/reactjs-setstate-with-a-dynamic-key-name
/**    inputChangeHandler : function (event) {
        this.setState({ [event.target.id]: event.target.value });
        // alternatively using template strings for strings
        // this.setState({ [`key${event.target.id}`]: event.target.value });
    }
 */
    ngonArvo= async event => {
        event.preventDefault();     
        event.persist();
        console.log("ngonArvo Param passed => event.target.id: ", event.target.id);
        console.log("ngonArvo Param passed => event.target.value: ", event.target.value);
        const dynamiccountername = event.target.id;
        console.log("ngonArvo dynamiccountername :", dynamiccountername);
        console.log("ngonArvo before this.state[dynamiccountername]", this.state[dynamiccountername]);
        //...
        const newvalue = this.state[dynamiccountername] + Number(event.target.value);
        console.log("ngonArvo newvalue :", newvalue);
//        this.setState({ [event.target.id]: newvalue });                      // the real magic with dynamic-key-name is here
        this.setState({ [dynamiccountername]: newvalue });                      // the real magic with dynamic-key-name is here
        this.setState({ sum: this.state.sum +1});
        this.setState({ counter: this.state.counter +1});
        console.log("ngonArvo after this.state[dynamiccountername]", this.state[dynamiccountername]);
    };


    render() {
      return (
        <div><h1>### HW1.10x unicafe</h1>
            <p> osa5: refactored to use same event handler, see https://fullstackopen.github.io/osa1/#funktio-joka-palauttaa-funktion</p>
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

       <div>{this.state.funfuncounter+100}</div>
       <div>{this.state['funfuncounter']}</div>
       <button onClick={this.onApprove} id='approve' value='1'>Approve</button>
       <div>new buttons and new event handling</div>
       <button onClick={this.ngonArvo} id='good' value='1'>Good+1</button>
       <button onClick={this.ngonArvo} id='neutral' value='1'>Neutral+</button>
       <button onClick={this.ngonArvo} id='bad' value='1'>Bad+1</button>
       </div>
      );
    };
  };
  
ReactDOM.render(<App />, document.getElementById('root'));

