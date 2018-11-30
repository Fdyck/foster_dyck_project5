import React, { Component } from 'react';
import axios from 'axios';


class Mention extends Component {
    constructor() {
        super();
        this.state = {
            //CREATE AND EMPTY ARRAY to hold the abusee data, I could let this get created automatically but more clear this way.
            name: "",
            category: "",
        }
    }
    componentDidMount() {
        const apiKey = `xztfFPMQl2NLEniIyfqQY2wLcO1YRJrlFj1zwEp7eTc`
        const userInput = prompt()

        //SENTIMENT ANALYSIS
        axios({
            method: 'POST',
            url: "https://apis.paralleldots.com/v3/ner",
            dataResponse: 'json',
            params: {
                text: `${userInput}`,
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
                <h2>Mention Identifier</h2>
                { toggleAlert
                    ? <p>Does {this.state.name} have Twitter? You should tag them!</p>
                    : <p>No incorrect mentions indetified</p>
                }
            </div>
        );
    }
}

export default Mention;