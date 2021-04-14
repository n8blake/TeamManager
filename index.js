// Inquirer for user input, fs for file system output
//const inquirer = require('inquirer');
//const fs = require('fs');

const UserInput = require('./lib/UserInput.js');
const HtmlGenerator = require('./lib/HtmlGenerator.js');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');

// This should contain an array of Employee objects.
const employees = [];

const init = async (ask) => {
	let title;
	if(ask){
		const userInput = new UserInput();
		title = await userInput.askForTitle();
		let addingEmployees = await userInput.askToAddEmployee();
		while(addingEmployees){
			const employeeType = await userInput.askTypeOfEmployee();
			const employee = await userInput.askEmployeeDataQuestions(employeeType);
			employees.push(employee);
			addingEmployees = await userInput.askToAddEmployee();
		}
	} else {
		title = "My Awesome Team";
		for(let i = 0; i < 10; i++){
			let employee;
			if(i < 2){
				employee = new Manager();
				employee.officeNumber = '80186753' + i;
			} else if(i < 8) {
				employee = new Engineer();
				employee.github = 'GitHubUsr_' + i;
			} else {
				employee = new Intern();
				employee.school = "School " + i;
			}
			employee.id = i * 1000;
			employee.name = "Employee " + i;
			employee.email = 'employee-' + i + '@email.com';
			employees.push(employee);
		}
	}
	


	// generate html page from users
	const generator = new HtmlGenerator();
	const homePage = generator.createHomePage(title, employees);
	generator.saveHtmlDocument('home', homePage);
}
// Set this to false to generate a test page of 10 placeholder team members 
init(true);