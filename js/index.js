// ================ Define variables for code readability ================ //
// General Sections
const body = document.body;

// Body Sections
const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const experience = document.querySelector('#experience');
const projects = document.querySelector('#projects');
const connect = document.querySelector('#connect');

// ================ Adding + Modifying New Sections ================ //

// ======= Skills ======= //
// Adding List of Skills
const skillsAll = ['Python', 'Matlab', 'R', 'GDScript', 'JavaScript', 'HTML', 'CSS', 'GitHub'];
const skillsList = skills.querySelector('ul');

// Add class to ul to modify into a grid in the css.
skillsList.classList.add('skills-list'); 

// Loop through skills and create list objects
for (const skillEach of skillsAll) {
    const skill = document.createElement('li');
    skill.innerText = skillEach;
    skill.classList.add('skill-item');

    skillsList.appendChild(skill);
};

// ======= Footer ======= //
// Create and add footer to index
const footer = document.createElement('footer');
body.append(footer);

// Create and add copyright text to footer
const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement('p');
copyright.innerText = `\u00A9${thisYear} Smah Riki`;

footer.appendChild(copyright);