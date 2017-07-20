let UserService = require('./UserService');

class FriendsService {
	setFriends (friends) {
		localStrorage.setItem('user_friends', JSON.stringify(friends));
	}

	getFriends () {
		let friends = localStrorage.getItem('user_friends');

		if (friends) {
			return JSON.parse(friends);
		} else {
			friends = [];
		}

		UsersService.getAllUsers()
			.then( (users) => {
				let friendsList = users.filter( (user) => {
					return friends.find( (element) => {
						element == user.id;
					});
				})
			});
	}
}

module.exports = new FriendsService();