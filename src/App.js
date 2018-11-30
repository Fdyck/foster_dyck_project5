import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Sentiment from './Sentiment.js'

//I need to take information from the user
//Then I need to take the information and run it through an API to check the sentiment and emotion
// have an abuse alert (seems to over judge some statements, test some on their site to not use calls)
//Put in a notification so that you know if you inserted a person who is not tagged. (USING THE PERSON CATEGORY AS MEANING YOU HAVE MENTIONED WITHOUT THE @)
//I then need to display a different page to show you the sentiment of the tweet
//Then I need to give you an option to change the tweet or start fresh

class App extends Component {
  
  //CREATE A CONSTRUCTOR SO WE CAN HAVE STATE, THIS IS NEEDED TO INCLUDE SUPER WHICH IS NEEDED TO HAVE STATE
  
  // constructor() {
  //   super();
  //   this.state = {
  //     //CREATE AND EMPTY ARRAY TO HOLD THE ART WE ARE GOING TO GET
  //     sentiment: [],
  //     emotion: [],
  //     abuse: [],
  //     person: []
  //   }
  // }
  // componentDidMount() {
  //   const apiKey = `xztfFPMQl2NLEniIyfqQY2wLcO1YRJrlFj1zwEp7eTc`
  //   const userInput = prompt() 

  //   //WE MAKE THE AJAX REQUEST USING AXIOS TO OUR ALIEN DATABASE
  //   //SENTIMENT ANALYSIS
  //   axios({
  //     method: 'POST',
  //     url: "https://apis.paralleldots.com/v3/sentiment",
  //     dataResponse: 'json',
  //       params: {
  //         text: `${userInput}`,
  //         api_key: apiKey,
  //       }
  //   }).then((response) => {
  //     //SPECIFIES OUR DATA TO THE AREA WE NEED
  //     response = response.data;
      
  //     //SETS THE STATE TO OUR DATA      
  //     this.setState({
  //       sentiment: response
  //     })
  //   })

  //   //EMOTION ANALYSIS
  //   axios({
  //     method: 'POST',
  //     url: "https://apis.paralleldots.com/v3/emotion",
  //     dataResponse: 'json',
  //     params: {
  //       text: `${userInput}`,
  //       api_key: apiKey,
  //     }
  //   }).then((response) => {
  //     //SPECIFIES OUR DATA TO THE AREA WE NEED
  //     response = response.data
  //     console.log(response)
  //     //SETS THE STATE TO OUR DATA      
  //     this.setState({
  //       emotion: response
  //     })
  //   })

  //   //ABUSE CHECKER
  //   axios({
  //     method: 'POST',
  //     url: "https://apis.paralleldots.com/v3/abuse",
  //     dataResponse: 'json',
  //     params: {
  //       text: `${userInput}`,
  //       api_key: apiKey,
  //     }
  //   }).then((response) => {
  //     //SPECIFIES OUR DATA TO THE AREA WE NEED
  //     response = response.data
  //     console.log(response)
  //     //SETS THE STATE TO OUR DATA      
  //     this.setState({
  //       abuse: response
  //     })
  //   })

  //   //PERSON DETECTOR
  //   axios({
  //     method: 'POST',
  //     url: "https://apis.paralleldots.com/v3/ner",
  //     dataResponse: 'json',
  //     params: {
  //       text: `${userInput}`,
  //       api_key: apiKey,
  //     }
  //   }).then((response) => {
  //     //SPECIFIES OUR DATA TO THE AREA WE NEED
  //     response = response.data
  //     console.log(response)
  //     //SETS THE STATE TO OUR DATA      
  //     this.setState({
  //       person: response
  //     })
  //   })
  //   console.log(this.state)
  // }

  render() {
    return (
      <div className="App">
        <Sentiment/>
      </div>
    );
  }
}

export default App;
