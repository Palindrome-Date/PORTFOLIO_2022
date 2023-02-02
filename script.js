const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image_1');
const image2 = document.getElementById('image_2');
const image3 = document.getElementById('image_3');
const textBox = document.getElementById('text-box');

// Dark or Light
function imageMode(params) {
	image1.src = `img/undraw_conceptual_${params}.svg`;
	image2.src = `img/undraw_contempla_${params}.svg`;
	image3.src = `img/undraw_feeling_pro_${params}.svg`;
}

function lightMode() {
	nav.style.backgroundColor = setColor(255);
	textBox.style.backgroundColor = setColor(0);
	toggleIcon.children[0].textContent = "Light Mode";
	toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
	imageMode('dark');
}

function darkMode() {
	nav.style.backgroundColor = setColor(0);
	textBox.style.backgroundColor = setColor(255);
	toggleIcon.children[0].textContent = "Dark Mode";
	toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
	imageMode('light');
}


function switchFunction(event) {
	if (event.target.checked) {
		document.documentElement.setAttribute('data-theme', 'dark');
		darkMode();
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		lightMode();
	}
}
function setColor(n){
	return `rgb(${n} ${n} ${n} / 50%)`
}
toggleSwitch.addEventListener('change', switchFunction);
