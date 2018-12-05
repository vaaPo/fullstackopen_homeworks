import React from 'react';
import personsTAPI from './services/personsTAPI';


class PersonRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deleteId: null
    };
    console.log('PersonRow constructor');
    this.onPersonClick = this.onPersonClick.bind(this);
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

  onPersonClick(id) {
 
    alert("PersonRow onPersonClick for this.props.person.id "+id);
    console.log("this.onPersonClick",id);
  };

  render() {
/** 
const content= <><br></br>{this.props.person.id}
                          {this.props.person.phonenumber}
                          {this.props.person.name}
                          <button type="submit" 
                                  onClick={() => this.onPersonClick(this.props.person.id)}>
                                  del
                          </button>
                </>;
*/
const content= <><br></br>{this.props.person.id}
                          {this.props.person.phonenumber}
                          {this.props.person.name}
                          <button type="submit" 
                                  onClick={() => this.props.onPersonClick(this.props.person.id)}>
                                  del
                          </button>
                </>;

return (
    content
    );
  };
};

export default PersonRow;
//const PersonRow = ({ person }) => {
