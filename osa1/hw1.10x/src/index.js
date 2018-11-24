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

//FIXME voi pojat tää rewrite alkaa mennä vähän yli :)
    Statistics = () => {
        const showStats=(
        <React.Fragment>
            <div id="st2"><h2>statistiikka</h2>
             <Statistic name="hyvä" stat={this.state.good}/>
             <Statistic name="neutraali" stat={this.state.neutral}/>
             <Statistic name="huono" stat={this.state.bad}/>
             <Statistic name="funhyvä" stat={this.state.fungood.funcounter}/>
             <Statistic name="funneutraali" stat={this.state.funneutral.funcounter}/>
             <Statistic name="funhuono" stat={this.state.funbad.funcounter}/>
             <Statistic name="keskiarvo" stat={this.feedbackMean()}/> 
             <Statistic name="positiivisia" stat={this.positivePerc()}/> 
             <Statistic name="funpositiivisia" stat={this.funpositivePerc()}/> 
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
        this.setState({ sum: this.state.sum +1});  //TODO fix stats with correct values
        //funfuncounter['counter']
        //funfuncounter['statvalue']
        this.setState({ counter: this.state.counter +1});
        console.log("ngonArvo after this.state[dynamiccountername]", this.state[dynamiccountername]);
    };

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

       <button onClick={this.onApprove} id='approve' value='1'>Approve</button>
       <div>new buttons and new event handling</div>
       <button onClick={this.ngonArvo} id='good' value='1'>Good+1</button>
       <button onClick={this.ngonArvo} id='neutral' value='1'>Neutral+</button>
       <button onClick={this.ngonArvo} id='bad' value='1'>Bad+1</button>
       <div>funfuncounter tests</div>
       <div>funfuncounter.funcounter is {this.state.funfuncounter['funcounter']}</div>
       <div>funfuncounter.statvalue is {this.state.funfuncounter['statvalue']}</div>
       <div>fungood.funcounter is {this.state.fungood['funcounter']}</div>
       <div>funneutral.funcounter is {this.state.funneutral['funcounter']}</div>
       <div>funbad.funcounter is {this.state.funbad['funcounter']}</div>
       <div>funfuncounter.statvalue is {this.state.funfuncounter['statvalue']}</div>
       <button onClick={this.funArvo} id='funfuncounter'    value='1'>funfuncounter+1</button>
       <button onClick={this.funArvo} id='fungood'          value='1'>fungood+1</button>
       <button onClick={this.funArvo} id='funneutral'       value='1'>funneutral+1</button>
       <button onClick={this.funArvo} id='funbad'           value='1'>funbad+1</button>
       <Button
                handleClick={this.funnollaa.bind(this)}
                text="Reset, nollaa fun-metriikat"
                />

       </div>
      );
    };
  };
  
ReactDOM.render(<App />, document.getElementById('root'));

