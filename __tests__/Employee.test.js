const Employee = require('../lib/Employee.js');

describe('Employee', () => {
	it("should be an employee", () => {
		const employee = new Employee();
		expect(employee instanceof Employee).toEqual(true);
	});

	it("should have name, id and email as properties", () => {
		const employee = new Employee();
		expect('name' in employee).toEqual(true);
		expect('id' in employee).toEqual(true);
		expect('email' in employee).toEqual(true);
	})

	it("should have getName, getId, getEmail and getRole as methods", () => {
		const employee = new Employee();
		expect('getName' in employee).toEqual(true);
		expect('getId' in employee).toEqual(true);
		expect('getEmail' in employee).toEqual(true);
		expect('getRole' in employee).toEqual(true);
	})

	describe('name', () => {
		it(".name should set the employee's name, .getName() should return the name", () => {
			const employee = new Employee();
			employee.name = 'Stan';
			const name = employee.getName();
			expect(employee.name).toEqual(name);
		});
	});

	describe('id', () => {
		it(".id should set the employee's id, .getId() should return the id", () => {
			const employee = new Employee();
			employee.id = 100;
			const id = employee.getId();
			expect(employee.id).toEqual(id);
		});
	});

	describe('email', () => {
		it(".email should set the employee's email, .getEmail() should return the email", () => {
			const employee = new Employee();
			employee.email = 'stan@n8blake.com';
			const email = employee.getEmail();
			expect(employee.email).toEqual(email);
		});
	});

	describe('getRole', () => {
		it(".getRole() should return 'Employee'", () => {
			const employee = new Employee();
			const role = employee.getRole();
			expect(role).toEqual('Employee');
		});
	});

});