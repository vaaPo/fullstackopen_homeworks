import React from 'react'
import ReactDOM from 'react-dom'
//### HW1.13x anekdootit osa2: add vote-button for voting anecdotes

const Button = ({ handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
);
//https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
/**
 * Returns a random number between min (inclusive) and max (exclusive)
 * function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
};
 */


/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};



class App extends React.Component {
  constructor(props) {
    super(props)
    const usl = anecdotesnvotes.anecdotes.length -1; 
    const lsl = 0;
    const seedrandom = getRandomInt(lsl,usl);
    this.state = {
      selected: seedrandom //1 //-1   // 0 1 2 ..    //FIXME, this is fixed now- fix so that it is random from begin
    };
  };

  randme= async event => {
    event.preventDefault();     
    event.persist();
 //   const usl = anecdotes.length - 1 ;
    const usl = anecdotesnvotes.anecdotes.length -1 ;
    const lsl = 0;
    const randval = getRandomInt(lsl, usl);
    console.log("random", randval, usl);
    this.setState({ selected: randval});
    return ("hop");
    };

  voteme= async event => {
    event.preventDefault();     
    event.persist();

    const kopio = {...anecdotesnvotes};
    kopio.anecdotes[this.state.selected].votes += 1 ;  // add vote
    anecdotesnvotes.anecdotes[this.state.selected].votes = kopio.anecdotes[this.state.selected].votes;
    console.log("kopio votes",kopio.anecdotes[this.state.selected].key,kopio.anecdotes[this.state.selected].votes);
    console.log("votes",anecdotesnvotes.anecdotes[this.state.selected].votes);
    //FIXME how to rerender winner after voting and show new votes on the anecdote https://davidwalsh.name/react-force-render
    this.forceUpdate(); //FIXME this is not very clean, but works

    return ("hop");
    };
    

  render() {
      console.log(this.state.selected);
    return (
      <div>
          <div>HW1.13x   {anecdotesnvotes.nimi}</div>
        <Button handleClick={this.voteme.bind(this)} text="vote"/>
        <Button handleClick={this.randme.bind(this)} text="next anecdote"/>
        <p>{anecdotesnvotes.anecdotes[this.state.selected].key}.) {anecdotesnvotes.anecdotes[this.state.selected].text}</p>
        has votes: {anecdotesnvotes.anecdotes[this.state.selected].votes}

      </div>
    );
  };
};

const anecdotesnvotes = {
    nimi: 'Anecdotes with their votes',
    anecdotes: [
      { key: 0,
        text: 'If it hurts, do it more often',
        votes: 0
      },
      { key: 1,
        text: 'Adding manpower to a late software project makes it later!',
        votes: 0
      },
      { key: 2,
        text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        votes: 0
      },
      { key: 3,
        text:   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        votes: 0
      },
      { key: 4,
        text:   'Premature optimization is the root of all evil.',
        votes: 0
      },
      { key: 5,
        text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        votes: 0
      },
    ]
  };



ReactDOM.render(
  <App anecdotesnvotes={anecdotesnvotes} />,
  document.getElementById('root')
);
