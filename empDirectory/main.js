angular.module("DirectoryApp", []).controller("EmpController", function ($scope, directoryService) {
	
	// Scope Properties
	$scope.name;
	$scope.street;
	$scope.city;
	$scope.state;
	$scope.zip;
	
	$scope.employeesArray = directoryService.getEmployees();
	
	// Add Employee
	$scope.addEmployee = function(){
		var empName = $scope.name;
		var empAddress = $scope.street + ", " + $scope.city + ", " + $scope.state + " " + $scope.zip;
		
		var tempEmployee = {
			name:empName,
			address:empAddress
		};
		
		directoryService.addEmployee(tempEmployee);
	}
	
	// Delete Employee
	$scope.deleteEmployee = function(pEmployee){
		//$scope.employeesArray.splice($scope.employeesArray.indexOf(pEmployee),1);
		directoryService.removeEmployee(pEmployee);
		
	}
	
	// Get Employees
	$scope.getEmployees = function() {
		return $scope.employeesArray;
	}
	
	// Reset Form
	$scope.resetForm = function (){
		$scope.name = "";
		$scope.street = "";
		$scope.city = "";
		$scope.state = "";
		$scope.zip = "";
	}
	
	
});














































