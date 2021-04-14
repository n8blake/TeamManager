const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');
const Intern = require('../lib/Intern.js');
const Engineer = require('../lib/Engineer.js');
const HtmlGenerator = require('../lib/HtmlGenerator.js');
const fs = require('fs');
const HtmlValidator = require('html-validator');

jest.mock('fs');

describe('HtmlGenerator', () => {

	describe('createPageHeader', () => {
		it('should make an html page header with given title', () => {
			//expect(someCondition).toBe(something);
			const title = 'My Page';
			const generator = new HtmlGenerator();
			const header =  generator.cratePageHeader(title);
			const htmlHeader = `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>My Page</title>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	</head>
	<body>`;

			expect(header).toEqual(htmlHeader);
		});
	});

	describe('cratePageFooter', () => {
		it('should create a page footer', () => {
			const generator = new HtmlGenerator();
			const footer = generator.createPageFooter();
			const html = `
		<footer>
			© 2021 <a href="https://n8blake.com">n8blake</a>
		</footer>
	</body>
</html>`;
			expect(footer).toEqual(html);
		});
	});

	describe('createCard', () => {
		it('should produce an html card from an Employee object', async () => {
			const employee = new Manager();
			employee.name = "Catherine Janeway"
			employee.id = 10001;
			employee.email = 'catherine.janeway@federation.mil';
			employee.officeNumber = '999555111';
			const generator = new HtmlGenerator();
			const card = generator.createCard(employee);
			const options = {
				data: card,
				isFragment: true
 			}
			let validHtml = await HtmlValidator(options);
			//const report = htmlvalidate.validateString("...")
			//const validator = new HtmlValidator();
			//const report = validator.validateString(card);
			console.log(validHtml);
			validHtml = JSON.parse(validHtml);
			expect(validHtml.messages.length).toEqual(0);
		});
	});

	describe('createHomePage', () => {
		it('should create a homepage from an array of users', () => {

		});
	});

});