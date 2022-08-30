import {START_LOADING, END_LOADING, FETCH_ALL, FETCH_BY_SIZE, CREATE, DELETE, ADD_ITEM_TO_LIST, REMOVE_ITEM_FROM_LIST} from '../constants/actionTypes'
import * as api from '../api/index';

export const getItemsList = () => async(dispatch) =>{
    try{
        dispatch({type: START_LOADING});
        
        const{ data: data } = await api.fetchItems();
        
        dispatch({type: FETCH_ALL, payload: {items:data}})
        dispatch({type: END_LOADING});

    }catch(error){
        console.log(error);
    }
};


export const addItemToList = (payload) => (dispatch) =>{
    dispatch({type: ADD_ITEM_TO_LIST, payload});

}

export const removeItemFromList = (id) => (dispatch) =>{
    dispatch({type: REMOVE_ITEM_FROM_LIST, id});
}

export const postItem = (payload) => async(dispatch) =>{
    try{
        const { data: data } = await api.postItem(payload)
        dispatch({type: CREATE, data});
    }catch(error){
        console.log(error);
    }
}

export const deleteItem = (id) => async(dispatch) =>{
    await api.deleteItem(id);
    dispatch({type: DELETE, payload: id});
}
