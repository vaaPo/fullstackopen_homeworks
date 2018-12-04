import React from 'react';
import axios from 'axios';
//import CountryRow from './CountryRow';
import FormCountriesByString from './FormCountriesByString';
import FilterCountriesByString from './FilterCountriesByString';

class AppCountries extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        countries: [],
        newsearchCountry: '',
        value: '',
        responsedatalength: ''
      };
      console.log('AppCountries constructor');
      this.handleFormCountriesByString = this.handleFormCountriesByString.bind(this);
    };
  
  componentDidMount() {
      console.log('AppCountries did mount');
      axios
        .get('http://localhost:3001/countries_name_alpha3code') //https://restcountries.eu/rest/v2/all?fields=name;alpha3Code
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
    const  responsedatalength = this.state.countries.length; 
    console.log('AppCountries render responsedatalength',responsedatalength);
    //const haemut='Å';
    //const haemut='A';

    console.log('AppCountries fetchedcountries',fetchedcountries)
    return (<div id="AppCountries"><h4>AppCountries for HW2.12</h4>
        <p>uses axios to fetch countries from restcountries.eu</p>
        <p>components: FilterCountriesByString, FormCountriesByString</p>
        <FormCountriesByString value={this.state.value} onChangeValue={this.handleFormCountriesByString} />
        <div id="FilterCountriesByString"><FilterCountriesByString searchstring={this.state.newsearchCountry} countries={this.state.countries}/>
        </div>
        </div>
        );
    };
  };

export default AppCountries;
/**
 *         <p><b>AppCountries.CountryRow:</b>{fetchedcountries.map(country=><CountryRow key={country.alpha3Code} country={country}/>)}</p>
        <p><b>AppCountries.CountryRow:</b>{fetchedcountries.map(country=><CountryRow key={country.alpha3Code} country={country}/>)}</p>

         <FormCountriesByString value={this.state.value} onChangeValue={this.handleFormCountriesByString} />
        <div id="FilterCountriesByString"><FilterCountriesByString searchstring={haemut} countries={this.state.countries}/>

 */