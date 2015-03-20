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

/*var name = "Chun Shen";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);*/

//var skills = ["Nuibility", "awesomeness", "programming", "teaching", "JS"];
//$("#main").append(skills.length);

var bio = {
	"name": "Chun Shen",
	"role": "Web Developer",
	"contacts": { 
		"mobile": "9258678068",
		"email": "chun.shen@att.net",
		"github": "chunshengit",
		"twitter": "@chunshen",
		"location": "San Ramon, CA"
	},
	"welcomeMessage": "Welcome to My Page",
	"skills": [
		"Everything Wireless", "data mining", "programming", "teaching", "JS"
	],
	"bioPic": "imagies/fry.jpg"
};

//$("#header").prepend(HTMLcontactGeneric);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for (skill in bio.skills) {
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
	$("#skills").append(formattedSkill);
	}
}

/*var education = {
	"school": "NanJing University of Posts and Telecommunications",
	"years": "1990-1994",
	"City": "NanJing, JiangSu, China"
};

$("#main").append(work["position"]); 
$("#main").append(education.school); 
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLschoolName.replace("%data%", education.school);*/

var education = {
	"school": "NanJing University of Posts and Telecommunications",
	"years": "1990-1994",
	"City": "NanJing, JiangSu, China",
	"onlineCourses": [
	{
		"title": "Algorithms: Design and Analysis Part1", 
		"school": "Coursera",
		"dates": "Jul. 1st, 2013 - Aug. 11th 2013", 
		"duration": "six weeks",
		"url": "https://www.coursera.org/course/algo" 
	},
	{
		"title": "Algorithms: Design and Analysis Part2", 
		"school": "Coursera",
		"dates": "Sep.2nd, 2013 - Oct. 13th 2013", 
		"duration": "six weeks",
		"url": "https://www.coursera.org/course/algo2" 
	},
	{
		"title": "Introduction to Logic", 
		"school": "Coursera",
		"dates": "Sep.29th, 2014 - Dec. 21st 2014", 
		"duration": "eight weeks",
		"url": "https://www.coursera.org/course/intrologic" 
	},
	{
		"title": "Automata", 
		"school": "Coursera",
		"dates": "Nov 4th, 2013 - Dec. 15th 2013", 
		"duration": "eight weeks",
		"url": "https://www.coursera.org/course/automata" 
	},
	{
	  	"title": "Machine Learning", 
		"school": "Coursera",
		"dates": "Apr.22nd, 2013 - Jun 30th 2013", 
		"duration": "ten weeks",
		"url": "https://www.coursera.org/course/ml" 
	},
	{
	  	"title": "Mining Massive Datasets", 
		"school": "Coursera",
		"dates": "Sep. 29th, 2014 - Nov 30th 2013", 
		"duration": "seven weeks",
		"url": "https://www.coursera.org/course/mmds" 
	},
	{
	  	"title": "Programming Mobile Applications for Android Handheld Systems", 
		"school": "Coursera",
		"dates": "Apr. 30th, 2014", 
		"duration": "eight weeks",
		"url": "https://www.coursera.org/course/androidpart1" 
	},
	{
	  	"title": "Programming Mobile Services for Android Handheld Systems: Concurrency", 
		"school": "Coursera",
		"dates": "Jul. 30th, 2014", 
		"duration": "eight weeks",
		"url": "https://www.coursera.org/course/androidpart1" 
	},
	{
	  	"title": "Programming Cloud Services for Android Handheld Systems", 
		"school": "Coursera",
		"dates": "Oct. 1st, 2014", 
		"duration": "five weeks",
		"url": "https://www.coursera.org/course/mobilecloudprogram" 
	}
	]
}


var work = {
	"jobs": [
	{
		"title": "System Engineer",
		"employer": "at&t Inc.",
		"dates": "Feburary 2012 - Current",
		"location": "San Ramon, CA",
		"description": "Busy building at&t new data centers to accommodate the smart phone users \
			unsaturable demand for more bandwidth. Having fun learning all the programming skills\
			and taking extensive online courses on algorithms, programming and other Computer \
			Science fundamentals."
	},
	{
		"title": "Network Performance Analyst",
		"employer": "at&t Inc.",
		"dates": "Feburay 2007 - Feburary 2012",
		"location": "Pleasanton, CA", 
		"description": "Mined network performance datawarehouse and Developed SQL queries to pull \
			gazillons bytes of data out of the dataware house to pinpoint the source of network performance \
			degradation."
	}
	]
};

function displayWork() {
	for (job in work.jobs) {	
		// create new div for work experience
		$("#workExperience").append(HTMLworkStart); 
		// concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer); 
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title); 
		var formatedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formatedEmployerTitle);

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates); 
		$(".work-entry:last").append(formattedWorkDates);

		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location); 
		$(".work-entry:last").append(formattedWorkLocation);

		var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description); 
		$(".work-entry:last").append(formattedworkDescription);

	}
}

displayWork();


/*$(document).click(function(loc) {
  // your code goes here
  logClicks(loc.pageX, loc.pageY)
});
*/
/*function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj) {
		var newLocatioin = work_obj.jobs[job].location;
		locationArray.push(newLocatioin);
	}

	return locationArray;
}*/

/*function inName(name) {
	var nameArray = name.trim().split(" ");
	return nameArray[0][0].toLocaleUpperCase() + nameArray[0].slice(1) + " " + nameArray[1].toLocaleUpperCase(); 
}

console.log(inName("sebastian thrun"));*/

var projects = {
	"projects": [
	{
		"title": "First Project",
		"dates": "",
		"description" : "",
		"images": [
			"",
			""
		]
	}, 
	{
		"title": "Second Project",
		"dates": "",
		"description" : "",
		"images": [
			"",
			""
		]

	}
	]
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

projects.display = function() {
	for (project in projects.projects) {
		$("projects").append(HTMLprojectStart); 
	}

	var formattedTile = HTMLprojectTitle.replace("%data%", projects.projects[project].title); 
	$(".project-entry:last").append(formattedTile);

	var formattedDates = HTMLprojectDates.replace("%data%", porjects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);

	var formattedDescription = HTMLprojectDescriptions.replace("%data%", porjects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);

	if (projects.projects[porject].images.length > 0) {
		for (image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%datat%", projects.projects[project].images[image]); 
				$(".project-entry:last").append(formattedImage);
		}
	}

}

projects.display; 
