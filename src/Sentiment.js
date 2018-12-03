import React, { Component } from 'react';
import axios from 'axios';
import SusanSentiment from './assets/susan.jpg';
import { Animated } from "react-animated-css";



class Sentiment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            //CREATE AND EMPTY ARRAY to hold the abusee data, I could let this get created automatically but more clear this way.
            sentiment: "",
            values: {
                neutral: "",
                positive: "",
                negative: "",
            },
            userInput: this.props.userInput,
            isHidden: false,
        }
    }
    componentDidMount() {
        const apiKey = `xztfFPMQl2NLEniIyfqQY2wLcO1YRJrlFj1zwEp7eTc`;
        //SENTIMENT ANALYSIS
        axios({
            method: 'POST',
            url: "https://apis.paralleldots.com/v3/sentiment",
            dataResponse: 'json',
            params: {
                text: `${this.state.userInput}`,
                api_key: apiKey,
            }
        }).then((response) => {
            //SPECIFIES OUR DATA TO THE AREA WE NEED
            const sentiment = response.data.sentiment;
            const values = response.data.probabilities;

            //SETS THE STATE TO OUR DATA      
            this.setState({
                sentiment,
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
            <div  onClick={this.toggleHidden} className="resultsContainer">
                <Animated className="Sentiment resultsBox" animationIn="zoomInLeft">
                <div className="resultSummary sentimentSummary">
                    <img src={SusanSentiment} alt="Profile of 'Sally Sentiment'" />
                    <div className="resultsTitle">
                        <h2>Susan Sentiment</h2>
                        <p className="italic">@Susie_Senti</p>
                    </div>
                </div>
                { toggleIsHidden 
                    ? <div className="resultsContent">
                        <p className="resultsCopy">I must say, that seems pretty <span className="bold">{this.state.sentiment}</span> of you to say!</p>
                        <p className="italic resultsDesc">... and I should know, I am a excellent judge of sentiment!</p>
                    </div>
                    : <div className="sentimentList">
                        <div className="sentimentListItems">
                            <p className="listCopy">Sentiment breakdown: </p>
                            <p class="listItem">{Math.round(this.state.values.neutral * 100)}% neutral</p>
                            <p class="listItem">{Math.round(this.state.values.positive * 100)}% positive</p> 
                            <p class="listItem">{Math.round(this.state.values.negative * 100)}% negative</p>
                        </div>
                    </div>
                }  
                </Animated>
            </div>
        );
    }
}

export default Sentiment;