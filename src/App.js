import React, { Component } from 'react';
import './App.css';
import Sentiment from './Sentiment.js';
import Emotion from './Emotion.js';
import Abuse from './Abuse.js';
import Mention from './Mention.js';




//I need to take information from the user
//Then I need to take the information and run it through an API to check the sentiment and emotion
// have an abuse alert (seems to over judge some statements, test some on their site to not use calls)
//Put in a notification so that you know if you inserted a person who is not tagged. (USING THE PERSON CATEGORY AS MEANING YOU HAVE MENTIONED WITHOUT THE @)
//I then need to display a different page to show you the sentiment of the tweet
//Then I need to give you an option to change the tweet or start fresh

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <Sentiment/> */}
        {/* <Emotion/> */}
        <Abuse/>
        {/* <Mention /> */}
      </div>
    );
  }
}

export default App;
