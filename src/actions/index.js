import {CHANGE_COLOR, CHANGE_QUOTEOBJ} from '../constants/action-types'


export const changeColor = (color) => ({
    type: CHANGE_COLOR,
    color
})



export const changeQuoteObj = (quoteObj) => ({
    type: CHANGE_QUOTEOBJ,
    quoteObj
})