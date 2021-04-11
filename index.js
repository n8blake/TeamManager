// Inquirer for user input, fs for file system output
//const inquirer = require('inquirer');
//const fs = require('fs');

const getUserInput = require('./src/getUserInput.js');

const employees = getUserInput();

// This should contain an array of Employee objects.
const EMPLOYEES = [];

// this needs to be the recursive part
const askEmployeeQuestions = () => {
	// return inquirer.prompt(employeeQuestions).then((data) => {
	// 	return data;
	// });
}