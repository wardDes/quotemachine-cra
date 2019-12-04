import {CHANGE_COLOR, CHANGE_QUOTE, CHANGE_AUTHOR} from '../constants/action-types'


export const changeColor = (color) => ({
    type: CHANGE_COLOR,
    color
})

export const changeQuote = (quote) => ({
    type: CHANGE_QUOTE,
    quote
})

export const changeAuthor = (author) => ({
    type: CHANGE_AUTHOR,
    author
})