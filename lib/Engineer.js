const Employee = require('./Employee.js');

class Engineer extends Employee {

	github = (usrName) => {
		this.github = usrName;
	}

	getGithub = () => {
		return this.github;
	}

	getRole = () => {
		return 'Engineer';
	}

}

module.exports = Engineer;