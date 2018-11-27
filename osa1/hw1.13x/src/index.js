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
    this.state = {
      selected: -1   // 0 1 2 ..
    };
  };

  randme= async event => {
    event.preventDefault();     
    event.persist();
    const usl = anecdotes.length - 1 ;
    const lsl = 0;
    const randval = getRandomInt(lsl, usl);
    console.log("random", randval, usl);
    this.setState({ selected: randval});
    return ("hop");
    };

  voteme= async event => {
    event.preventDefault();     
    event.persist();
    const usl = anecdotes.length - 1 ;
    const lsl = 0;
    const randval = getRandomInt(lsl, usl);
    console.log("random", randval, usl);
    this.setState({ selected: randval});
    return ("hop");
    };
    

  render() {
    return (
      <div>
        {this.props.anecdotes[this.state.selected]}
        <br></br>
        <Button handleClick={this.voteme.bind(this)} text="vote"/>
        <Button handleClick={this.randme.bind(this)} text="next anecdote"/>
      </div>
    );
  };
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

const pisteet = [1, 4, 6, 3];
console.log(pisteet);

const kopio = [...pisteet]
kopio[2] += 1   // kasvatetaan taulukon paikan 2 arvoa yhdellä

const anecdotesnvotes = {
    nimi: 'Anecdotes with their votes',
    anecdotes: [
      {
        text: 'If it hurts, do it more often',
        votes: 0
      },
      {
        text: 'Adding manpower to a late software project makes it later!',
        votes: 0
      },
      {
        text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        votes: 0
      },
      {
        text:   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        votes: 0
      },
      {
        text:   'Premature optimization is the root of all evil.',
        votes: 0
      },
      {
        text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        votes: 0
      },
    ]
  };




ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
);
