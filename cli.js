var inquirer = require('inquirer');


inquirer.prompt([

{
	type: "list",
	name: "choice",
	message: "Are you a user or an admin?",
	choices: ["User", "Admin"]
}

	]).then(function (user) {

		if(user.choice == "User"){
			console.log("User Selected");
		}

		else if(user.choice == "Admin"){
			console.log("Admin Selected");
		}

    // Use user feedback for... whatever!! 
});

