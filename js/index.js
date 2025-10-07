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

// ======= Message Form ======= //
const messageForm = body.querySelector("[name='leave_message']");

// Add event listener to add functionality to the submit 
// button and remove button.  
messageForm.addEventListener('submit', event => {

    // Prevent default refreshing behavior upon form submission
    event.preventDefault();

    // Helpful definitions
    const usersName = event.currentTarget.usersName.value;
    const usersEmail = event.currentTarget.usersEmail.value;
    const usersMessage = event.currentTarget.usersMessage.value;
    const submitBtn = event.currentTarget.subBtn;

    // -------- Message Submission Behavior ---------- //
    // Console log results and reset form
    console.log(`Name: ${usersName}`);
    console.log(`Email: ${usersEmail}`);
    console.log(`Message: ${usersMessage}`);

    // -------- Message Board Behavior ---------- //
    // Locate the messages display section and enclosed ul element
    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul');

    // Create functionality for individual messages
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href = 'mailto:${usersEmail}'>${usersName}: <span>${usersMessage}</span></a>`;

    // Create a remove button for message
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.setAttribute('type', 'button');

    // Add behavior to remove button
    removeButton.addEventListener('click', event => {
        // Find parent of button (i.e. message) and remove it
        const entry = event.target.parentNode
        entry.remove();
    }
    );

    // Append button to the message, then message to list
    newMessage.appendChild(removeButton);
    messageList.append(newMessage);

    // Reset the whole form
    event.currentTarget.reset();

})