import {FETCH_ALL, FETCH_ITEM, FETCH_BY_SIZE, CREATE, DELETE, FETCH_CART, ADD_ITEM_TO_LIST, REMOVE_ITEM_FROM_LIST} from '../constants/actionTypes'

export default (state = {isLoading: true, items: [], cartItems: []}, action) =>{
    switch(action.type){
        case 'START_LOADING':
            return {...state, isLoading: true};
        case 'END_LOADING':
            return {...state, isLoading: false};
        case FETCH_ALL:
            return{
                ...state,
                items: action.payload.items.data
            };
        case FETCH_BY_SIZE:
            return {...state, items: action.payload.data};
        case FETCH_ITEM:
            return {...state, cartItems: state.cartItems.concat(action.payload)};
        case FETCH_CART:
            return{...state, cartItems: action.payload.data};
        case CREATE:
            return {...state, items: [...state.items, action.data]};
        case DELETE:
            return {...state, items: state.items.filter((item) => item._id !== action.payload)};
        case ADD_ITEM_TO_LIST:
            return {...state, cartItems: state.cartItems.concat(action.payload)};
        case REMOVE_ITEM_FROM_LIST:
            //return{...state, cartItems: state.cartItems.splice(action.id, 1)};
            return{...state, cartItems: state.cartItems.filter(cartItems => cartItems.rank !== action.id)};
        default: 
            return state;
    }
}