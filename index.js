// Inquirer for user input, fs for file system output
//const inquirer = require('inquirer');
//const fs = require('fs');

const UserInput = require('./lib/UserInput.js');
const HtmlGenerator = require('../lib/HtmlGenerator.js');

// This should contain an array of Employee objects.
const EMPLOYEES = [];

const init = async () => {
	const userInput = new UserInput();
	const title = await userInput.askForTitle();
	
	let addingEmployees = await userInput.askToAddEmployee();
	while(addingEmployees){
		const employeeType = await userInput.askTypeOfEmployee();
		const employee = await userInput.askEmployeeDataQuestions(employeeType);
		EMPLOYEES.push(employee);
		addingEmployees = await userInput.askToAddEmployee();
	}

	// generate html page from users
	console.log(EMPLOYEES);
	const generator = new HtmlGenerator();
	generator.saveHtmlDocument('home', generator.createHomePage(EMPLOYEES));
}

init();