import React, { Component } from 'react';
import axios from 'axios';


class Sentiment extends Component {
    constructor() {
        super();
        this.state = {
            //CREATE AND EMPTY ARRAY to hold the sentiment data
            //CAN I JUST FEED IN THE PROBABILITIES HERE AND NOT WORRY ABOUT THEM BEING AN OBJECT?
            sentiment: [],
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
            response = response.data;

            //SETS THE STATE TO OUR DATA      
            this.setState({
                sentiment: response
            })
        })
    }
    render() {
        return (
            <div className="Sentiment">
                <p>{this.state.sentiment.sentiment}</p>
                {/* <p>Your tweet is {this.state.sentiment.probabilities.negative}</p>
            MAYBE TRY OBJECT.keys(object).map.... */}
            </div>
        );
    }
}

export default Sentiment;