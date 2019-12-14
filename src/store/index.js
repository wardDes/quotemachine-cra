import { createStore, combineReducers } from 'redux'
import { color, quoteObj } from '../reducers/index.js'


const store = createStore(combineReducers({ color, quoteObj}),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store