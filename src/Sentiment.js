import React, { Component } from 'react';
import axios from 'axios';


class Sentiment extends Component {
    constructor() {
        super();
        this.state = {
            //CREATE AND EMPTY ARRAY to hold the sentiment data
            sentiment: "",
            negative: "",
        }
    }
    componentDidMount() {
        const apiKey = `xztfFPMQl2NLEniIyfqQY2wLcO1YRJrlFj1zwEp7eTc`
        const userInput = prompt()

        //SENTIMENT ANALYSIS
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
            let sentiment = response.data.sentiment;
            //SINCE THIS CONSOLE LOG RETURNS PROPER VALUES MAYBE I CAN JUST SET IT TO BE NEGATIVE?
            let neutral = response.data.probabilities.neutral;

            //SETS THE STATE TO OUR DATA      
            this.setState({
                sentiment: sentiment,
                neutral: neutral,
            })
        })
    }
    render() {
        return (
            <div className="Sentiment">
                <p>{this.state.sentiment.sentiment}</p>
                {/* <p>{this.state.sentiment.probabilities.neutral}</p> */}
                {/* <p>Your tweet is {this.state.sentiment.probabilities.negative}</p>
            MAYBE TRY OBJECT.keys(object).map.... */}
            </div>
        );
    }
}

export default Sentiment;