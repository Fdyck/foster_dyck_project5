import React, { Component } from 'react';
import axios from 'axios';


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
            <div className="Emotion" onClick={this.toggleHidden}>
                <h3>Emotion</h3>
                { toggleIsHidden
                    ? <div className="emotionSummary"><p>{this.state.emotion}</p></div> 
                    : <div className="emotionList">{this.state.values.map(emotions => {return (<p className="emotionListItem">{emotions[0]} = {Math.round(emotions[1] * 100)}%</p>)})}</div> 
                }
            </div>
        );
    }
}

export default Emotion;