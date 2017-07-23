import React from "react";
import Social from "./social/Social";
import Login from "./login/Login";
import {Route} from "react-router";
import AuthRoute from "./AuthRoute";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class App extends React.Component{
    render(){
        return (
			<ReactCSSTransitionGroup
        		transitionName="users-list-app"
        		transitionEnter={false}
        		transitionLeave={false}
        		transitionAppear={true}
        		transitionAppearTimeout={500}>        	
            	<div className="users-list-app">
                	<AuthRoute path="" component={Social}/>
                	<Route path="/login" component={Login}/>
            	</div>
            </ReactCSSTransitionGroup>
        )
    }
}
