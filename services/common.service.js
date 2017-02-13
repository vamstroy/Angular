mod.service("CommonService",[function() {
	var userDetails = [];
	// userDetails = {
		// email :
	// 	name :
	// 	interests : []
	// 	picUrl : 
	// }
	
	this.addUser = function(userObj,cb) {
		if(userObj){
			var email = userObj.email;
			for(var i=0; i<userDetails.length; i++){
				if(userDetails[i].email == userObj.email){
					cb(true);
					return;
				}
			}
			userDetails.push(userObj);
			cb(false, userDetails[userDetails.length-1]);
			return;
		}
		cb(false);
	}
	this.getAllUsers = function() {
		return userDetails;
	}
	this.getSelectedUser = function(email) {
		for(var i=0; i<userDetails.length; i++){
			if(userDetails[i].email == email){
				return userDetails[i];
			}
		}
		return false;
	}
}])