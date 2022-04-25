const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.style.color = 'red';
para.textContent = 'Paragraph with red text';

container.appendChild(para);

const header = document.createElement('h3');
header.style.color = 'blue';
header.textContent = "I'm a blue h3.";

container.appendChild(header)

const div = document.createElement('div');
div.style.cssText = 'border: black; background-color: pink';

const header1 = document.createElement('h1');
header1.textContent = "I'm in a div.";
 
const para2 = document.createElement('p');
para2.textContent = "ME TOO!";

div.appendChild(header1);
div.appendChild(para2);
container.appendChild(div);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function(e) {
    e.target.style.background = 'blue';
});