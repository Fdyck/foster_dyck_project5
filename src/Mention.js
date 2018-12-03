import React, { Component } from 'react';
import axios from 'axios';
import MentionAlert from './assets/students.png'


class Mention extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //CREATE AND EMPTY ARRAY to hold the abusee data, I could let this get created automatically but more clear this way.
            name: "",
            category: "",
            userInput: this.props.userInput,
            isHidden: false,
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
    toggleHidden = () => {

        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    render() {
        //THIS ALLOWS ME TO NOT SHOW ONE STATEMENT UNLESS THERE IS AN IDENTIFIED NAME
        const toggleAlert = this.state.category === "name";
        const toggleIsHidden = this.state.isHidden === false;
        return (
            <div className="Mention">
                {toggleAlert 
                    ? <div className="alertButton">
                        { toggleIsHidden 
                            ? <p className="hide"></p>
                            : <p>Think about tagging {this.state.name} - </p>
                        }
                        <img className="mentionAlert" onClick={this.toggleHidden} src={MentionAlert} alt="Mentions may have been detected"/>
                    </div>
                    : <p className="visuallyhidden">No incorrect mentions indetified</p>
                }
            </div>
        );
    }
}

export default Mention;