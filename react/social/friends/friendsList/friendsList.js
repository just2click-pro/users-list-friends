import React from "react";
import { connect } from "react-redux";
import { getFriendsList } from "../../../actions/creators";
import FriendBox from './friend-box';

import "./friends-list.scss";

class FriendsList extends React.Component {

    constructor (props) {
        super(props)
        props.getFriendsList();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.friends.length !== this.props.friends.length) {
            this.props.getFriendsList();   
        }
    }

    renderFriend(user, i){
        return <div key={i} className="friend-box">
                    <FriendBox user={ user } />
                </div>
    }

    render() {
        if(this.props.isLoading)
            return <nav className="friends-list">Loading...</nav>;

        return (<div className="friends-list-container">
                    <h3>Friends List</h3>
                    <section className="friends-list">
                        { this.props.friends.map( this.renderFriend.bind(this) ) }
                    </section>
                </div>)
    }
}

function mapStateToProps(state) {
    return {
        friends: state.friends.friendsList,
        isLoading: state.friends.isLoading
    }
}

function mapDispatchToProps(dispatch){
    return {
        getFriendsList: () => dispatch( getFriendsList() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
