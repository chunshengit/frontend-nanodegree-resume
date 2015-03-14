//$("#main").append(["Chun Shen"]);

/*
var awesomeThoughts ="I am Chun Shen and I am AWESOME!\n";
console.log(awesomeThoughts);

var email = "Chun.Shen@att.net";
var newEmail = email.replace("net", "com");

console.log(email);
console.log(newEmail);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(awesomeThoughts);
$("#main").append(funThoughts);
*/

var name = "Chun Shen";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["Nuibility", "awesomeness", "programming", "teaching", "JS"];
$("#main").append(skills.length);

var bio = {
	"name": "Chun Shen",
	"age":  65536,
	"skills": skills
};





