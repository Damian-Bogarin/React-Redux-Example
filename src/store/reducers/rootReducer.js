import { combineReducers } from 'redux'
import { filterReducer } from './filterReducer'
import { todosReducer } from './todosReducer'
import { userReducer } from './userReducer'


export const rootReducer = combineReducers({
    
    //state name : reducer
    todosState: todosReducer,
    filterState: filterReducer,
    // ASYNC EXAMPLE LOGIN USER
    userState: userReducer

    // ... add more states and reducers to include them in the store
})
