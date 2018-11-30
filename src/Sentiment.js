import React, { Component } from 'react';
import axios from 'axios';


class Sentiment extends Component {
    constructor() {
        super();
        this.state = {
            //CREATE AND EMPTY ARRAY to hold the sentiment data
            sentiment: "",
            values: {
                neutral: "",
                positive: "",
                negative: "",
            }
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
            let values = response.data.probabilities;

            //SETS THE STATE TO OUR DATA      
            this.setState({
                sentiment: sentiment,
                values: values
            })
        })
    }
    render() {
        return (
            <div className="Sentiment">
                <p>{this.state.sentiment}</p>
                <p>Your tweet is {this.state.values.neutral} neutral</p>
                <p>Your tweet is {this.state.values.positive} positive</p>
                <p>Your tweet is {this.state.values.negative} negative</p>
                
            </div>
        );
    }
}

export default Sentiment;