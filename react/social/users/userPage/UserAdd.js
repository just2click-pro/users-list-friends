import React from "react";
import { connect } from "react-redux";
import FriendsService from '../../../services/FriendsService';
import { addFriend } from "../../../actions/creators"

class AddUser extends React.Component {

    addFriend (userId) {
        FriendsService.addFriend(userId);
        this.props.addFriend(FriendsService.getFriendById(userId));
    }

    render () {
        let isAlreadyAFriend = FriendsService.isAlreadyAFriend(this.props.user);

    	if (this.props.isLoading || isAlreadyAFriend) {
    		return (<span></span>);
    	}
    	return (
    		<div className='add-button'>
    			<a href='#' 
    				onClick={ (e) => this.addFriend(this.props.user.id) }>Add { this.props.user.name } </a>
    		</div>
    	);
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addFriend: (user) => dispatch( addFriend(user) )
    }
}

function mapStateToProps(state) {
	return {
		user: state.users.selectedUser.details,
		isLoading: state.users.selectedUser.isLoading
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)

