import React, { Component } from 'react';
import axios from 'axios';


class Emotion extends Component {
    constructor() {
        super();
        this.state = {
            //CREATE AND EMPTY ARRAY to hold the abusee data, I could let this get created automatically but more clear this way.
            emotion: "",
            values: []
        }
    }
    componentDidMount() {
        const apiKey = `xztfFPMQl2NLEniIyfqQY2wLcO1YRJrlFj1zwEp7eTc`
        const userInput = prompt()

        //SENTIMENT ANALYSIS
        axios({
            method: 'POST',
            url: "https://apis.paralleldots.com/v3/emotion",
            dataResponse: 'json',
            params: {
                text: `${userInput}`,
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
    render() {
        return (
            <div className="Emotion">
                <h2>EMOTION</h2>
                <p>{this.state.emotion}</p>
                {this.state.values.map( emotions => {
                    return(
                        <p>{emotions[0]} = {emotions[1]}</p>
                    )
                })}
                

            </div>
        );
    }
}

export default Emotion;