import { DATA_LOADED } from  '../constants/index.js'

export function getData(payload){
    return { type: DATA_LOADED, payload}
}