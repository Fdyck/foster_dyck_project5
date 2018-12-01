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
    const showResults = this.state.userInput !== "";
    return (
      <div className="App">
        <div className="wrapper">
        <h1>Check yourself...</h1>
          <form action="submit">
            <label htmlFor="addTweet" className="visuallyhidden">Enter your tweet here</label>
            <textarea onChange={this.handleChange} name="tweet" type="text" id="addTweet" />
            <input onClick={this.showAnalysis} type="submit" value="Check yourself before you..." />
          </form>
  {/* //PART OF THE PASSING OF THE USER INPUT TO THE COMPONENTS, NOT WORKING AND USING SENTIMENT AS THE EXAMPLE */}
          <div className="results">
          <h2 className="userInput">{this.state.userInput}</h2>
            {showResults
              ? <Abuse userInput={this.state.userInput} />
              : <p className="visuallyhidden">No abuse detected</p>
            }
            { showResults 
              ? <Sentiment userInput={this.state.userInput}/>
              : <p className="visuallyhidden">no sentiment data</p>
            }
            { showResults
              ? <Emotion userInput={this.state.userInput}/>
              : <p className="visuallyhidden">No emotion data</p>
            }
            {showResults
              ? <Mention userInput={this.state.userInput} />
              : <p className="visuallyhidden">No mention notifications</p>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//NOTES 

//MIGHT BE BEST TO HAVE THE FORM COMPLETELY BE REPLACED BY RESULTS THEN HAVE A BUTTON TO RETURN YOU, toggle display none class on the stuff I want to hide?

//RENAME CSS PARTIALS BECAUSE EVERYTHING IS IN GLOBAL OR SEPERATE INTO PROPER PARTIALS

//Write a function for the axios call that you can just pass paramaters to and then feed into each component to make code a lot more DRY.

// FIGURE OUT HOW TO NEST THE showSentiment CALL

// MAKE A CLICKABLE PART OF COMPONENT TO SEE THE DRILLED DOWN DATA

//IF BOTH MENTION ALERT AND ABUSE ALERT GO OFF THEN LOAD A DIFFERENT ASSULT ALERT?

//LOAD SCREEN
