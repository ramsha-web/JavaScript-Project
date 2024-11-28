//Using array to store data
let employees = ["Atif - Manager", "Ahmed - Developer", "Amna - Designer", "Gulaal - HR"];
console.log(employees);

//Accessing content using bracket notation 
console.log(employees[0]); 
console.log(employees[2]); 

//Add items with push and unshift
employees.push("Hamza - Intern"); 
employees.unshift("Ali - CEO");
console.log(employees);

//Remove Item with pop and shift 
employees.pop(); 
employees.shift(); 
console.log(employees);

//Remove item using splice 
employees.splice(1, 1); 
console.log(employees);

//Add item using splice
employees.splice(1, 0, "Saad - Engineer"); 
console.log(employees);

//Copy array using slice 
let teamLeads = employees.slice(0, 2); 
console.log(teamLeads);


//Copy array using spread operator 
let duplicateEmployees = [...employees];
console.log(duplicateEmployees);

//Combine array using spread operators
let marketingTeam = ["Sofia - Marketing Manager", "Zainab - Content Writer"];
let allEmployees = [...employees, ...marketingTeam];
console.log(allEmployees);








