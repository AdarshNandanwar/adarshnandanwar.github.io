particlesJS.load('particles-js', 'public/particlesjs-config.json', function () {
    console.log('particles.json loaded...do your thing!');
});

$(window).scroll(function () {
    if ($(document).scrollTop() > $("#landing").outerHeight() - $("nav").outerHeight()) {
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

    if (($(document).scrollTop() + $(window).height()) > $("#landing").outerHeight()) {
        $("#aboutContent").fadeTo(1800, 1);
    }
    if (($(document).scrollTop() + $(window).height()) > ($("#landing").outerHeight() + $("#about").outerHeight())) {
        $("#skillsContent").fadeTo(1800, 1);
    }
    if (($(document).scrollTop() + $(window).height()) > ($("#landing").outerHeight() + $("#about").outerHeight() + $("#skills").outerHeight())) {
        $("#projectsContent").fadeTo(1800, 1);
    }
    if (($(document).scrollTop() + $(window).height()) > ($("#landing").outerHeight() + $("#about").outerHeight() + $("#skills").outerHeight() + $("#projects").outerHeight())) {
        $("#researchContent").fadeTo(1800, 1);
    }
    if (($(document).scrollTop() + $(window).height()) > ($("#landing").outerHeight() + $("#about").outerHeight() + $("#skills").outerHeight() + $("#projects").outerHeight() + $("#research").outerHeight())) {
        $("#contactContent").fadeTo(1800, 1);
    }
});
$('.navbar-nav>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

$(document).ready(function () {
    $("#home").fadeTo(1800, 1);

    // SKILLS
    var skillDetails = [
        { title: "Software Development", iconClass: "fas fa-laptop-code" },
        { title: "Distributed Systems", iconClass: "fas fa-laptop-code" },
        { title: "Cloud Computing", iconClass: "fas fa-laptop-code" },
        { title: "System Design", iconClass: "fas fa-laptop-code" },
        { title: "Data Structures", iconClass: "fa fa-project-diagram" },
        { title: "Algorithms", iconClass: "fa fa-file-code" },
        { title: "Data Analysis", iconClass: "fas fa-chart-bar" },
        { title: "Artificial intelligence", iconClass: "fas fa-robot" },
        { title: "Machine Learning", iconClass: "fas fa-robot" },
        { title: "Deep Learning", iconClass: "fas fa-robot" },
        { title: "Reinforcement Learning", iconClass: "fas fa-robot" },
        { title: "Full Stack Web Development", iconClass: "fab fa-github" },

        { title: "C", iconClass: "" },
        { title: "C++", iconClass: "" },
        { title: "C Sharp", iconClass: "" },
        { title: "Java", iconClass: "fab fa-java" },
        { title: "Python", iconClass: "fab fa-python" },
        { title: "Django", iconClass: "" },
        { title: "Flask", iconClass: "" },
        { title: "HTML", iconClass: "fab fa-html5" },
        { title: "CSS", iconClass: "fab fa-css3-alt" },
        { title: "SQL", iconClass: "fas fa-database" },
        { title: "Kusto Query Language", iconClass: "fas fa-database" },
        { title: "KDB+", iconClass: "fas fa-database" },
        { title: "Git & GitHub", iconClass: "fab fa-github" },
        { title: "Microsoft Azure", iconClass: "fas fa-cloud" },
        { title: "AWS", iconClass: "fas fa-cloud" }
    ]
    var oldSkillDetails = [
        { title: "JavaScript", iconClass: "fab fa-js" },
        { title: "jQuery", iconClass: "" },
        { title: "Node.js", iconClass: "fab fa-node-js" },
        { title: "MongoDB", iconClass: "fas fa-database" },
        { title: "Heroku", iconClass: "fas fa-cloud" }
    ]
    // adding skills in body
    var skillRow = document.createDocumentFragment();
    skillDetails.forEach(function (skill, index) {
        var newSkill = document.createElement('div');
        newSkill.className = 'col-md-6 col-lg-3';
        newSkill.innerHTML =
            `<div class="card card-body skill-card">\
            <h5 class="card-title text-center skill-text">\
                ${skill.iconClass.length ? "<i class='" + skill.iconClass + "'></i> " : ""}\
                ${skill.title}\
            </h5>\
        </div>`;
        skillRow.appendChild(newSkill);
    });
    document.getElementById('skillRow').appendChild(skillRow);
    // adding old skills in body
    var oldSkillRow = document.createDocumentFragment();
    oldSkillDetails.forEach(function (skill, index) {
        var newSkill = document.createElement('div');
        newSkill.className = 'col-md-6 col-lg-3';
        newSkill.innerHTML =
            `<div class="card card-body skill-card">\
            <h5 class="card-title text-center skill-text">\
                ${skill.iconClass.length ? "<i class='" + skill.iconClass + "'></i> " : ""}\
                ${skill.title}\
            </h5>\
        </div>`;
        oldSkillRow.appendChild(newSkill);
    });
    document.getElementById('oldSkillRow').appendChild(oldSkillRow);

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
            title: "Parser Translator for Modified 2048 Game Programming Language",
            description: "A game programming language for a modified version of the famous 2048 game that allows other operations like subtraction, multiplication, and division in addition to the plain doubling operation during tile mergers. Specifically, created a scanner using Flex, a parser translator for a complete syntax‑directed translation scheme using Bison, a suitable grammar to represent the operations, as well as advanced error handling into the scheme (from semantic all the way down to lexical errors).",
            image: "public/static/projects/2048.png",
            link: "https://github.com/AdarshNandanwar/Modified-2048-Game-Programming-Language"
        },
        {
            title: "Hybrid Wumpus Agent maze pathfinding using AI",
            description: "Given a Wumpus world containing exactly one pit and one Wumpus agent in room [1,1]. The goal of the agent is to exit the Wumpus world alive. The agent can exit the Wumpus world by reaching room [4,4]. There will be a breeze in the rooms adjacent to the pit, and there will be a stench in the rooms adjacent to Wumpus. Wrote a python program that uses Propositional Logic sentences to check which rooms are safe. The inference is drawn using the Davis-Putnam-Logemann-Loveland (DPLL) algorithm. There will always be a safe path that the agent can take to exit the Wumpus world. The logical agent can take four actions: Up, Down, Left and Right. These actions help the agent move from one room to an adjacent room. The agent can perceive two things: Breeze and Stench.",
            image: "public/static/projects/wumpus.png",
            link: "https://github.com/AdarshNandanwar/hybrid-wumpus-agent-AI"
        },
        {
            title: "Grammer Checker for English Language using NLP",
            description: "Built a grammar checker from scratch using the concepts of Natural Language Processing. Given a corpus with some paragraphs labeled as correct and some as unknown, the aim was to find all the sentences that have errors. Correct paragraphs have no grammatical errors, while unknown may/may not have sentences which have grammatical errors in them. For example: “In the country there lived a fox. The quick brown fox jump over the fence. Farmer Shaun was terrified.” In this paragraph, the sentence “The quick brown fox jump over the fence” is grammatically incorrect.",
            image: "public/static/projects/grammar.jpg",
            link: "https://github.com/AdarshNandanwar/NLP-Grammar-Check-for-English-Language"
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
    var modalIndexOffset = 0;
    var projectRow = document.createDocumentFragment();
    projectDetails.forEach(function (project, index) {
        var newProject = document.createElement('div');
        newProject.className = 'col-md-6 col-lg-3';
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
                                ${project.link.length ? "<a href=" + project.link + ">View project</a>" : ""}\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>`;
        projectRow.appendChild(newProject);
    });
    document.getElementById('projectRow').appendChild(projectRow);
    modalIndexOffset += projectDetails.length;

    // RESEARCH
    var researchDetails = [
        {
            title: "RL-MAGE: Strengthening Malware Detectors Against Smart Adversaries",
            authors: "Adarsh Nandanwar, Hemant Rathore, Sanjay K. Sahay, Mohit Sewak",
            description: "Today, android dominates the smartphone operating systems market. As per Google, there are over 3 billion active android users. With such a large population depending on the platform for their daily activities, a strong need exists to protect android from adversaries. Historically, techniques like signature and behavior were used in malware detectors. However, machine learning and deep learning models have now started becoming a core part of next-generation android malware detectors. In this paper, we step into malware developers/adversary shoes and ask: Are machine learning based android detectors resilient to reinforcement learning based adversarial attacks? Therefore, we propose the RL-MAGE framework to investigate the adversarial robustness of android malware detectors. The RL-MAGE framework assumes the grey-box scenario and aims to improve the adversarial robustness of malware detectors. We designed three reinforcement learning based evasion attacks A2C-MEA, TRPO-MEA, and PPO-MEA, against malware detectors. We investigated the robustness of 30 malware detection models based on 2 features (android permission and intent) and 15 distinct classifiers from 4 different families (machine learning classifiers, bagging based classifiers, boosting based classifiers, and deep learning classifiers). The designed evasion attacks generate adversarial applications by adding perturbations into the malware so that they force misclassifications and can evade malware detectors. The attack agent ensures that the adversarial applications’ structural, syntactical, and behavioral integrity is preserved, and the attack’s cost is minimized by adding minimum perturbations. The proposed TRPO-MEA evasion attack achieved a mean evasion rate of 93.27% while reducing the mean accuracy of 30 malware detectors from 85.81% to 50.29%. We also propose the ARShield defense strategy to improve the malware detectors’ classification performance and robustness. The TRPO-MEA ARShield models achieved 4.10% higher mean accuracy and reduced the mean evasion rate of re-attack from 93.27% to 1.05%. Finally, we conclude that the RL-MAGE framework improved the detection performance and adversarial robustness of malware detectors.",
            link: "https://doi.org/10.1007/978-3-031-36021-3_6"
        },        
        {
            title: "Adversarial superiority in android malware detection: Lessons from reinforcement learning based evasion attacks and defenses",
            authors: "Hemant Rathore, Adarsh Nandanwar, Sanjay K. Sahay, Mohit Sewak",
            description: "Today, android smartphones are being used by billions of users and thus have become a lucrative target of malware designers. Therefore being one step ahead in this zero-sum game of malware detection between the anti-malware community and malware developers is more of a necessity than a desire. This work focuses on a proactive adversary-aware framework to develop adversarially superior android malware detection models. We first investigate the adversarial robustness of thirty-six distinct malware detection models constructed using two static features (permission and intent) and eighteen classification algorithms. We designed two Targeted Type-II Evasion Attacks (TRPO-MalEAttack and PPO-MalEAttack) based on reinforcement learning to exploit vulnerabilities in the above malware detection models. The attacks aim to add minimum perturbations in each malware application and convert it into an adversarial application that can fool the malware detection models. The TRPO-MalEAttack achieves an average fooling rate of 95.75% (with 2.02 mean perturbations), reducing the average accuracy from 86.01% to 49.11% in thirty-six malware detection models. On the other hand, The PPO-MalEAttack achieves a higher average fooling rate of 96.87% (with 2.08 mean perturbations), reducing the average accuracy from 86.01% to 48.65% in the same thirty-six detection models. We also develop a list of the TEN most vulnerable android permissions and intents that an adversary can use to generate more adversarial applications. Later, we propose a defense strategy (MalVPatch) to counter the adversarial attacks on malware detection models. The MalVPatch defense achieves higher detection accuracy along with a drastic improvement in the adversarial robustness of malware detection models. Finally, we conclude that investigating the adversarial robustness of models is necessary before their real-world deployment and helps achieve adversarial superiority in android malware detection.",
            link: "https://doi.org/10.1016/j.fsidi.2023.301511"
        },
        {
            title: "Deep Neural Networks on EEG Signals to Predict Auditory Attention Score Using Gramian Angular Difference Field",
            authors: "Mahak Kothari, Shreyansh Joshi, Adarsh Nandanwar, Aadetya Jaiswal, Veeky Baths",
            description: "Auditory attention is a selective type of hearing in which people focus their attention intentionally on a specific source of a sound or spoken words whilst ignoring or inhibiting other auditory stimuli. In some sense, the auditory attention score of an individual shows the focus the person can have in auditory tasks. The recent advancements in deep learning and in the non-invasive technologies recording neural activity beg the question, can deep learning along with technologies such as electroencephalography (EEG) be used to predict the auditory attention score of an individual? In this paper, we focus on this very problem of estimating a person's auditory attention level based on their brain's electrical activity captured using 14-channeled EEG signals. More specifically, we deal with attention estimation as a regression problem. The work has been performed on the publicly available Phyaat dataset. The concept of Gramian Angular Difference Field (GADF) has been used to convert time-series EEG data into an image having 14 channels, enabling us to train various deep learning models such as 2D CNN, 3D CNN, and convolutional autoencoders. Their performances have been compared amongst themselves as well as with the work done previously. Amongst the different models we tried, 2D CNN gave the best performance. It outperformed the existing methods by a decent margin of 0.22 mean absolute error (MAE).",
            link: "https://arxiv.org/abs/2110.12503"
        }
    ];
    // adding research in body
    var researchRow = document.createDocumentFragment();
    var maxDescriptionWords = 60
    researchDetails.forEach(function (project, index) {
        index += modalIndexOffset;
        var descriptionWordCount = project.description.split(' ').length;
        var newProject = document.createElement('div');
        newProject.className = 'col-md-12 col-lg-12';
        newProject.innerHTML =
            `<a data-toggle="modal" data-target="#myModal${index}">\
            <div class="card research-card">\
                <div class="card-body">\
                    <h5 class="card-title">${project.title}</h5>\
                    <h6 class="card-subtitle mb-2 text-muted">${project.authors}</h6>\
                    <p class="card-text">${project.description.split(' ').slice(0, maxDescriptionWords).join(' ')}\
                    ${descriptionWordCount > maxDescriptionWords ? " ..." : ""}</p>\
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
                                <h5 class="card-text">${project.authors}</h5>\
                            </div>\
                        </div>\
                        <div class="row modal-description">\
                            <div class="col-md-12" style="padding-top: 20px;">\
                                <p class="card-text">${project.description}</p>\
                                ${project.link.length ? "<a href=" + project.link + ">Read paper</a>" : ""}\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>`;
        researchRow.appendChild(newProject);
    });
    document.getElementById('researchRow').appendChild(researchRow);
    modalIndexOffset += researchDetails.length;
});