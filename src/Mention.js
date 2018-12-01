import React, { Component } from 'react';
import axios from 'axios';


class Mention extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //CREATE AND EMPTY ARRAY to hold the abusee data, I could let this get created automatically but more clear this way.
            name: "",
            category: "",
            userInput: this.props.userInput,
        }
    }
    componentDidMount() {
        const apiKey = `xztfFPMQl2NLEniIyfqQY2wLcO1YRJrlFj1zwEp7eTc`

        //SENTIMENT ANALYSIS
        axios({
            method: 'POST',
            url: "https://apis.paralleldots.com/v3/ner",
            dataResponse: 'json',
            params: {
                text: `${this.state.userInput}`,
                api_key: apiKey,
            }
        }).then((response) => {
            //SPECIFIES OUR DATA TO THE AREA WE NEED
            const name = response.data.entities[0].name
            const category = response.data.entities[0].category
            //SETS THE STATE TO OUR DATA      
            this.setState({
                name,
                category
            })
        })
    }
    render() {
        //THIS ALLOWS ME TO NOT SHOW ONE STATEMENT UNLESS THERE IS AN IDENTIFIED NAME
        const toggleAlert = this.state.category === "name";
        return (
            <div className="Mention">
                { toggleAlert
                    ? <div className="mentionAlert"><h3>Mention alert.</h3><p>You seem to mention {this.state.name} if they have twitter you should think about tagging them.</p></div>
                    : <p className="visuallyhidden">No incorrect mentions indetified</p>
                }
            </div>
        );
    }
}

export default Mention;