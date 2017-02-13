angular.module('check_out').controller('AddProfileCtrl',['$scope','CommonService',function ($scope,commonService) {
	var ref=$scope;
	ref.users = commonService.getAllUsers();
	ref.user = {};
	ref.user.interests =["Cricket","Tv"];
	ref.image= "";
	ref.addImageIcon = true;
	ref.submitProfile = function(){
		commonService.addUser(ref.user, function(err, user){
			ref.user = {};
			if(err){
				alert("ERROR: User not added!");
				return;
			}
			ref.users = commonService.getAllUsers();
		});
	};
	ref.activate = function(){
		$("#imgSelect").trigger("click");
		ref.addImageIcon = false;
	};

	ref.preview = function(event){
		/*var out = document.getElementById('image');*/
		ref.image = URL.createObjectURL(event.target.files[0]);
		ref.user.picUrl = ref.image;
		ref.$apply();
	};
}])