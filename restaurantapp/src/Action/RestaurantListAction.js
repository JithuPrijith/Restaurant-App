import axios from 'axios'
import { failure, success } from '../Constants/restaurantConstants'


export const restaurantListAction = () => async (callBack) => {
    try {
        const res = await axios.get('/restaurants.json')
        callBack({
            type: success,
            payload: res.data.restaurants
        })
    } catch (error) {
        callBack({
            type: failure,
            error: error
        })
    }

}