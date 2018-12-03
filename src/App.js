import React, { Component } from 'react';
import './App.css';
import Sentiment from './Sentiment.js';
import Emotion from './Emotion.js';
import Abuse from './Abuse.js';
import Mention from './Mention.js';
import CheckYourselfProfile from './assets/checkYourselfProfile.jpg';

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
  returnHome = (e) => {
    e.preventDefault();

    const userInput = this.state.userInput

    if (userInput !== '') {
      this.setState({
        userInput: '',
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
            ? (<div className="search">
                <form className="searchForm" action="submit" autocomplete="off">
                <img src={CheckYourselfProfile} alt="Profile Picture of 'Check yourself'"/>
                <div className="searchProfileName">
                  <h1>Check yourself</h1>
                  <p className="italic">@Check_Urself</p>
                </div>
                <label htmlFor="addTweet" className="visuallyhidden">This form will let you input a text and get sentiment results on it.</label>
                <textarea onChange={this.handleChange} name="tweet" type="text" id="addTweet" col="10" rows="4" placeholder="This is where you put your tweet..."/>
                <h2 className="italic">...before this tweet wreck yourself.</h2>
                <input onClick={this.showAnalysis} type="submit" value="Tweet" />
              </form></div>)
            : <form className="visuallyhidden"></form>
      }
  {/* //PART OF THE PASSING OF THE USER INPUT TO THE COMPONENTS, NOT WORKING AND USING SENTIMENT AS THE EXAMPLE */}
        { showResults 
            ? (<div className="results">
                  <div className="resultsTitleBackground">
                      <img src={CheckYourselfProfile} alt="Profile Picture of 'Check yourself'" />
                      <div className="resultsProfileName">
                        <h1>Check yourself</h1>
                        <p className="italic">@Check_Urself</p>
                      </div>
                        <p className="userInput">"{this.state.userInput}"</p>
                        {showResults
                          ? <Abuse userInput={this.state.userInput} />
                          : <p className="visuallyhidden">No abuse detected</p>
                        }
                        {showResults
                          ? <Mention userInput={this.state.userInput} />
                          : <p className="visuallyhidden">No mention notifications</p>
                        }
                  </div>
                {showResults
                  ? <Sentiment userInput={this.state.userInput} />
                  : <p className="visuallyhidden">no sentiment data</p>
                }
                {showResults
                  ? <Emotion userInput={this.state.userInput} />
                  : <p className="visuallyhidden">No emotion data</p>
                }
                
                <button onClick={this.returnHome}>New Tweet</button>
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

// MOBILE RESIZING!! 

//IF THERE IS TIME PUT IN THE ANIMATIONS FROM ANIMATION.CSS, DIDNT WORK WHEN I TRIED

//MAKE SURE THAT CHROME IS WORKING, GETTING SOME SORT OF ERROR I DO NOT GET ON FIREFOX WITH THE ALERTS

//LOAD SCREEN
