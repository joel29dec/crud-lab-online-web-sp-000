
import cuid from 'cuid';
export const cuidFn = cuid;
// {type: 'ADD_RESTAURANT', text: "Muzarella"}
export default function manageRestaurants(state={restaurants: [], reviews: []}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                id: cuid(),
                text: action.text,
            }
            return {...state, restaurants: [...state.restaurants, restaurant]}
        case 'DELETE_RESTAURANT':
            return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.payload)}
        case 'ADD_REVIEW':
            
   
            const review = {
                id: cuid(),
                text: action.review.text,
                restaurantId: action.review.id
            }
            return {...state, reviews: [...state.reviews, review]}
        case 'DELETE_REVIEW':
            return {...state, reviews: state.reviews.filter(review => review.id !== action.payload.id)}
        default:
            return state;
    }
}
