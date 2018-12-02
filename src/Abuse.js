import React, { Component } from 'react';
import axios from 'axios';
import AbuseAlert from './assets/errorAlternate.png'


class Abuse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //CREATE AND EMPTY ARRAY to hold the abusee data, I could let this get created automatically but more clear this way.
            abuse: "",
            confidence_score: "",
            userInput: this.props.userInput,
            isHidden: false,
    }
}
    componentDidMount() {
        const apiKey = `xztfFPMQl2NLEniIyfqQY2wLcO1YRJrlFj1zwEp7eTc`

        //SENTIMENT ANALYSIS
        axios({
            method: 'POST',
            url: "https://apis.paralleldots.com/v3/abuse",
            dataResponse: 'json',
            params: {
                text: `${this.state.userInput}`,
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
    toggleHidden = () => {

        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    render() {
        const toggleAlert = this.state.abuse === "Abusive"
        const toggleIsHidden = this.state.isHidden === false
        return (
            <div className="Abuse">
                {toggleAlert
                    ? <div><img className="abuseAlert" onClick={this.toggleHidden} src={AbuseAlert} />
                    { toggleIsHidden 
                        ? <p className="hide"></p>
                        : <p>{this.state.confidence}% chance of abusive language.</p>
                    }
                    </div>
                    : <p className="visuallyhidden">{this.state.confidence}% sure this statement is not abusive.</p>
                }
            </div>
        );
    }
}

export default Abuse;