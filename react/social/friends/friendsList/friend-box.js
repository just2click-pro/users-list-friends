import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import FriendsService from '../../../services/FriendsService';
import UserService from '../../../services/UserService';
import { removeFriend } from "../../../actions/creators";

class FriendBox extends React.Component {
	removeFriend (userId) {
		FriendsService.removeFriend(userId);
		this.props.removeFriend(userId);
	}

	render () {
		let imgLink = UserService.getUserAvatar(this.props.user.name);
        return (<article>
        			<div className='x-button'>
        				<a href="#"
        				onClick={ (e) => this.removeFriend(this.props.user.id) }> x </a> 
        			</div>
        			<section className="user-header">
	        			<div className="user-photo">
	        				<img src={ imgLink } />
	        			</div>
                    	<h3><NavLink exact to={`/users/${this.props.user.id}`}>{ this.props.user.name }</NavLink></h3>
                    </section>
                    <dl>
                        <dt>Phone</dt>
                        <dd>{ this.props.user.phone }</dd>
                    </dl>
                    <dl>
                        <dt>Email</dt>
                        <dd>{ this.props.user.email }</dd>
                    </dl>                    
                </article>);
	}
}

function mapDispatchToProps(dispatch){
    return {
        removeFriend: (id) => dispatch( removeFriend(id) )
    }
}

export default connect(null, mapDispatchToProps)(FriendBox);