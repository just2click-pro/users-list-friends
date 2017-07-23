import {createStore, applyMiddleware} from "redux";
import appReducers from "./reducers";
import LoginService from "./services/LoginService";

import { composeWithDevTools } from 'redux-devtools-extension';


import thunk from "redux-thunk";

const state = {
    loggedInUser: LoginService.get(),
    users: {
        isLoading: false,
        usersList: [],
        selectedUser: {
            details: {},
            posts: []
        }
    },
    friends: {
        friendsList: [],
        isLoading: false,

    }
};

let middlewares = applyMiddleware(thunk);

export default createStore(
    appReducers,
    state,
    composeWithDevTools(middlewares)
);
