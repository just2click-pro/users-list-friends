import React from "react";
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {logOut} from "../../actions/creators";
import LoginService from "../../services/LoginService";
import Fade from "../../Fade";

import "../../material-design-lite.scss";
import "./navigation.scss";

class Navigation extends React.Component {

    logout(){
        LoginService.set(null);
        this.props.logout();
    }

    render(){
        return (
            <Fade>
                <header className="navigation mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">Title  </span>
                        <span>Hello, {this.props.user.name}</span>
                        <div className="mdl-layout-spacer"></div>
                        <nav className="mdl-navigation">
                            <NavLink exact to="/" activeClassName="active" className="mdl-navigation__link">About</NavLink>
                            <NavLink to="/users" activeClassName="active" className="mdl-navigation__link">Users</NavLink>
                            <NavLink to="/friends" activeClassName="active" className="mdl-navigation__link">Friends</NavLink>
                        </nav>
                        <button className="btn-log" onClick={ ()=> this.logout() }>Log out</button>
                    </div>
                </header>
            </Fade>
        );
    }
}

function mapStateToProps(state){
    return {
        user: state.loggedInUser
    }
}

function mapsDispatchToProps(dispatch){
    return {
        logout: ()=> dispatch( logOut() )
    }
}

let connected = connect(mapStateToProps, mapsDispatchToProps)(Navigation);

export default withRouter(connected);
