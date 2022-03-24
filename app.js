const education = document.querySelector('.education');
const recreation = document.querySelector('.recreation');
const social = document.querySelector('.social');
const DIY = document.querySelector('.DIY');
const charity = document.querySelector('.charity');
const cooking = document.querySelector('.cooking');
const relaxation = document.querySelector('.relaxation');
const music = document.querySelector('.music');
const busywork = document.querySelector('.busywork');
const resultContent = document.querySelector('.result-content');

education.addEventListener('click', education_API);
recreation.addEventListener('click', recreation_API);
social.addEventListener('click', social_API);
DIY.addEventListener('click', DIY_API);
charity.addEventListener('click', charity_API);
cooking.addEventListener('click', cooking_API);
relaxation.addEventListener('click', relaxation_API);
music.addEventListener('click', music_API);
busywork.addEventListener('click', busywork_API);

showData();

function showData() {
	fetch('http://www.boredapi.com/api/activity?type=recreational')
		.then((response) => response.json())
		.then((data) => {
			resultContent.innerHTML = `<h4 class="border-bottom text-light">${data.activity}</h4>`;
		});
}

function education_API() {
	fetch('http://www.boredapi.com/api/activity?type=education')
		.then((response) => response.json())
		.then((data) => {
			resultContent.innerHTML = `<h4 class="border-bottom text-light">${data.activity}</h4>`;
		});
}

function recreation_API() {
	fetch('http://www.boredapi.com/api/activity?type=recreational')
		.then((response) => response.json())
		.then((data) => {
			resultContent.innerHTML = `<h4 class="border-bottom text-light">${data.activity}</h4>`;
		});
}

function social_API() {
	fetch('http://www.boredapi.com/api/activity?type=social')
		.then((response) => response.json())
		.then((data) => {
			resultContent.innerHTML = `<h4 class="border-bottom text-light">${data.activity}</h4>`;
		});
}

function DIY_API() {
	fetch('http://www.boredapi.com/api/activity?type=diy')
		.then((response) => response.json())
		.then((data) => {
			resultContent.innerHTML = `<h4 class="border-bottom text-light">${data.activity}</h4>`;
		});
}

function charity_API() {
	fetch('http://www.boredapi.com/api/activity?type=charity')
		.then((response) => response.json())
		.then((data) => {
			resultContent.innerHTML = `<h4 class="border-bottom text-light">${data.activity}</h4>`;
		});
}

function cooking_API() {
	fetch('http://www.boredapi.com/api/activity?type=cooking')
		.then((response) => response.json())
		.then((data) => {
			resultContent.innerHTML = `<h4 class="border-bottom text-light">${data.activity}</h4>`;
		});
}

function relaxation_API() {
	fetch('http://www.boredapi.com/api/activity?type=relaxation')
		.then((response) => response.json())
		.then((data) => {
			resultContent.innerHTML = `<h4 class="border-bottom text-light">${data.activity}</h4>`;
		});
}

function music_API() {
	fetch('http://www.boredapi.com/api/activity?type=music')
		.then((response) => response.json())
		.then((data) => {
			resultContent.innerHTML = `<h4 class="border-bottom text-light">${data.activity}</h4>`;
		});
}

function busywork_API() {
	fetch('http://www.boredapi.com/api/activity?type=busywork')
		.then((response) => response.json())
		.then((data) => {
			resultContent.innerHTML = `<h4 class="border-bottom text-light">${data.activity}</h4>`;
		});
}
