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
	</head>
	<body>`;
	}

	cratePageNavBar = (title) => {
		return `<nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
			<span class="navbar-brand" >${title}</span>
		</nav>`;
	}

	createPageBody = (employee) => {
		return `
		<main>${employee.name}</main>
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
		information += `<p>ID : ${employee.getId()}</p>
`;
		information += `<p>Email : <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
`;
		switch(employee.getRole()){
			case 'Manager':
				information += `<p>Office Number : ${employee.getOfficeNumber()}</p>
`;
				break;
			case 'Engineer':
				information += `<p>Github User Name : ${employee.getGithub()}</p>
`;
				break;
			case 'Intern':
				information += `<p>School : ${employee.getSchool()}</p>
`;
				break;
			default:
				break;
		}
		

		return `<div class="card">
					<div class="card-header">
						<h3>${employee.getName()}</h3>
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
		const footer = this.createPageFooter();

	}

	saveHtmlDocument(fileName, html) { 
		fs.writeFile(__dirname + `dist/${fileName}.html`, html, (err) =>
			err ? console.log(err) : console.log('HTML Saved!')
		);
	}

}

module.exports = HtmlGenerator;