import React from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router";
import {getFriendsList} from "../../../actions/creators";

import "./friends-list.scss";

class FriendsList extends React.Component {

    constructor(props){
        super(props);

        this.props.getFriendsList();
    }

    renderFriend(friend, i){
        return <li key={i}>
                    <NavLink exact activeStyle={ { color: "yellow" } } activeClassName="active" to={`/users/${friend.id}`}>{ user.friend }</NavLink>
                </li>
    }

    render(){
        if(this.props.isLoading)
            return <nav className="friends-list">Loading...</nav>;

        return (<nav className="friends-list">
                    <h3>Friends List</h3>
                    <ul>
                        { this.props.friends.map( this.renderFriend.bind(this) ) }
                    </ul>
                </nav>)
    }
}

function mapStateToProps(state){
    return {
        friends: state.friendsList,
        isLoading: state.friends.isLoading
    }
}

function mapDispatchToProps(dispatch){
    return {
        getFriendsList: () => dispatch( getFriendsList() )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendsList));
