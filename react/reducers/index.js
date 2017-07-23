import {combineReducers} from "redux";
import friendsReducer from "./friendsReducer";
import loggedInUserReducer from "./loggedInUserReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
	loggedInUser: loggedInUserReducer,
    users: usersReducer,
    friends: friendsReducer
});
