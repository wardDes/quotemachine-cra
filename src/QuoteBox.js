import React, { Component } from 'react'
import './qbstyles.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faQuoteLeft)

export class QuoteBox extends Component {

    render(){
        return (
            <div id="quote-box">
                <div className="text-container">
                    <div id="text"><FontAwesomeIcon icon={['fas', 'quote-left']}  size="2x"/><span>When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.</span></div>
                </div>
                <div className="author-container">
                    <div id="author">- Don No</div>
                </div>
                <div className="button-container">
                        <a  className="button" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="" `}  id="tweet-quote" title="Tweet this quote!" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                        <button id="new-quote">New Quote</button>
                </div>
            </div>
        )
    }

}

export default QuoteBox