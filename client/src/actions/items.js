import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL,
  FETCH_BY_SIZE,
  CREATE,
  DELETE,
  ADD_ITEM_TO_LIST,
  REMOVE_ITEM_FROM_LIST,
  ID_TO_EDIT,
  FETCH_ITEM,
  CLOSE_MODAL,
  UPDATE,
  UPDATE_TEMPORARLY
} from "../constants/actionTypes";
import * as api from "../api/index";

export const getItemsList = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchItems();

    dispatch({ type: FETCH_ALL, payload: { items: data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const addItemToList = (payload) => (dispatch) => {
  dispatch({ type: ADD_ITEM_TO_LIST, payload });
};

export const removeItemFromList = (id) => (dispatch) => {
  dispatch({ type: REMOVE_ITEM_FROM_LIST, id });
};

export const postItem = (payload) => async (dispatch) => {
  try {
    const { data } = await api.postItem(payload);
    dispatch({ type: CREATE, data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteItem = (id) => async (dispatch) => {
  await api.deleteItem(id);
  dispatch({ type: DELETE, payload: id });
};

export const filterBySize = (size) => (dispatch) => {
  dispatch({ type: FETCH_BY_SIZE, size });
};

export const idItemToEdit = (id) => (dispatch) => {
  dispatch({ type: ID_TO_EDIT, id });
};

export const getItem = (id) => async (dispatch) =>{
    const res = await api.fetchItem(id);
    dispatch({type: FETCH_ITEM, data: res.data.data});
}

export const closeModal = () => (dispatch) =>{
    dispatch({type: CLOSE_MODAL});
}

export const updateItemTemporarly = (payload) => (dispatch) =>{
  dispatch({type: UPDATE_TEMPORARLY, payload});
}

export const updateItem = (payload) => async (dispatch) => {
  try {
    const { data } = await api.updateItem(payload);
    dispatch({ type: UPDATE, data });
  } catch (error) {
    console.log(error);
  }
};
