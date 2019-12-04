import { CHANGE_AUTHOR, CHANGE_QUOTE, CHANGE_COLOR} from '../constants/action-types'



export const quote = (state=null, action) => {
    switch(action.type){
        case CHANGE_QUOTE:
            return action.quote 
        default: return state
    }
}

export const author = (state=null, action) => {
    switch(action.type){
        case CHANGE_AUTHOR:
            return action.author
        default: return state
    }
}

export const color = (state=null, action) => {
    switch(action.type){
        case CHANGE_COLOR:
            return action.color
        default: return state
    }
}

