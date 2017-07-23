import UserService from './UserService';

class FriendsService {
	constructor () {
		this.users = [];
		this.getUsers();
	}

	getUsers () {
		UserService.getAllUsers()
			.then( (users) => {
				this.users = users;
				return users;
			});
	}

	isAlreadyAFriend (user) {
		let friends = this.loadFriends();
		return (friends.includes(user.id));
	}

	loadFriends () {
		let friends = localStorage.getItem('user_friends');

		if (friends) {
			return JSON.parse(friends);
		} else {
			return null;
		}		
	}

	addFriend (id) {
		let friends = this.loadFriends();
		if (friends == null) { friends = []; }
		if (!friends.includes(id)) {
			friends.push(id);
		}
		this.saveFriends(friends);
	}

	removeFriend (id) {
		let friends = this.loadFriends();
		this.saveFriends(friends.filter((friend) => {
			return (friend !== id);
		}));
	}

	saveFriends (friends) {
		localStorage.setItem('user_friends', JSON.stringify(friends));
	}

	getFriends () {
		let friends = this.loadFriends();
		if (friends == null) { friends = []; }

		return UserService.getAllUsers()
			.then( (users) => {
				this.users = users;
				return users;
			})
			.then ( (users) => {
				let friendsList = users.filter( (user) => {
					if (friends.includes(user.id)) { return user };
				});

				return friendsList;
			})
	}

	getFriendById (id) {
		let user = this.users.find( (user) => {
			return (user.id === id);
		});
		return user;
	}
}

export default new FriendsService();