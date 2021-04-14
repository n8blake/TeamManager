const UserInput = require('../lib/UserInput.js');
const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');
const inquirer = require('inquirer');

jest.mock('inquirer');

describe('UserInput', () => {

	describe('setEmployees', () => {
		// would you like to add an Employee? (Y/n) 
				// if yes
				// what kind of employee would you like to add?
					// list employee types
						// prompt for all employee questions
						// prompt for specific employee type question
					// give option to cancel
				// if no, exit
		it('should prompt the user to add an employee', async () => {
			const userInput = new UserInput();
			const addEmployeeResponseData = {addEmployee: true};
			inquirer.prompt.mockResolvedValue(addEmployeeResponseData);
			let addEmployee = await userInput.askToAddEmployee();
			expect(addEmployee).toBe(addEmployeeResponseData.addEmployee);
		});

		it('should prompt the user for a type of employee to add', async () => {
			const userInput = new UserInput();
			const employeeTypeResponseData = {employeeType: 'manager'};
			inquirer.prompt.mockResolvedValue(employeeTypeResponseData);
			let employeeType = await userInput.askTypeOfEmployee();
			//console.log(employeeType);
			expect(employeeType).toBe(employeeTypeResponseData.employeeType);
		});

		it('should ask the basic employee questions and the questions specific to the employee type and return an employee object of that type', async () => {
			const userInput = new UserInput();
			const responseData = {
				name:'Samantha Jones',
				id: 1004568,
				email:'samantha@team-awesome.com',
				officeNumber: 8008675309
			};
			const employeeType = 'manager';
			inquirer.prompt.mockResolvedValue(responseData);
			let employee = await userInput.askEmployeeDataQuestions(employeeType);
			expect(employee instanceof Manager).toBe(true);
			expect(employee.getId()).toEqual(responseData.id);
		});
	});

	describe('setTitle', () => {
		it('should prompt the user for the title', async () => {
			const userInput = new UserInput();
			const titleData = {title: 'My Awesome Team'};
			inquirer.prompt.mockResolvedValue(titleData);
			const title = await userInput.askForTitle();
			//const title = userInput.getTitle();
			expect(title).toEqual(titleData.title);
		});
	});	
});