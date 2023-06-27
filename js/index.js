//Name and current year in the bottom of the page
let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
let yourName = 'Mariya Doronkina';
const copyrightSign = '\u00A9'
copyright.innerHTML = `${yourName} ${copyrightSign} ${thisYear}`;
footer.appendChild(copyright);

//My skills
let skills = ["JavaScript", "HTML", "CSS", "SQL", "GitHub"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement('li');
  skill.innerText = skills[i];
  skill.classList.add('skills-item');
  skillsList.appendChild(skill);
}

document.addEventListener('DOMContentLoaded', function() {
  const messageForm = document.forms.leave_message;
  messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const usersName = messageForm.usersName.value;
    const usersEmail = messageForm.usersEmail.value;
    const usersMessage = messageForm.usersMessage.value;

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.classList.add('message');

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> wrote: <span>${usersMessage}</span>`;

    const messageButtons = document.createElement('div');
    messageButtons.classList.add('message-buttons');

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.innerText = 'Remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', function() {
      newMessage.remove();
    });

    messageButtons.appendChild(removeButton);
    newMessage.appendChild(messageContent);
    newMessage.appendChild(messageButtons);
    messageList.appendChild(newMessage);
    messageForm.reset();
  });
});