import React, { Component } from 'react';
import axios from 'axios';


class Abuse extends Component {
    constructor() {
        super();
        this.state = {
            //CREATE AND EMPTY ARRAY to hold the abusee data, I could let this get created automatically but more clear this way.
            abuse: "",
            confidence_score: "",
    }
}
    componentDidMount() {
        const apiKey = `xztfFPMQl2NLEniIyfqQY2wLcO1YRJrlFj1zwEp7eTc`
        const userInput = prompt()

        //SENTIMENT ANALYSIS
        axios({
            method: 'POST',
            url: "https://apis.paralleldots.com/v3/abuse",
            dataResponse: 'json',
            params: {
                text: `${userInput}`,
                api_key: apiKey,
            }
        }).then((response) => {
            //SPECIFIES OUR DATA TO THE AREA WE NEED
            const abuse = response.data.sentence_type;
            const confidence = Math.round((response.data.confidence_score) * 100);

            //SETS THE STATE TO OUR DATA      
            this.setState({
                abuse,
                confidence
            })
        })
    }
    render() {
        const toggleAlert = this.state.abuse === "Abusive"
        return (
            <div className="Abuse">
                <h2>Abuse</h2>
                { toggleAlert 
                    ? <p>We are {this.state.confidence} sure that this statement is {this.state.abuse}</p>
                    : <p>{this.state.confidence} sure Abuse cleared</p>
                }
            </div>
        );
    }
}

export default Abuse;