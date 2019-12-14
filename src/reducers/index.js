import { CHANGE_COLOR, CHANGE_QUOTEOBJ} from '../constants/action-types'




export const color = (state=null, action) => {
    switch(action.type){
        case CHANGE_COLOR:
            return action.color
        default: return state
    }
}

export const quoteObj = (state=null, action) => {
    switch(action.type){
        case CHANGE_QUOTEOBJ:
            return action.quoteObj
        default: return state
    }
}

