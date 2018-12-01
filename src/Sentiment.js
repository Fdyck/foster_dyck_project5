import React, { Component } from 'react';
import axios from 'axios';


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
    render() {
        return (
            <div className="Sentiment">
                <h3>Sentiment</h3>
                <p>{this.state.sentiment}</p>
                <p>Your tweet is {Math.round(this.state.values.neutral * 100)}% neutral</p>
                <p>Your tweet is {Math.round(this.state.values.positive * 100)}% positive</p>
                <p>Your tweet is {Math.round(this.state.values.negative * 100)}% negative</p>
                
            </div>
        );
    }
}

export default Sentiment;