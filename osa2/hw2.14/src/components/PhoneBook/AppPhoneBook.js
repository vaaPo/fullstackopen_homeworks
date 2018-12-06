import React from 'react';
import FormPersonsByString from './FormPersonsByString';
import FilterPersonsByString from './FilterPersonsByString';
import FormPersonAdd from './FormPersonAdd';
import personsTAPI from './services/personsTAPI';
import Notification from '../Notification/Notification';    //notifications
import OkNotification from '../Notification/OkNotification';    //notifications


class AppPhoneBook extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        showAll: true,
        persons: [],
        newPerson: '',
        newPhonenumber: '',
        newFormPerson: '',
        newFormPhonenumber: '',

        newsearchPerson: '',
        value: '',
        deletePersonId:'',
        error:null,
        noerror:null
      };
      console.log('AppPhoneBook constructor');
      this.addPerson = this.addPerson.bind(this);
      this.handlePersonChange = this.handlePersonChange.bind(this);
      this.handlesearchPersonChange = this.handlesearchPersonChange.bind(this);
      this.handleFormPersonByString = this.handleFormPersonByString.bind(this);
      this.handleChangeValueFormPerson = this.handleChangeValueFormPerson.bind(this);
      this.handleChangeValueFormPhonenumber = this.handleChangeValueFormPhonenumber.bind(this);
      this.onPersonClickDelDeep = this.onPersonClickDelDeep.bind(this);

    };
  
  componentDidMount() {
      console.log('AppPhoneBook did mount');
                  /**      axios
                          .get('http://localhost:3001/persons')
                          .then(response => {
                            console.log('AppPhoneBook promise fulfilled');
                            this.setState({ persons: response.data });
                          });
                          */
      personsTAPI
        .getAllpromised()
        .then(response => {
          this.setState({
            persons: response,
            noerror: 'personsTAPI getAllpromised gets persons to you!'
          });
          setTimeout(() => {
            this.setState({noerror: null})
          }, 5000)
        });
    };
 
  refreshPersons() {
      console.log('AppPhoneBook.js refreshPersons');
      this.setState({persons: []});

      personsTAPI
        .getAllpromised()
        .then(response => {
          this.setState({
            persons: response,
            noerror: 'refreshPersons!'
          });
          setTimeout(() => {
            this.setState({noerror: null})
          }, 5000);
        });
    };
 

  componentWillUnmount() {            // unmounting, We will tear down the timer in the componentWillUnmount() lifecycle method:
      console.log('AppPhoneBook componentWillUnmount');
    }; 

  addPerson = (event) => {
    event.preventDefault();
    const duplicate = this.state.persons.find(person => person.name === this.state.newPerson);
    if (duplicate===undefined) {
      console.log(duplicate);
      alert('addPerson submitted: ' + this.state.newPerson + ' with phonenumber:' + this.state.newPhonenumber);
      const personObject = {
        name: this.state.newPerson,
        phonenumber: this.state.newPhonenumber
//        id: this.state.persons.length + 1
      };
      personsTAPI
      .createpromised(personObject)
      .then(newPerson => {
        this.setState({
          persons: this.state.persons.concat(personObject),   //FIXME ei toimi json-serverin luoma id puuttuu
          newPerson: '',
          newPhonenumber: '',
          noerror: 'addPerson!'
        });
        setTimeout(() => {
          this.setState({noerror: null})
        }, 5000);
      this.refreshPersons();
      });
//      const persons = this.state.persons.concat(personObject);
  
//      this.setState({
//        persons: persons,
//        newPerson: '',
//        newPhonenumber: ''
//      });
      } else {
      //alert('duplicate check: ' +this.state.newPerson +" is duplicate " + duplicate); 
    };

  };

  handlePersonChange = (event) => {
    console.log(event.target.value);
    this.setState({ newPerson: event.target.value });
  };


  handlePhonenumberChange = (event) => {
    console.log(event.target.value);
    this.setState({ newPhonenumber: event.target.value });
  };


  addFormPerson = (event) => {
    event.preventDefault();
    alert('addFormPerson submitted: ' + this.state.newFormPerson + ' with phonenumber:' + this.state.newFormPhonenumber);
    const duplicate = this.state.persons.find(person => person.name === this.state.newFormPerson);
    if (duplicate===undefined) {
      console.log(duplicate);
      const personObject = {
        name: this.state.newFormPerson,
        phonenumber: this.state.newFormPhonenumber,
//        id: this.state.persons.length + 1
      }; 
      personsTAPI
      .createpromised(personObject)
      .then(newPerson => {
        this.setState({
          persons: this.state.persons.concat(personObject), //FIXME returning id uupuu?
          newFormPerson: '',
          newFormPhonenumber: '',
          ValueFormPerson: '',
          ValueFormPhonenumber:'',
          noerror: 'addPerson!'
        });
        setTimeout(() => {
          this.setState({noerror: null})
        }, 5000);
        this.refreshPersons();
      });
//      const persons = this.state.persons.concat(personObject);
//  
//      this.setState({
//        persons: persons,
//        newFormPerson: '',
//        newFormPhonenumber: '',
//        ValueFormPerson: '',
//        ValueFormPhonenumber:''
//      });
    } else {
      alert('duplicate check: ' +this.state.newFormPerson +" is duplicate " + duplicate); 
      this.setState({
        error: 'DUPLICATES NOT ALLOWED!'
      });
      setTimeout(() => {
        this.setState({error: null})
      }, 5000);
    };
  };

  handleChangeValueFormPerson = (event) => {
    console.log('hCVFormP',event.target.value);
    this.setState({ newFormPerson: event.target.value });
  };
  handleChangeValueFormPhonenumber = (event) => {
    console.log('hCVFormPn',event.target.value);
    this.setState({ newFormPhonenumber: event.target.value });
  };


  handlesearchPersonChange = (event) => {
    console.log(event.target.value);
    this.setState({
      value: event.target.value.toUpperCase(),
      newsearchPerson: event.target.value.toUpperCase()
    });

  };

  handleFormPersonByString = (event) => {
    console.log(event.target.value);
    //alert('handleFormPersonByString event.target.value: ' + event.target.value);
    this.setState({
      value: event.target.value.toUpperCase(),
      newsearchPerson: event.target.value.toUpperCase()
    });
  };


  // conditional chains type, but only one row
  //  of ternary https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
  // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
  // the difference of == and ===
  onPersonClickDelDeep() {
 
    alert("AppPhoneBook onPersonClickDelDeep ");
    console.log("this.onPersonClickDelDeep");
  };

  render() {
    console.log('AppPhoneBook render');
    const fetchedpersons = this.state.persons;

    console.log('AppPhoneBook fetchedpersons',fetchedpersons)
    return (<div id="AppPhoneBook"><h4>AppPhoneBook for HW2.14</h4>
        <OkNotification message={this.state.noerror}/>
        <Notification message={this.state.error}/>
        <p>uses axios: adding persons,duplicate prevention,phonenumbers and search</p>
        <p>components: AllPersons, FilterPersonsByName, FilterPersonsByString, FormPersonAdd</p>

        <FormPersonsByString value={this.state.value} onChangeValue={this.handleFormPersonByString} />

        <div id="FilterPersonsByString"><FilterPersonsByString 
                                                    searchstring={this.state.newsearchPerson}
                                                    persons={this.state.persons}
                                                    onPersonClickDel={() => this.refreshPersons()}/>
        <FormPersonAdd ValuePerson={this.state.newFormPerson} 
                       onChangeValuePerson={this.handleChangeValueFormPerson}
                       ValuePhonenumber={this.state.newFormPhonenumber}
                       onChangeValuePhonenumber={this.handleChangeValueFormPhonenumber}
                       onSubmit={this.addFormPerson} />
        <form onChange={this.searchPerson}>
          <label>search:
            <input
            name="searchPersonInput"
            type="text"
            value={this.state.newsearchPerson}
            onChange={this.handlesearchPersonChange}
            />
          </label>
          debug: {this.state.newsearchPerson}
        </form><h3>Person-form in AppPhoneBook</h3>
        <form onSubmit={this.addPerson}>
          <label>name: 
          <input
            name="addPersonInput"
            type="text"
            value={this.state.newPerson} 
            onChange={this.handlePersonChange}
          />
          </label><p>
          <label>phonenumber: 
          <input
            name="addPhonenumberInput"
            type="text"
            value={this.state.newPhonenumber} 
            onChange={this.handlePhonenumberChange}
          />
          </label></p>
          <button type="submit">tallenna person</button>
        </form>
        debug: {this.state.newPerson}

        </div>
        </div>
        );
    };
  };

export default AppPhoneBook;

/**
 * 
        <div id="FormPersonsByString"><h1>FORM FormPersonsByString</h1>
        <FormPersonsByString value={this.state.value} onChangeValue={this.handleFormPersonByString} />

                </div>

                        <div id="searchedpersonsincludes"><h2>Searched persons, string includes</h2>
            {searchitpersons3.map(person=><PersonRow key={person.id} person={person}/>)}
        <div id="searchedpersonsexact"><h2>Searched persons, exact match</h2>
            {searchitpersons.map(person=><PersonRow key={person.id} person={person}/>)}
        <div id="persons"><h2>All persons</h2>
            {this.state.persons.map(person=><PersonRow key={person.id} person={person}/>)}

        <p><b>AppPhoneBook.PersonsRow:</b>{fetchedpersons.map(person=><PersonRow 
                                                                        key={person.id}
                                                                        person={person}
                                                                        deletePerson={this.deletePerson(person.id)} />)}</p>

 */
/**
 * 
 *         <div id="AllPersons"><AllPersons persons={this.state.persons}/>
        <div id="FilterPersonsByName"><FilterPersonsByName searchstring={this.state.newsearchPerson} persons={this.state.persons}/>
        </div>
        </div>

 */