import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { getUsersList } from "../../../actions/creators";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import "../../../animations.scss";
import "./users-list.scss";

class UsersList extends React.Component {

    constructor(props){
        super(props);

        this.props.getUsersList();
    }

    renderUser(user, i){
        return <li key={i}>
                    <NavLink exact activeStyle={ { color: "yellow" } } activeClassName="active" to={`/users/${user.id}`}>{ user.name }</NavLink>
                </li>
    }

    render() {
        if(this.props.isLoading)
            return <nav className="users-list">Loading...</nav>;

        return (
            <ReactCSSTransitionGroup
                transitionName="users-list-wrapper"
                transitionEnter={false}
                transitionLeave={false}
                transitionAppear={true}
                transitionAppearTimeout={500}>
                <div className="users-list-wrapper">
                    <nav className="users-list">
                        <h3>Users List</h3>
                        <ul>
                            { this.props.users.map( this.renderUser.bind(this) ) }
                        </ul>
                    </nav>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

function mapStateToProps(state){
    return {
        users: state.users.usersList,
        isLoading: state.users.isLoading
    }
}

function mapDispatchToProps(dispatch){
    return {
        getUsersList: () => dispatch( getUsersList() )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersList));
