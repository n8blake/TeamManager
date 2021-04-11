const inquirer = require('inquirer');
const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');
const Intern = require('../lib/Intern.js');
const Engineer = require('../lib/Engineer.js');

class UserInput {

	constructor(){
		this.employees = [];
	}

	// return a list of employees
	getEmployees = () => {
		return this.employees;
	}

	addEmployee = (employee) => {
		this.employees.push(employee);
	}

	askToAddEmployee = async () => {
		const setEmployeeQuestion1 = {
			type: 'input',
			message: 'Would you like to add an employee:',
			name: 'addEmployee',
		};
		return inquirer.prompt(setEmployeeQuestion1).then(async (data) => {
			//this.addEmployee = data.addEmployee;
			//console.log(data.title);
			return data.addEmployee;
		});
	}

	askTypeOfEmployee = async () => {
		const employeeTypeQuestion = {
			type: 'list',
			message: 'Which team member would you like to add?',
			name: 'employeeType',
			choices: ['manager', 
				'engineer', 
				'intern', 
			],
		};
		return inquirer.prompt(employeeTypeQuestion).then(async (data) => {
			//this.employeeType = data.employeeType;
			//console.log(data.title);
			return data.employeeType;
		});
	}

	askEmployeeDataQuestions = async (type) => {
		const employeeDataQuestions = [
			{
				type: 'input',
				message: "What is the employee's name?",
				name: 'name',
			},
			{
				type: 'input',
				message: "What is the employee's id?",
				name: 'id',
			},
			{
				type: 'input',
				message: "What is the employee's email address?",
				name: 'email',
			}
		];
		switch(type){
				case 'manager':
					employeeDataQuestions.push({
						type: 'input',
						message: "What is the manager's office number?",
						name: 'officeNumber',
					});
					break;
				case 'engineer':
					employeeDataQuestions.push({
						type: 'input',
						message: "What is the engineer's GitHub user name?",
						name: 'github',
					});
					break;
				case 'intern':
					employeeDataQuestions.push({
						type: 'input',
						message: "What is the intern's school?",
						name: 'school',
					});
					break;
				default:
					break;
			}

		return inquirer.prompt(employeeDataQuestions).then(async (data) => {
			//this.employeeType = data.employeeType;
			//console.log(data.title);
			let employee;
			switch(type){
				case 'manager':
					employee = new Manager();
					employee.officeNumber = data.officeNumber;
					break;
				case 'engineer':
					employee = new Engineer();
					employee.github = data.github;
					break;
				case 'intern':
					employee = new Intern();
					employee.school = data.school;
					break;
				default:
					employee = new Employee();
					break;
			}
			employee.name = data.name;
			employee.id = data.id;
			employee.email = data.email;
			return employee;
		});
	}

	title = (title) => {
		this.title = title;
	}

	getTitle = () => {
		return this.title;
	}

	setTitle = async () => {
		const titleQuestion = {
			type: 'confirm',
			message: 'Team title:',
			name: 'title',
		};
		inquirer.prompt(titleQuestion).then(async (data) => {
			this.title = data.title;
			//console.log(data.title);
			return data.title;
		});
	}



};

	// const employees = [];

	// const teamMemberTypeQuestion = {
	// 	type: 'list',
	// 	message: 'Which team member would you like to add?',
	// 	name: 'memberType',
	// 	choices: ['manager', 
	// 		'engineer', 
	// 		'intern', 
	// 		],
	// };

	// const employeeQuestions = [
	// 	{
	// 		type: 'input',
	// 		name: 'name',
	// 		message: 'Employee name:',
	// 	},
	// 	{
	// 		type: 'input',
	// 		name: 'id',
	// 		message: 'Employee id:',
	// 	},
	// 	{
	// 		type: 'input',
	// 		name: 'email',
	// 		message: 'Employee email:',
	// 	},
	// ];

	// const continueQuestion = {
	// 	type: 'confirm',
	// 	message: 'Enter an employee?',
	// 	name: 'enterEmployee',
	// };

// UserInput.prototype.getTitle = function(){
// 	};
	

module.exports = UserInput;