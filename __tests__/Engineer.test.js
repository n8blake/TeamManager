const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');

describe('Engineer', () => {
	it("should be an employee", () => {
		const employee = new Engineer();
		expect(employee instanceof Employee).toEqual(true);
	});

	it("should have name, id and email as properties", () => {
		const employee = new Engineer();
		expect('name' in employee).toEqual(true);
		expect('id' in employee).toEqual(true);
		expect('email' in employee).toEqual(true);
	});

	it("should NOT have officeNumber and school as properties", () =>{
		const employee = new Engineer();
		expect('officeNumber' in employee).toEqual(false);
		expect('school' in employee).toEqual(false);
	})

	it("should have getName, getId, getEmail and getRole as methods", () => {
		const employee = new Engineer();
		expect('getName' in employee).toEqual(true);
		expect('getId' in employee).toEqual(true);
		expect('getEmail' in employee).toEqual(true);
		expect('getRole' in employee).toEqual(true);
	});

	describe('github', () => {
		it(".github should set the github user name, .getGithub() should return the user name", () => {
			const employee = new Engineer();
			const usrName = '1234567890'; 
			employee.github(usrName);
			const githubUserName = employee.getGithub();
			expect(githubUserName).toEqual(usrName);
		});
	});

	describe('getRole', () => {
		it(".getRole() should return 'Engineer'", () => {
			const employee = new Engineer();
			const role = employee.getRole();
			expect(role).toEqual('Engineer');
		});
	});

});