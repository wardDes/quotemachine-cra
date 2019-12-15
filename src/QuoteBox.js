import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import './qbstyles.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import {changeColor, changeQuoteObj} from './actions/index'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faQuoteLeft)



export class QuoteBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            quotes: [],
            quoteObj: {},
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
        this.quoteObjChange = this.quoteObjChange.bind(this)
        this.colorChange = this.colorChange.bind(this)
        this.setBgBd = this.setBgBd.bind(this)

    }

    handleClick = () => {
        this.quoteObjChange()
        this.colorChange();
    }

    quoteObjChange = (state) => {
        const quoteObj = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]
        this.props.newQuoteObj(quoteObj)
    }
    

    colorChange = (state)=> {
        const color = this.state.colorBackground[Math.floor(Math.random() * this.state.colorBackground.length)]
        this.props.newColor(color)
    }


    setBgBd = (color) =>{
        let bodyBg = document.querySelector('body')
        bodyBg.style.background = color;
        bodyBg.style.borderColor = color;
    }


    componentDidMount() {
        const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
        fetch(url)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    quotes: response.quotes,
                })
            })
            .catch(err => console.log(err))
            .finally(this.handleClick)
    }

    static propTypes = {
        quoteObj: PropTypes.object.isRequired,
        color: PropTypes.string.isRequired
    }

    render(){
        const quoteObj= this.props.quoteObj
        const { quote, author } = quoteObj
        const color = this.props.color
        if(quote !== null){
            this.setBgBd(color)
        }
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

const mapStateToProps = (state) => {
    return {
         quoteObj: state.quoteObj,
         color: state.color
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newQuoteObj: (quoteObj) => {
            dispatch(changeQuoteObj(quoteObj))
        },
        newColor: (color) => {
            dispatch(changeColor(color))
        }
    }
}

const QuoteMachine = connect(
    mapStateToProps,
    mapDispatchToProps
)(QuoteBox)


export default QuoteMachine