import { combineReducers } from "redux";
import { 
    ADD_FRIEND, REMOVE_FRIEND, 
    GET_FRIENDS_LIST_REQUEST, 
    GET_FRIENDS_LIST_RESPONSE } from "../actions";

function friendsListReducer(state = [], action){
    switch (action.type) {
        case ADD_FRIEND:
            return [...state, action.user];
        case REMOVE_FRIEND:
            return state.filter(friend => friend.id != action.userId);
        case GET_FRIENDS_LIST_RESPONSE:
            return [...action.friends];
    }

    return state;
}

function isLoadingReducer(state = false, action){

    switch (action.type){
        case GET_FRIENDS_LIST_RESPONSE:
            return false;
        case GET_FRIENDS_LIST_REQUEST:
            return true;
    }

    return state;
}
export default combineReducers({
    friendsList: friendsListReducer,
    isLoading: isLoadingReducer
});
