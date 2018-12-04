import React from 'react';
import axios from 'axios';
import CountryRow from './CountryRow';
import FormCountriesByString from './FormCountriesByString';
import FilterCountriesByString from './FilterCountriesByString';

class AppCountries extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        countries: [],
        newsearchCountry: '',
        value: ''
      };
      console.log('AppCountries constructor');
      this.handlesearchCountryChange = this.handlesearchCountryChange.bind(this);
      this.handleFormCountriesByString = this.handleFormCountriesByString.bind(this);
    };
  
  componentDidMount() {
      console.log('AppCountries did mount');
      axios
        .get('http://localhost:3001/persons')
        .then(response => {
          console.log('AppCountries promise fulfilled');
          this.setState({ countries: response.data });
        });
    };
 
  componentWillUnmount() {            // unmounting, We will tear down the timer in the componentWillUnmount() lifecycle method:
      console.log('AppCountries componentWillUnmount');
    }; 

  handleFormCountriesByString = (event) => {
    console.log(event.target.value);
    //alert('handleFormCountriesByString event.target.value: ' + event.target.value);
    this.setState({
      value: event.target.value.toUpperCase(),
      newsearchCountry: event.target.value.toUpperCase()
    });
  };


  render() {
    console.log('AppCountries render');
    const fetchedcountries = this.state.countries;

    console.log('AppCountries fetchedcountries',fetchedcountries)
    return (<div id="AppCountries"><h4>AppCountries for HW2.12</h4>
        <p>uses axios to fetch countries from restcountries.eu</p>
        <p>components: FilterCountriesByString, FormCountriesByString</p>
        <FormCountriesByString value={this.state.value} onChangeValue={this.handleFormCountriesByString} />
        <div id="FilterCountriesByString"><FilterCountriesByString searchstring={this.state.newsearchCountry} countries={this.state.countries}/>
        <p><b>AppCountries.CountryRow:</b>{fetchedcountries.map(person=><CountryRow key={country.id} country={country}/>)}</p>
        </div>
        </div>
        );
    };
  };

export default AppCountries;
