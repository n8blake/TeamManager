const Employee = require('../lib/Employee.js');
const Intern = require('../lib/Intern.js');

describe('Intern', () => {
	it("should be an employee", () => {
		const employee = new Intern();
		expect(employee instanceof Employee).toEqual(true);
	});

	it("should have name, id and email as properties", () => {
		const employee = new Intern();
		expect('name' in employee).toEqual(true);
		expect('id' in employee).toEqual(true);
		expect('email' in employee).toEqual(true);
	});

	it("should NOT have officeNumber and school as properties", () =>{
		const employee = new Intern();
		expect('officeNumber' in employee).toEqual(false);
		expect('github' in employee).toEqual(false);
	})

	it("should have getName, getId, getEmail and getRole as methods", () => {
		const employee = new Intern();
		expect('getName' in employee).toEqual(true);
		expect('getId' in employee).toEqual(true);
		expect('getEmail' in employee).toEqual(true);
		expect('getRole' in employee).toEqual(true);
	});

	describe('school', () => {
		it(".school should set the school for the intern, .getSchool() should return the school", () => {
			const employee = new Intern();
			const school = '1234567890'; 
			employee.school(school);
			const employeeSchool = employee.getSchool();
			expect(employeeSchool).toEqual(school);
		});
	});

	describe('getRole', () => {
		it(".getRole() should return 'Intern'", () => {
			const employee = new Intern();
			const role = employee.getRole();
			expect(role).toEqual('Intern');
		});
	});

});