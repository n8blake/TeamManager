const Employee = require('./Employee.js');

class Intern extends Employee {

	school = (school) => {
		this.school = school;
	}

	getSchool = () => {
		return this.school;
	}

	getRole = () => {
		return 'Intern';
	}

}

module.exports = Intern;