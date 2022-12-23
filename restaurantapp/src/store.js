import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { restaurantListReducer } from './Reducer/RestaurantReduce'

const reducer = combineReducers({
    restaurantListReducer
})
const middleware = [thunk]
const store = createStore(reducer, applyMiddleware(...middleware))

export default store;