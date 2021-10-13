particlesJS.load('particles-js', 'public/particlesjs-config.json', function () {
    console.log('particles.json loaded...do your thing!');
});

$(window).scroll(function() {
    if ($(document).scrollTop() > $("#landing").outerHeight()-$("nav").outerHeight()) {
        $('#nav-name').css('display', 'inline-block');
        $('#nav-name').css('color', 'rgba(0,0,0,0.9)');
        $('nav').css('background', 'rgba(255,255,255,0.8)');
        $('.nav-item.nav-link').css('color', 'rgba(0,0,0,0.9)');
    } else {
        $('#nav-name').css('color', 'rgba(0,0,0,0)');
        $('nav').css('background', 'rgba(255,255,255,0.8)');
        $('.nav-item.nav-link').css('color', 'rgba(0,0,0,0.9)');
    }

    if ($(document).scrollTop() > 100) {
        $('nav').removeClass('expand');
    } else {
        $('#nav-name').css('display', 'none');
        $('nav').addClass('expand');
    }

    if (($(document).scrollTop()+$(window).height()) > $("#landing").outerHeight()){
        $("#aboutContent").fadeTo(1800, 1);
    }
    if (($(document).scrollTop()+$(window).height()) > ($("#landing").outerHeight()+$("#about").outerHeight())){
        $("#skillsContent").fadeTo(1800, 1);
    }
    if (($(document).scrollTop()+$(window).height()) > ($("#landing").outerHeight()+$("#about").outerHeight()+$("#skills").outerHeight())){
        $("#projectsContent").fadeTo(1800, 1);
    }
    if (($(document).scrollTop()+$(window).height()) > ($("#landing").outerHeight()+$("#about").outerHeight()+$("#skills").outerHeight()+$("#projects").outerHeight())){
        $("#contactContent").fadeTo(1800, 1);
    }
});
$('.navbar-nav>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$( document ).ready(function() {
    $("#home").fadeTo(1800, 1);

    // SKILLS
    var skillDetails = [
        {title: "C", iconClass: ""},
        {title: "C++", iconClass: ""},
        {title: "Java", iconClass: "fab fa-java"},
        {title: "Python", iconClass: "fab fa-python"},
        {title: "Django", iconClass: ""},
        {title: "Git", iconClass: "fab fa-git-alt"},
        {title: "HTML", iconClass: "fab fa-html5"},
        {title: "CSS", iconClass: "fab fa-css3-alt"},
        {title: "JavaScript", iconClass: "fab fa-js"},
        {title: "jQuery", iconClass: ""},
        {title: "Node.js", iconClass: "fab fa-node-js"},
        {title: "MongoDB", iconClass: "fas fa-database"}
    ]
    // adding projects in body
    var skillRow = document.createDocumentFragment();
    skillDetails.forEach(function (skill, index) {
        var newSkill = document.createElement('div');
        newSkill.className = 'col-md-6 col-lg-4';
        newSkill.innerHTML = 
        `<div class="card card-body skill-card">\
            <h5 class="card-title text-center skill-text">\
                ${skill.iconClass.length ? "<i class='"+skill.iconClass+"'></i> " : ""}\
                ${skill.title}\
            </h5>\
        </div>`;
        skillRow.appendChild(newSkill);
    });
    document.getElementById('skillRow').appendChild(skillRow);
    
    // PROJECTS
    var projectDetails = [
        {
            title: "Course Load Portal",
            description: "Web portal built to streamline the process of registration of courses by the respective HoDs for the semester and generation of course load in various formats for its use in the ERP.",
            image: "public/static/projects/courseLoad.png",
            link: ""
        },
        {
            title: "Transfers Management System",
            description: "Web application built to efficiently manage the transfers from PS to thesis and from thesis to PS. Used by BITS Pilani Pilani,Goa and Hyderabad campuses.",
            image: "public/static/projects/TMS.png",
            link: ""
        },
        {
            title: "Practice School Clarification",
            description: "Web application built to automate the procedure to apply for change in Practice School Station and other PS related clarifications. Used by BITS Pilani Pilani,Goa and Hyderabad campuses.",
            image: "public/static/projects/CMS.png",
            link: ""
        },
        {
            title: "Image Classifier (OpenCV, Flask)",
            description: "Web aplication made using Flask and OpenCV. User may upload any image which is classified into predefined classes. These are then displayed in the main page with the appropriate tags.",
            image: "public/static/projects/imageClassifier.png",
            link: "https://flaskapp-imageclassifier.herokuapp.com/"
        },
        {
            title: "YelpCamp",
            description: "A simple express app created with the help of mongoDB, passport, etc.",
            image: "public/static/projects/yelpCamp.png",
            link: "https://projectappyelpcamp.herokuapp.com/"
        }
    ];
    // adding projects in body
    var projectRow = document.createDocumentFragment();
    projectDetails.forEach(function (project, index) {
        var newProject = document.createElement('div');
        newProject.className = 'col-md-6 col-lg-4';
        newProject.innerHTML = 
        `<a data-toggle="modal" data-target="#myModal${index}">\
            <div class="card project-card">\
                <img class="card-img-top project-image" src="${project.image}" alt="Card image">\
                <div class="card-body">\
                    <h5 class="card-title" style="margin: 0;">${project.title}</h5>\
                    <!-- <p class="card-text">${project.description}</p> -->\
                </div>\
            </div>\
        </a>\
        <div class="modal fade" id="myModal${index}" tabindex="-1" role="dialog" aria-hidden="true">\
            <div class="modal-dialog modal-dialog-centered modal-full" role="document">\
                <div class="modal-content">\
                    <div class="modal-header">\
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
                            <span aria-hidden="true">×</span>\
                        </button>\
                    </div>\
                    <div class="modal-body p-4" id="result">\
                        <div class="row">\
                            <div class="col-md-12">\
                                <h5 class="card-title">${project.title}</h5>\
                            </div>\
                        </div>\
                        <div class="row modal-description">\
                            <div class="col-md-6">\
                                <img class="card-img-top project-image" src="${project.image}" alt="Card image">\
                            </div>\
                            <div class="col-md-6" style="padding-top: 20px;">\
                                <p class="card-text">${project.description}</p>\
                                ${project.link.length ? "<a href="+project.link+">View project</a>" : ""}\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>`;
        projectRow.appendChild(newProject);
    });
    document.getElementById('projectRow').appendChild(projectRow);
});