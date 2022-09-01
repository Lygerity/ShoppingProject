import {
  FETCH_ALL,
  FETCH_ITEM,
  FETCH_BY_SIZE,
  CREATE,
  DELETE,
  FETCH_CART,
  ADD_ITEM_TO_LIST,
  REMOVE_ITEM_FROM_LIST,
  ID_TO_EDIT,
  CLOSE_MODAL,
  UPDATE,
  UPDATE_TEMPORARLY
} from "../constants/actionTypes";

const handleAddSize = (filterBy, filter) => {
  let result = [];
  if (filterBy.includes(filter)) {
    result = filterBy.filter((filterBy) => filterBy !== filter);
  } else {
    result = filterBy.concat(filter);
  }
  return result;
};

export default (
  state = { isLoading: true, items: [], cartItems: [], filterBy: [], editableId: null, itemToEdit: null, showModal: false},
  action
) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "END_LOADING":
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        items: action.payload.items.data,
      };
    case FETCH_BY_SIZE:
      return { ...state, filterBy: handleAddSize(state.filterBy, action.size) };
    case FETCH_ITEM:
      return { ...state, itemToEdit: action.data};
    case FETCH_CART:
      return { ...state, cartItems: action.payload.data };
    case CREATE:
      return { ...state, items: [...state.items, action.data] };
    case DELETE:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case ADD_ITEM_TO_LIST:
      return { ...state, cartItems: state.cartItems.concat(action.payload) };
    case REMOVE_ITEM_FROM_LIST:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItems) => cartItems.rank !== action.id
        ),
      };
      case UPDATE:
        return{
          ...state,
          items: state.items.map((item) => (item._id === action.data._id ? action.data : item)),
          itemToEdit: null
        };
      case UPDATE_TEMPORARLY:
        return{
          ...state,
          itemToEdit: action.payload
        };
    case ID_TO_EDIT:
        return{
            ...state,
            editableId: action.id
        };
      case CLOSE_MODAL:
        return{
          ...state,
          editableId: null,
          showModal: false,
        }
    default:
      return state;
  }
};
