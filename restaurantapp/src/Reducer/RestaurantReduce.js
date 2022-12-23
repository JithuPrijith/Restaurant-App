import { failure, success } from '../Constants/restaurantConstants'

export const restaurantListReducer = (state = { restaurantList: [] }, action) => {
    switch (action.type) {
        case success:
            return {
                restaurantList: action.payload
            }
        case failure:
            return {
                restaurantList: action.error
            }

        default:
            return state
    }
}