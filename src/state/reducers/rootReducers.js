import { combineReducers } from 'redux'
import authentication from './authentication'
import products from './products'
import search from './search'

const rootReducer = combineReducers({
    authentication,
    products,
    search
})

export default rootReducer