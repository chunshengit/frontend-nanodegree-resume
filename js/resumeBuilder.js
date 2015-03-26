
/* Package all the bio info in a object literal */
var bio = {
    "name": "Chun Shen",
    "role": "Web Developer",
    "contacts": {
        "mobile": "19258678068",
        "email": "chun.shen@att.net",
        "github": "chunshengit",
        "twitter": "@chunshen",
        "location": "San Ramon, CA"
    },
    "welcomeMessage": "Welcome to the Web Front End Development Ninja home(in the making)",
    "skills": [
        "Everything Wireless", "data analysis", "programming", "teaching", "etc"
    ],
    "biopic": "images/cshen.png"
};

/* Display bio info in header section */
bio.display = function () {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedmobile);
    $("#footerContacts").append(formattedmobile);

    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedemail);
    $("#footerContacts").append(formattedemail);

    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedgithub);
    $("#footerContacts").append(formattedgithub);

    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedtwitter);
    $("#footerContacts").append(formattedtwitter);

    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedlocation);
    $("#footerContacts").append(formattedlocation);

    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedbioPic);

    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMsg);

    $("#header").append(HTMLskillsStart);

    if (bio.skills.length > 0) {
        for (skill in bio.skills) {
            var formattedskill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skillsH3").append(formattedskill);
        }
    }

};

bio.display();

/* Package all the education info in a object literal */
var education = {
    "schools" : [
    {
        "name": "NanJing University of Posts and Telecommunications",
        "location": "NanJing, JiangSu, China",
        "degree": "B.S.",
        "majors": "Computer Engineering",
        "dates": 1994,
        "url": "http://www.njupt.edu.cn/en/"
    }
    ],

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
};

education.display = function () {
    $("#education").append(HTMLschoolStart);

    for(school in education.schools) {
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedschoolName + formattedschoolDegree );

        var formattedschooldates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedschooldates);

        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedschoolLocation);

        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedschoolMajor);

        var fomrattedschoolURL = HTMLschoolURL.replace("%data%", education.schools[school].url);
        $(".education-entry:last").append(fomrattedschoolURL);
    }

    $("#education").append(HTMLonlineClasses);

    // Add another <div> section to append all the online courses
    $("#education").append(HTMLschoolStart);
    for (course in education.onlineCourses) {
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);

        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedonlineDates);

        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedonlineURL);
    }

};

education.display();

/* Package all the work experience in a object literal */
var work = {
    "jobs": [
    {
        "employer": "at&t Inc.",
        "title": "System Engineer",
        "location": "San Ramon, CA",
        "dates": "Feburary 2013 - Current",
        "description": "Planned and integrated at&t new data centers to accommodate the smart phone users' \
            insatiable demand for more bandwidth. Honed the programming skills and took extensive online \
            courses on computer algorithms and programming"
    },
    {
        "title": "Network Performance Analyst",
        "employer": "at&t Inc.",
        "dates": "Feburay 2007 - Feburary 2013",
        "location": "Pleasanton, CA",
        "description": "Developed SQL queries to mine network performance datawarehouse and and produced \
            analysis report to pinpoint the source of network performance degradation."
    }
    ]
};

work.displayWork = function() {
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
};

work.displayWork();


/*function inName(name) {
    var nameArray = name.trim().split(" ");
    return nameArray[0][0].toLocaleUpperCase() + nameArray[0].slice(1) + " " + nameArray[1].toLocaleUpperCase();
}

console.log(inName("sebastian thrun"));*/

/* Package all the project info in a object literal */
var projects = {
    "projects": [
    {
        "title": "Build a Portfolio Site",
        "dates": "Feb.2015 - Mar. 2015",
        "description" : "Developed a responsive website that displayed images, descriptions and links\
            to each of the portfolio projects in the NanoDegree.",
        "images": [
            "images/p1.png"
        ]
    },
    {
        "title": "Interactive Resume",
        "dates": "Mar.2015 - Apr. 2015",
        "description" : "Developed an interactive resume application that read resume content \
            from a JSON file and dynamically displayed that contents.",
        "images": [
            "images/p2.png"
        ]
    }
    ]
};

projects.display = function() {

    $("#projects").append(HTMLprojectStart);

    for (project in projects.projects) {
        var formattedprojectTile = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        console.log(formattedprojectTile);
        $(".project-entry:last").append(formattedprojectTile);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                console.log(projects.projects[project].images[image]);
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                console.log(formattedImage);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }

};

projects.display();

function addMap() {
    $("#mapDiv").append(googleMap);
}

addMap();

function addinternationalizeButton () {
    $("#main").append(internationalizeButton);
}

addinternationalizeButton();