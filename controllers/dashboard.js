angular.module('check_out').controller('DashBoard',['$scope','CommonService','$location',function($scope,commonService,$location){
	var ref=$scope;
	ref.userDetails=commonService.getAllUsers();
	ref.viewUserDetails = function(email){
		$location.path('/viewprofile').search({email: email});
	};
	ref.searchbox="";
	ref.availInterests=[];
	ref.getResult = function(){
		var index1=0;
		while(index1 < ref.userDetails.length){
			for(index=0; index < ref.userDetails[index1].interests.length;index++){
				if(ref.userDetails[index1].interests[index].toLowerCase() == ref.searchbox.toLowerCase()){
					ref.availInterests.push(commonService.getSelectedUser(ref.userDetails[index1].email));
				}
				else{
					ref.availInterests=[];
				}
				/*ref.availInterests.push(ref.userDetails[index1].interests[index]);*/
			}
		index1++;
		}
	}
	

}])