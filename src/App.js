import React, { Component } from 'react';
import './App.css';
import Sentiment from './Sentiment.js';
import Emotion from './Emotion.js';
import Abuse from './Abuse.js';
import Mention from './Mention.js';

//Then I need to give you an option to change the tweet or start fresh

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      tweet: ""
    }
  }
  handleChange = (e) => {
    this.setState({
      //target.value IS THE VALUE OF THE INPUT
      //Sets the state value to include the tweet input
      [e.target.name]: e.target.value
    })
  }
  showAnalysis = (e) => {
    //This gives us a state value when the user clicks submit that we will use to pass on to the API and return with feedback.
    e.preventDefault();
    const userInput = this.state.tweet;
    //STOPS EMPTY INPUTS
    if(userInput !== '') {
      this.setState({
        userInput: userInput,
        tweet: '',
      })
    }
  }
  render() {
    //PART OF THE PASSING OF THE USER INPUT TO THE COMPONENTS, NOT WORKING AND USING SENTIMENT AS THE EXAMPLE
    const userInput = this.state.userInput;

    return (
      <div className="App">
        <form action="submit">
          <label htmlFor="addTweet" className="visuallyhidden">Enter your tweet here</label>
          <input onChange={this.handleChange} name="tweet" type="text" id="addTweet" />
          <input onClick={this.showAnalysis} type="submit" value="Enter Tweet" />
        </form>
{/* //PART OF THE PASSING OF THE USER INPUT TO THE COMPONENTS, NOT WORKING AND USING SENTIMENT AS THE EXAMPLE */}
        <Sentiment userInput={userInput}/>
        {/* <Emotion/>
        <Abuse/>
        <Mention /> */}
      </div>
    );
  }
}

export default App;

//NOTES 

//if there is time go back and write a function for the axios call that you can just pass paramaters to and then feed into each component to make code a lot more DRY.

//DO I HAVE TO MAKE THE AXIO CALL IN A SEPERATE FUNCTION IN THE SCOPE OF USERINPUT AND THEN PASS ITS VALUE TO THE COMPONENT? EITHER WAY HOW DO I PASS A VALUE FROM PARENT TO THE COMPONENT BEFORE IT RENDERS

// MAKE THE ENTIRE COMPONENT NOT SHOW UNTIL THE SUBMIT BUTTON IS CLICKED