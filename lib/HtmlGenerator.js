const fs = require('fs');
const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');
const Intern = require('../lib/Intern.js');
const Engineer = require('../lib/Engineer.js');

class HtmlGenerator {

	cratePageHeader = (title) => {
		return `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>${title}</title>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
		<style>
			footer {
				position: absolute;
				bottom: 0pt;
				margin: 20pt 50pt;
			}

			div.card {
				text-decoration: none;
				margin: 20pt;
				width: 200pt;
			}

			div.card>div.card-body {
				color: black;
			}
		</style>
	</head>
	<body>`;
	}

	cratePageNavBar = (title) => {
		return `<nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
			<span class="navbar-brand" >${title}</span>
		</nav>`;
	}

	createPageBody = (employees) => {
		let managerCards = ``;
		let otherEmployeeCards = ``;
		employees.forEach(employee => {
			if(employee.getRole() == 'Manager'){
				managerCards += this.createCard(employee);
			} else {
				otherEmployeeCards += this.createCard(employee);
			}
		});
		return `
		<main class="container">
			<div class="d-flex flex-wrap justify-content-center">
				${managerCards}
			</div>
			<div class="d-flex flex-wrap justify-content-center">
				${otherEmployeeCards}
			</div>
		</main>
		`;
	}

	createPageFooter = () => {
		return `
		<footer>
			© 2021 <a href="https://n8blake.com">n8blake</a>
		</footer>
	</body>
</html>`;
	}

	// create a card from employee data
	createCard = (employee) => {
		let information = ``;
		let icon;
		information += `<p>ID : ${employee.getId()}</p>
`;
		information += `<p>Email : <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
`;
		switch(employee.getRole()){
			case 'Manager':
				icon = 'briefcase-fill.svg';
				information += `<p>Office Number : ${employee.getOfficeNumber()}</p>
`;
				break;
			case 'Engineer':
				icon = 'clipboard-data.svg';
				information += `<p><img src="../assets/github.svg" alt="Github" width="16" height="16" /> Github : <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></p>
`;
				break;
			case 'Intern':
				icon = 'book.svg';
				information += `<p>School : ${employee.getSchool()}</p>
`;
				break;
			default:
				break;
		}
		

		return `<div class="card">
					<div class="card-header">
						<h3><img src="../assets/${icon}" width="22" height="22"> ${employee.getName()}</h3>
						<p><small>${employee.getRole()}</small></p>
					</div>
					<div class="card-body">
${information}
					</div>
				</div>
`;
	}

	// create a home page from employee data
	createHomePage = (teamName, employees) => {
		const header = this.cratePageHeader(teamName);
		//create nav bar with team title
		const nav = this.cratePageNavBar(teamName);
		const mainCardPage = this.createPageBody(employees);
		const footer = this.createPageFooter();
		return header + nav + mainCardPage + footer;
	}

	saveHtmlDocument(fileName, html) { 
		const dir = `./dist/${fileName}.html`;
		console.log(dir);
		fs.writeFile(`./dist/${fileName}.html`, html, (err) =>
			err ? console.log(err) : console.log(`HTML Saved to ${dir}!`)
		);
	}

}

module.exports = HtmlGenerator;