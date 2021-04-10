//function Employee() {}

class Employee {};

Employee.prototype.name = function(str) {
	this.name = str;
};

Employee.prototype.id = function(num) {
	this.id = num;
}

Employee.prototype.email = function(str) {
	this.email = str;
}

Employee.prototype.getName = function() {
	return this.name;
}

Employee.prototype.getId = function() {
	return this.id;
}

Employee.prototype.getEmail = function() {
	return this.email;
}

Employee.prototype.getRole = function() {
	return 'Employee';
}

module.exports = Employee;