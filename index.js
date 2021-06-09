const inquirer = require('inquirer');
const { allowedNodeEnvironmentFlags } = require('process');
// const mysql = require('mysql')
// const cTable = require('console.table');

// const connection = mysql.createConnection({
// 	host: "localhost",
// 	port: 3306,
// 	// user, password & DB

// });

//Create inquirer prompt

function init(){
	inquirer.prompt({
		name: 'action',
		type: 'list',
		message: 'What would you like to do?',
		choices: [
			'Add department',
			'Add role',
			'Add employee',
			'View departments',
			'View roles',
			'View employees',
			'Update employee roles',
			'Exit'
			]
	})
	.then(answer => {
		console.log('You selected ' + answer);
		if(answer.action === 'Add department'){
			addDepartment();
		}
		else if(answer.action === 'Add role'){
			addRole();
		}
		else if(answer.action === 'Add employee'){
			addEmployee();
		}
		else if(answer.action === 'View departments'){
			viewDepartments();
		}
		else if(answers.action === 'View roles'){
			viewRoles();
		}
		else if(answer.action === 'View employees'){
			viewEmployees();
		}
		else if(answer.action === 'Update employee roles'){
			updateEmployeeRole();
		}
		else{
			connection.end();
		}
	});
}

function addDepartment(){
	inquirer.prompt({
		name: 'department',
		type: 'input',
		message: 'What department do you want to add?'
	}).then(function(answer) {
		var query = "INSERT INTO department (name) VALUES ( ? )";
		connection.query(query,answer.department,function(err,res){
			console.log(answer.department + "successfully added to department!")
		})
		viewDepartments();
	})
}

function addRole(){
	inquirer.prompt({
		name: 'title',
		type: 'input',
		message: 'What role do you want to add?'
	},
	{
		name: 'salary',
		type: 'input',
		message: 'What is the salary for this role?'
	}
	
	)
}


connection.connect(function(err){
	if (err) throw err;
	init();
});
