import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  //CREATE A CONSTRUCTOR SO WE CAN HAVE STATE, THIS IS NEEDED TO INCLUDE SUPER WHICH IS NEEDED TO HAVE STATE
  
  constructor() {
    super();
    this.state = {
      //CREATE AND EMPTY ARRAY TO HOLD THE ART WE ARE GOING TO GET
      feedback: []
    }
  }
  componentDidMount() {
    const apiKey = `xztfFPMQl2NLEniIyfqQY2wLcO1YRJrlFj1zwEp7eTc`
    const userInput = prompt()
    
    //THIS ALLOWS THE USER TO INPUT A DATE

    //WE MAKE THE AJAX REQUEST USING AXIOS TO OUR ALIEN DATABASE
    axios({
      method: 'POST',
      url: "https://apis.paralleldots.com/v3/sentiment",
      dataResponse: 'json',
        params: {
          text: `${userInput}`,
          api_key: apiKey,
        }
    }).then((response) => {
      //SPECIFIES OUR DATA TO THE AREA WE NEED
      response = response.data
      console.log(response)
      //SETS TE STATE TO OUR DATA      
      // this.setState({
      //   feedback: response
      // })
    })

    axios({
      method: 'POST',
      url: "https://apis.paralleldots.com/v3/emotion",
      dataResponse: 'json',
      params: {
        text: `${userInput}`,
        api_key: apiKey,
      }
    }).then((response) => {
      //SPECIFIES OUR DATA TO THE AREA WE NEED
      response = response.data
      console.log(response)
      //SETS TE STATE TO OUR DATA      
      // this.setState({
      //   feedback: response
      // })
    })

    axios({
      method: 'POST',
      url: "https://apis.paralleldots.com/v3/abuse",
      dataResponse: 'json',
      params: {
        text: `${userInput}`,
        api_key: apiKey,
      }
    }).then((response) => {
      //SPECIFIES OUR DATA TO THE AREA WE NEED
      response = response.data
      console.log(response)
      //SETS TE STATE TO OUR DATA      
      // this.setState({
      //   feedback: response
      // })
    })

    axios({
      method: 'POST',
      url: "https://apis.paralleldots.com/v3/ner",
      dataResponse: 'json',
      params: {
        text: `${userInput}`,
        api_key: apiKey,
      }
    }).then((response) => {
      //SPECIFIES OUR DATA TO THE AREA WE NEED
      response = response.data
      console.log(response)
      //SETS TE STATE TO OUR DATA      
      // this.setState({
      //   feedback: response
      // })
    })
    
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
