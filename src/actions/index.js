import C from '../constants/action-types'



export const quoteAuthor = (state="", action) => {
    switch(action.type){
        case C.CHANGE_QUOTEOBJ:
            return {
                quote: action.quote,
                author: action.author
            }
        default: return state
    }
}

export const color = (state="", action) => {
    switch(action.type){
        case C.CHANGE_COLOR:
            return {
                color: action.color
            }
        default: return state
    }
}

