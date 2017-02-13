mod.controller('ViewProfile',['$scope','CommonService','$routeParams',function($scope,commonService,$routeParams){
	var ref=$scope;
	ref.email=$routeParams.email;
	ref.user = commonService.getSelectedUser(ref.email);
	
}]);