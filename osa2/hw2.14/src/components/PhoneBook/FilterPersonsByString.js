import React from 'react';
import PersonRow from './PersonRow';
import personsTAPI from './services/personsTAPI';
import Notification from '../Notification/Notification';    //notifications
import OkNotification from '../Notification/OkNotification';    //notifications

console.log("FilterPersonsByString.js - loading");


class FilterPersonsByString extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deleteId: null,
      noerror: null,
      error: null
    };
    console.log('PersonRow constructor');
    this.onPersonClickDel = this.onPersonClickDel.bind(this);
  };

  componentDidMount() {               // mounting, method runs after the component output has been rendered to the DOM. This is a good place to set up a timer
      console.log('PersonRow componentDidMount');
      console.log('PersonRow props',this.props);
  };
/**While this.props is set up by React itself and this.state has a special meaning, 
 * you are free to add additional fields to the class manually 
 * if you need to store something that doesn’t participate in the data flow (like a timer ID).
 * 
 */
  componentWillUnmount() {            // unmounting, We will tear down the timer in the componentWillUnmount() lifecycle method:
      console.log('PersonRow componentWillUnmount');
  }; 

  onPersonClickDel(id) {
 
    alert("FPBS onPersonClickDel for id "+id);
    console.log("FPBS onPersonClickDel",id);
    personsTAPI
        .deletepromised(id)
        .then(deletedPerson => {
            alert("deletePromised "+id);
            this.props.onPersonClickDel(id);
            this.setState({
                noerror: 'DELETE OK!'
            });
            setTimeout(() => {
              this.setState({noerror: null})
            }, 5000);              });
  };

  render() {
    var hit=[];
    if (this.props.searchstring!==null) {
      hit=this.props.persons.filter(obj => {return obj.name.toUpperCase().includes(this.props.searchstring) });
    } else {
      hit=this.props.persons;
    };
    console.log('FPBS searchstring',this.props.searchstring);
    console.log('FPBS persons',this.props.persons);
    console.log('FPBS hit',hit);
    
    const content =<><br></br><b>FilterPersonsByString:</b>{this.props.searchstring} 
                    <OkNotification message={this.state.noerror}/>
                    <Notification message={this.state.error}/>

                    <table id="filterpersontable">
                      <tr>
                         <th>person.id</th>
                         <th>phonenumber</th>
                         <th>name</th>
                      </tr>
                      {hit.map(person=><PersonRow
                         key={person.id}
                         person={person}
                         onPersonClick={() => this.onPersonClickDel(person.id)}/>)}
                    </table>
                    </>;
     /**
    const content =<><br></br><b>FilterPersonsByString:</b>{this.props.searchstring} 
                    {hit.map(person=><PersonRow
                         key={person.id}
                         person={person}
                         onPersonClick={() => this.props.onPersonClickDel(person.id)}
                         />)}</>;
    */

    return (content);
  };
};

export default FilterPersonsByString;
//const FilterPersonsByString = ({ searchstring,persons,onSubmitDelete }) => {

/**
 * 
    return (
        <p><b>FilterPersonsByString:</b>{this.props.searchstring} 
                                        {hit.map(person=><PersonRow
                                                             key={person.id}
                                                             person={person}
                                                             onPersonClick={() => this.onPersonClickDel(person.id)}
                                                             />)}</p>
    );
 */
