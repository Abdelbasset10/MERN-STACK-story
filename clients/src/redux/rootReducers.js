import {combineReducers} from 'redux'
import postReducer from './posts/postReducer'

const rootReducers = combineReducers({
    posts:postReducer
})

export default rootReducers