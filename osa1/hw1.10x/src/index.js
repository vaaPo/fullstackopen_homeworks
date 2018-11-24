import React from 'react';
import ReactDOM from 'react-dom';
//### HW1.10x unicafe osa5: refactored to use same event handler, see https://fullstackopen.github.io/osa1/#funktio-joka-palauttaa-funktion
//


const Statistic = ({ name,stat }) => <div>{name} {stat}</div>
//<button onClick={this.funArvo} id='fungood'          value='1'>hyvä</button>
const Button = ({ handleClick, text, idval, valueval }) => (
    <button onClick={handleClick} id={idval} value={valueval}>
      {text}
    </button>
);

class App extends React.Component {
    constructor() {
      super();              // this !
      this.state = {
        counterconf: ['fungood','funneutral','funbad'],
        sumconf: ['sum','counter'],
        good: 0,
        neutral: 0,
        bad: 0,
        counter: 0,
        sum: 0,
        funfuncounter : {funcounter: 0, statvalue: 100},
        fungood:        {funcounter: 0, statvalue: 1},
        funneutral:     {funcounter: 0, statvalue: 0},
        funbad:         {funcounter: 0, statvalue: -1}
      };
    };
  //funfuncounter['counter']
  //funfuncounter['statvalue']

    Statistics = () => {
        const showStats=(
        <React.Fragment>
            <div id="st2"><h2>statistiikka</h2>
             <Statistic name="hyvä" stat={this.state.fungood.funcounter}/>
             <Statistic name="neutraali" stat={this.state.funneutral.funcounter}/>
             <Statistic name="huono" stat={this.state.funbad.funcounter}/>
             <Statistic name="keskiarvo" stat={this.feedbackMean()}/> 
             <Statistic name="positiivisia" stat={this.funpositivePerc()}/> 
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
            //eslint-disable-next-line
        }; 
    };

    funnollaa= async event => {
            event.preventDefault();     
            event.persist();
      // map, hmmm foreach ...
        this.state.counterconf.map((loopcounters) => {
            console.log("funnollaa is looping",loopcounters);
            const dynamiccountername = loopcounters; 
            const defstatvalue = Number(this.state[dynamiccountername].statvalue);  // this we trust ku pässi sarviinsa :) 
            const newvalue = 0;
            this.setState({ [dynamiccountername]: {funcounter: newvalue, statvalue: defstatvalue} });    
            console.log("funNOLLAA dynamiccountername:",dynamiccountername, " newvalue :", newvalue, " defstatvalue: ",defstatvalue);
            return ("hip");
        });
        this.state.sumconf.map((loopsums) => {
            console.log("funnollaa is looping sums", loopsums);
            const sumname=loopsums;
            const newvalue=0;
            this.setState({ [sumname]: newvalue});
            console.log("funNOLLAA sumname;", sumname, " newvalue:", newvalue);
            return ("hop");
        });
    };

    feedbackMean() {
        const fbmean = (this.state.sum/this.state.counter).toFixed(2);
        return (fbmean);
    };

    positivePerc() {
        const pperc = (this.state.good / this.state.counter * 100).toFixed(2);
        return (pperc + "%");

    };

    funpositivePerc() {
        const pperc = (this.state.fungood.funcounter / this.state.counter * 100).toFixed(2);
        return (pperc + "%");

    };


    //TODO https://stackoverflow.com/questions/29280445/reactjs-setstate-with-a-dynamic-key-name
/**    inputChangeHandler : function (event) {
        this.setState({ [event.target.id]: event.target.value });
        // alternatively using template strings for strings
        // this.setState({ [`key${event.target.id}`]: event.target.value });
    }
 */
    funArvo= async event => {
        event.preventDefault();     
        event.persist();
        console.log("funArvo Param passed => event.target.id: ", event.target.id);
        console.log("funArvo Param passed => event.target.value: ", event.target.value);
        const dynamiccountername = event.target.id;
        console.log("funArvo dynamiccountername :", dynamiccountername);
        console.log("funArvo before this.state[dynamiccountername]", this.state[dynamiccountername]);
        //...
        const defstatvalue = Number(this.state[dynamiccountername].statvalue);  // we save this so we can inject it back, hack it is.
        const newvalue = this.state[dynamiccountername].funcounter + Number(event.target.value);

        console.log("funArvo newvalue :", newvalue, " defstatvalue: ",defstatvalue);
        // this.setState({ [event.target.id]: newvalue });                      // the real magic with dynamic-key-name is here
        // if we dont put the array in condition the statvalue is lost //FIXME  
        this.setState({ [dynamiccountername]: {funcounter: newvalue, statvalue: defstatvalue} });                         // trick [dynamiccountername.counter]
        this.setState({ sum: this.state.sum + defstatvalue});     // trick [dynamiccountername.statvalue]
        this.setState({ counter: this.state.counter +1});
        console.log("funArvo after this.state[dynamiccountername]", this.state[dynamiccountername]);
    };

    render() {
      return (
        <div><h1>### HW1.10x unicafe</h1>
            <p> osa5: refactored to use same event handler, see https://fullstackopen.github.io/osa1/#funktio-joka-palauttaa-funktion</p>
            <div><h2>Anna palautetta</h2></div>
            <Button handleClick={this.funArvo.bind(this)}   idval='fungood'    valueval='1' text='hyvä'/> 
            <Button handleClick={this.funArvo.bind(this)}   idval='funneutral' valueval='1' text='neutraali'/> 
            <Button handleClick={this.funArvo.bind(this)}   idval='funbad'     valueval='1' text='huono'/> 
            <div> <this.Statistics/></div>
            <Button handleClick={this.funnollaa.bind(this)} idval='funnollaa'  valueval='0' text="Reset, nollaa metriikat"
                        />
       </div>
      );
    };
  };
  
ReactDOM.render(<App />, document.getElementById('root'));

