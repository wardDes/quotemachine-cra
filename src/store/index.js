import { createStore, combineReducers } from 'redux'
import {quote, author, color } from '../reducers/index.js'


const store = createStore(combineReducers({quote, author, color}),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store