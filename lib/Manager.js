const Employee = require('./Employee.js');

class Manager extends Employee {

	officeNumber = (num) => {
		this.officeNumber = num;
	}

	getOfficeNumber = () => {
		return this.officeNumber;
	}

	getRole = () => {
		return 'Manager';
	}

}

module.exports = Manager;