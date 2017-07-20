import {combineReducers} from "redux";
import friendsReducer from "./friendsReducer";
import loggedInUserReducer from "./loggedInUserReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
    users: usersReducer,
    loggedInUser: loggedInUserReducer,
    friends: friendsReducer
});
