import React from "react";
import FriendsList from "./friendsList/FriendsList";
import {connect} from "react-redux";
import {Route} from "react-router";

import '../../main.scss';

export default class Friends extends React.Component {

    render(){
        return (<div>
                    <FriendsList/>
                </div>)
    }
}
