import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React from "react";	
	
export default class Fade extends React.Component{
    render () {
        return (
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionAppear={true}
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
                transitionAppearTimeout={300}>
                {this.props.children}
            </ReactCSSTransitionGroup>
        )
    }
}