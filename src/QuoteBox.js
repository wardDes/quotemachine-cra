import React, { Component } from 'react'

export class QuoteBox extends Component {

    render(){
        return (
            <div id="container">
                <div id="text">This is the way it goes!</div>
                <div id="author">Don No</div>
                <a id="new-quote"></a>
                <a id="tweet-quote"></a>
            </div>
        )
    }

}

export default QuoteBox