// JavaScript Document
angular.module("DirectoryApp").service("directoryService", function(){
	// Employee storage array
	var employeeList = [
		{name:"Bob Jenkins", address:"12345 Street, New York, New York 55555"},
		{name:"Minnie Driver", address:"54321 Teerts, Chicago, Illinois 55555"},
		{name:"Jim Nehoff", address:"4192 Jolain Drive, Cincinnati, Ohio 55555"},
		{name:"John Kurz", address:"2364 Backbay Drive, Medina, California 55555"}
	];
	
	this.getEmployees = function(){
		return employeeList;	
	}
	
	this.addEmployee = function(pEmployee){
		employeeList.push(pEmployee);
		
	}
	
	this.removeEmployee = function(pEmployee){
		employeeList.splice(employeeList.indexOf(pEmployee), 1);
	}
	
	
	
	
	
	
	
	
	
});
































