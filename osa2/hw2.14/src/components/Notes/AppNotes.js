import React from 'react';
import axios from 'axios';
import NoteRow from './NoteRow';

class AppNotes extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        notes: [],
        newNote: '',
        showAll: true
      };
      console.log('AppNotes constructor');
      this.toggleVisible = this.toggleVisible.bind(this);
      this.addNote = this.addNote.bind(this);
      this.handleNoteChange= this.handleNoteChange.bind(this);
    };
  
  componentDidMount() {
      console.log('AppNotes did mount');
      axios
        .get('http://localhost:3001/notes')
        .then(response => {
          console.log('AppNotes promise fulfilled');
          this.setState({ notes: response.data });
        });
    };
 
  componentWillUnmount() {            // unmounting, We will tear down the timer in the componentWillUnmount() lifecycle method:
      console.log('AppNotes componentWillUnmount');
    }; 


    addNote = (event) => {
        event.preventDefault();
        const noteObject = {
          content: this.state.newNote,
          date: new Date().new,
          important: Math.random() > 0.5,         // 50% chance to get true or false
          id: this.state.notes.length + 1
        };
    
        

        // adds note to notes - jsonserver handles post
        axios.post('http://localhost:3001/notes', noteObject)
        .then(response => {
          console.log(response);
          this.setState({
            notes: this.state.notes.concat(response.data),
            newNote: ''
          })
        });
    
/** OBSOLETED WITH AXIOS POST        const notes = this.state.notes.concat(noteObject);
        this.setState({
          notes,
          newNote: ''
        });
         */
      };
    
      handleNoteChange = (event) => {
        console.log(event.target.value);
        this.setState({ newNote: event.target.value });
      };
      
      toggleVisible = () => {
        this.setState({ showAll: !this.state.showAll });   // toggles the true to false to true
      };
    
      toggleImportance = (id) => {
          return () => {
          //FIXME es6 template string doesnt work: console.log('importance of ${id} needs to be toggled');
            console.log('importance of '+id+' needs to be toggled');
          //FIXME ei toimi  const url='http://localhost:3001/notes/${id}';            // note specific unique url
            const url='http://localhost:3001/notes/'+id;
            const note=this.state.notes.find(n=>n.id===id);           // get id reference (to note) for the to be changed note
            const changedNote={ ...note, important: !note.important }; // object spread https://github.com/tc39/proposal-object-rest-spread
            /**
             * Käytännössä {...note} luo olion, jolla on kenttinään kopiot olion note kenttien arvoista. 
             * Kun aaltosulkeisiin lisätään asioita, esim. { ...note, important: true }, 
             * tulee uuden olion kenttä important saamaan arvon true. 
             * Eli esimerkissämme important saa uudessa oliossa vanhan arvonsa käänteisarvon.
             * Kannattaa myös huomata, että uusi olio changedNote on ainoastaan ns shallow copy,  https://en.wikipedia.org/wiki/Object_copying#Shallow_copy
             * eli uuden olion kenttien arvoina on vanhan olion kenttien arvot. 
             * Jos vanhan olion kentät olisivat itsessään olioita, 
             * viittaisivat uuden olion kentät samoihin olioihin.
             * 
             *  Koska tilaa ei Reactissa saa muuttaa suoraan!
             */
            axios
              .put(url, changedNote)
              .then(response => {
                this.setState({
                  notes: this.state.notes.map(note=>note.id!==id ? note:response.data)
                })
              });
              /**
               * Uusi muistiinpano lähetetään sitten PUT-pyynnön mukana palvelimelle, jossa se korvaa aiemman muistiinpanon.
               * Takaisinkutsufunktiossa asetetaan komponentin App tilaan kaikki vanhat muistiinpanot 
               * paitsi MUUTTUNEEN, josta tilaan asetetaan PALVELIMEN PALAUTTAMA versio:
               * Tämä saadaan aikaan metodilla map joka siis luo uuden taulukon vanhan taulukon perusteella. 
               * Jokainen uuden taulukon alkio luodaan ehdollisesti siten, että 
               * jos ehto note.id !== id on tosi, otetaan uuteen taulukkoon suoraan vanhan taulukon kyseinen alkio. 
               * Jos ehto on epätosi, eli kyseessä on muutettu muistiinpano, otetaan uuteen taulukkoon palvelimen palauttama olio.
               * 
               */
          };
          /**Eli komponentin App metodi toggleImportanceOf ei itsessään ole tapahtumankäsittelijä, 
           * vaan tehdas, jonka avulla kullekin muistiinpanolle luodaan oma tapahtumankäsittelijä.
           * Yksittäistä json-serverillä olevaa muistiinpanoa voi muuttaa kahdella tavalla, 
           * joko korvaamalla sen tekemällä HTTP PUT -pyyntö muistiinpanon yksilöivään osoitteeseen 
           * tai muuttamalla ainoastaan joidenkin muistiinpanon kenttien arvoja HTTP PATCH -pyynnöllä.
           * 
           */
      };
    
  render() {
    console.log('AppNotes render');
    const notesToShow =             // ternary operator, if showAll===false then filter
    this.state.showAll ?
      this.state.notes :
      this.state.notes.filter(note => note.important === true) ;         // render only important===true

  const label = this.state.showAll ? 'vain tärkeät' : 'kaikki';


    return (
        <React.Fragment>
        <h1>AppNotes </h1>
          <button onClick={this.toggleVisible}>
            näytä {label}
          </button>
        <ul>
          {notesToShow.map(note => <NoteRow 
                                        key={note.id}
                                        note={note}
                                        toggleImportance={this.toggleImportance(note.id)} />)}
        </ul>
        <form onSubmit={this.addNote}>
          <input
            name="addNoteInput"
            type="text"
            value={this.state.newNote} 
            onChange={this.handleNoteChange}
          />
          <button type="submit">tallenna</button>
        </form>
                <p>Mapped ALL notes:
                {this.state.notes.map(note=><NoteRow key={note.id} note={note}/>)}
                </p>
        </React.Fragment>
        );
    };
  };

export default AppNotes;

