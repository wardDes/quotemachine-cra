import { CHANGE_COLOR, CHANGE_QUOTE, CHANGE_AUTHOR} from '../constants/action-types'

/*
Problem making reducers work when starting functions
with 'state' equal to type of object I want the reducer to return.
Tried to use "", empty string but code refused to compile
*/
export const quote = (state = null, action) => {
    switch(action.type){
        case CHANGE_QUOTE:
            return action.quote
        default: return state
    }
}

export const author = (state = null, action) => {
    switch(action.type){
        case CHANGE_AUTHOR:
            return action.author
        default: return state
    }
}


export const color = (state = null, action) => {
    switch(action.type){
        case CHANGE_COLOR:
            return action.color
        default: return state
    }
}

