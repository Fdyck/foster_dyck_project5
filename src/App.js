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
    const hideForm = this.state.userInput === "";
    return (
      <div className="App">
        <div className="wrapper">
      { hideForm 
            ? (<form className="searchForm" action="submit" autocomplete="off">
              <h1>Check yourself...</h1>
              <label htmlFor="addTweet" className="visuallyhidden">Enter your tweet here</label>
              <textarea onChange={this.handleChange} name="tweet" type="text" id="addTweet" col="10" rows="4"/>
              <input onClick={this.showAnalysis} type="submit" value="Check yourself before you..." />
            </form>)
            : <form className="visuallyhidden"></form>
      }
  {/* //PART OF THE PASSING OF THE USER INPUT TO THE COMPONENTS, NOT WORKING AND USING SENTIMENT AS THE EXAMPLE */}
        { showResults 
              ? (<div className="results">
                <h2 className="userInput">{this.state.userInput}</h2>
                {showResults
                  ? <Sentiment userInput={this.state.userInput} />
                  : <p className="visuallyhidden">no sentiment data</p>
                }
                {showResults
                  ? <Emotion userInput={this.state.userInput} />
                  : <p className="visuallyhidden">No emotion data</p>
                }
                {showResults
                  ? <Abuse userInput={this.state.userInput} />
                  : <p className="visuallyhidden">No abuse detected</p>
                }
                {showResults
                  ? <Mention userInput={this.state.userInput} />
                  : <p className="visuallyhidden">No mention notifications</p>
                }
              </div>)
              : <div className="visuallyhidden"></div>  
        }
        </div>
      </div>
    );
  }
}

export default App;

//NOTES 

//RENAME CSS PARTIALS BECAUSE EVERYTHING IS IN GLOBAL OR SEPERATE INTO PROPER PARTIALS

//RETURN BUTTON THAT RESETS THE STATES

//Write a function for the axios call that you can just pass paramaters to and then feed into each component to make code a lot more DRY.

// FIGURE OUT HOW TO NEST THE showSentiment CALL

// MAKE A CLICKABLE PART OF COMPONENT TO SEE THE DRILLED DOWN DATA

//MAKE SURE THAT CHROME IS WORKING, GETTING SOME SORT OF ERROR I DO NOT GET ON FIREFOX

//LOAD SCREEN
