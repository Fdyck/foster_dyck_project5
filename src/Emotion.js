import React, { Component } from 'react';
import axios from 'axios';
import EmotionalEddie from './assets/emotionalEddy.jpg';


class Emotion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //CREATE AND EMPTY ARRAY to hold the abusee data, I could let this get created automatically but more clear this way.
            emotion: "",
            values: [],
            userInput: this.props.userInput,
            isHidden: false,
        }
    }
    componentDidMount() {
        const apiKey = `xztfFPMQl2NLEniIyfqQY2wLcO1YRJrlFj1zwEp7eTc`

        //Emotion ANALYSIS
        axios({
            method: 'POST',
            url: "https://apis.paralleldots.com/v3/emotion",
            dataResponse: 'json',
            params: {
                text: `${this.state.userInput}`,
                api_key: apiKey,
            }
        }).then((response) => {
            //SPECIFIES OUR DATA TO THE AREA WE NEED
           const emotion = response.data.emotion.emotion;
           let values = response.data.emotion.probabilities;
           values = Object.entries(values);

            //SETS THE STATE TO OUR DATA      
            this.setState({
                emotion,
                values
            })
        })
    }
    toggleHidden = () => {

        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    render() {
        const toggleIsHidden = this.state.isHidden === false
        return (
            <div className="Emotion resultsBox" onClick={this.toggleHidden}>
                <div className="resultSummary">
                    <img src={EmotionalEddie} alt="Profile Picture of 'Check yourself'" />
                    <div className="resultsTitle">
                        <h2>Eddy Emotions</h2>
                        <p className="italic">@Emotional_Eddie</p>
                    </div>
                </div>
                { toggleIsHidden
                    ? <div className="resultContent">
                        <p className="resultsCopy">You sound more <span className="bold">{this.state.emotion}</span> than me! That is saying something.</p>
                        <p className="italic resultsDesc">... trust me, I am great with emotions!</p>
                    </div> 
                    : <div className="emotionList">
                        <p className="listCopy">Emotional breakdown:</p>
                        {this.state.values.map(emotions => {return (
                            <p className="emotionListItem listItem">
                                {Math.round(emotions[1] * 100)}% {emotions[0]}
                            </p>
                        )})}
                    </div> 
                }
            </div>
        );
    }
}

export default Emotion;