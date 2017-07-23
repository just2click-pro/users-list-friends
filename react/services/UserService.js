let $ = require("jquery");

class UserService{

    constructor() {
        this.url = "https://jsonplaceholder.typicode.com/users/";
        this.avatarUrl = "https://api.adorable.io/avatars/100/%%@adorable.png"
    }

    getAllUsers(){
        return $.get(this.url);
    }

    getUser(id){
        return $.get(this.url+id);
    }

    getUserAvatar (name) {
    	if (name) {
    		let firstName = name.split(' ')[0];
    		return this.avatarUrl.replace('%%', firstName);
    	}
    	return null;
    }

}

module.exports = new UserService();
