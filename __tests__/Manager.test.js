const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');

describe('Manager', () => {
	it("should be an employee", () => {
		const employee = new Manager();
		expect(employee instanceof Employee).toEqual(true);
	});

	it("should have name, id and email as properties", () => {
		const employee = new Manager();
		expect('name' in employee).toEqual(true);
		expect('id' in employee).toEqual(true);
		expect('email' in employee).toEqual(true);
	});

	it("should have getName, getId, getEmail and getRole as methods", () => {
		const employee = new Manager();
		expect('getName' in employee).toEqual(true);
		expect('getId' in employee).toEqual(true);
		expect('getEmail' in employee).toEqual(true);
		expect('getRole' in employee).toEqual(true);
	});

	describe('officeNumber', () => {
		it(".officeNumber should set the officeNumber, .getOfficeNumber() should return the number", () => {
			const employee = new Manager();
			const number = '1234567890'; 
			employee.officeNumber(number);
			const officeNumber = employee.getOfficeNumber();
			expect(officeNumber).toEqual(number);
		});
	});

	describe('getRole', () => {
		it(".getRole() should return 'Manager'", () => {
			const employee = new Manager();
			const role = employee.getRole();
			expect(role).toEqual('Manager');
		});
	});

});