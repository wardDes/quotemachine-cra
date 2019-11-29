import React, { Component } from 'react'
import './qbstyles.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faQuoteLeft)



export class QuoteBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            quotes: [],
            quoteObj: {},
            quote: "",
            author: "",
            color: "",
            colorBackground: [
                "#23f83b",
                "#84c828",
                "#9f215a",
                "#0c6583",
                "#4238e5",
                "#ff126e",
                "#ce790b",
                "#9010e5",
                "#f36d69",
                "#ba2654",
                "#4a0d70",
                "#6e6672",
                "#3790f1",
                "#cea92f"
            ]
        }

        this.handleClick = this.handleClick.bind(this)
        this.colorChange = this.colorChange.bind(this)
        this.quoteAndAuthor = this.quoteAndAuthor.bind(this)
        this.setBgBd = this.setBgBd.bind(this)

    }

    handleClick = () => {
        this.colorChange();
        this.quoteAndAuthor();
    }


    colorChange = (state)=> {
        const color = this.state.colorBackground[Math.floor((Math.random() * ((this.state.colorBackground).length)))]
        this.setState({...state, color: color})
        
    }

    quoteAndAuthor = (state) => {
        this.setState({quote: this.state.quoteObj.quote, author: this.state.quoteObj.author})
        this.setState({quoteObj: this.state.quotes[0][Math.floor(Math.random() * this.state.quotes[0].length)]});
    }

    setBgBd = (state) =>{
        let bodyBg = document.querySelector('body')
        bodyBg.style.background = this.state.color;
        bodyBg.style.borderColor = this.state.color;
    }


    buildQuotes = (data) =>{
        this.setState({quotes: [].concat(Object.values(data))});
        this.setState({quoteObj: this.state.quotes[0][Math.floor(Math.random() * this.state.quotes[0].length)]});
        this.setState({quote: this.state.quoteObj.quote, author: this.state.quoteObj.author})
    }




    componentDidMount() {
        console.log('didmount');
        const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
        fetch(url)
            .then(response => response.json())
            .then(this.buildQuotes)
            .then(this.colorChange)
            .then(this.quoteAndAuthor)
            .catch(err => console.log(err))
    }


    render(){
        const { quote, author, color} = this.state
        this.setBgBd()
        return (
            <div id="quote-box">
                <div className="text-container">
                    <div id="text" style={{color: color}}><FontAwesomeIcon icon={['fas', 'quote-left']}  size="2x"/><span>  {quote}</span></div>
                </div>
                <div className="author-container">
                    <div id="author" style={{color: color}}>- {author}</div>
                </div>
                <div className="button-container">
                        <div>
                            <a  className="button" style={{color: '#fff', backgroundColor: color}} href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote}" ${author}`}  id="tweet-quote" title="Tweet this quote!" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                        </div>
                        <button id="new-quote" style={{backgroundColor: color}} onClick={this.handleClick}>New Quote</button>
                </div>
            </div>
        )
    }
}



export default QuoteBox