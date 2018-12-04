import React from 'react';
import axios from 'axios';
import PersonRow from './PersonRow';

class AppPhoneBook extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        persons: []
      };
      console.log('AppPhoneBook constructor');
    };
  
    componentDidMount() {
      console.log('AppPhoneBook did mount');
      axios
        .get('http://localhost:3001/persons')
        .then(response => {
          console.log('AppPhoneBook promise fulfilled');
          this.setState({ persons: response.data });
        });
    };
  
    componentWillUnmount() {            // unmounting, We will tear down the timer in the componentWillUnmount() lifecycle method:
      console.log('AppPhoneBook componentWillUnmount');
    }; 
  

      render() {
        console.log('AppPhoneBook render');
        // ...
        const fetchedpersons = this.state.persons;
        console.log('AppPhoneBook fetchedpersons',fetchedpersons)
        return (
              <p>AppPhoneBook: {fetchedpersons.map(person=><PersonRow key={person.id} person={person}/>)}</p>
        );
    };
  };

export default AppPhoneBook;
