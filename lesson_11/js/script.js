window.addEventListener('DOMContentLoaded',function() {

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent (a) {
		for(let i=a; i< tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	// показать табы
	function showTabContent(b) {
		if(tabContent[b].classList.contains('hide')){
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event){
		let target = event.target;

		if(target.className == 'info-header-tab'){
			for(i=0; i<tab.length; i++){
				if(target == tab[i]){
					showTabContent(i);
					break;
				}
			}
		}
	});

	// timer
	let deadline = '2018-05-20';

	function getTimeRemaining(endtime) {

		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor( (t/1000) % 60 ),
			minutes = Math.floor( (t/1000/60) % 60 ),
			hours = Math.floor( (t/(1000*60*60)) );

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock(id, endtime) {

		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

		function updateClock() {
			let t = getTimeRemaining(endtime);
			
			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}

		updateClock();
		let timeInterval = setInterval(updateClock, 1000);
	}

	setClock('timer', deadline);

	// modal

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

	more.addEventListener('click', function(){
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = "hidden";
	});

	close.addEventListener('click', function(){
		this.classList.remove('more-splash');
		overlay.style.display = 'none';
		document.body.style.overflow = "";
	});


	// Form++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Cпасибо! Скоро мы с вами свяжемся";
	message.failure = "Что-то пошло не так";

	let formMail = document.getElementsByClassName('main-form')[0],
 		formMailInput = formMail.getElementsByTagName('input'),
 		statusMessage = document.createElement('div');

	console.log(formMail);
	console.log(formMailInput);

	
	statusMessage.classList.add('status');

	// переменные для формы контакты
	let formContact = document.getElementById('form'),
	inputContact = formContact.getElementsByTagName('input');
	console.log(formMailInput.length);

	formMail.addEventListener('submit', function(event) {
		event.preventDefault();
		// контакты
		formMail.appendChild(statusMessage);

		// ajax
		let request = new XMLHttpRequest();
		request.open("POST", "server.php")

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		
		// контакты
		let formContactData = new FormData(formMail);
		
		// request.send(formData);
		request.send(formContactData);

		request.onreadystatechange = function() {
			
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;

			} else if (request.readyState === 4) {
				if (request.status === 200 && request.status < 300){
					
					statusMessage.innerHTML = message.success;
					// добавляем контент на страницу
				} else {
					statusMessage.innerHTML = message.failure;
				}
			}
		}
			
		for (let i =0; i < formMailInput.length; i++) {
			formMailInput[i].value = 'Очищаем поле';
			console.log(formMailInput[i]);
			// очищаем поля ввода
			}
	});

	formContact.addEventListener('submit', function(event) {
		event.preventDefault();
		// контакты
		formContact.appendChild(statusMessage);

		// ajax
		let request = new XMLHttpRequest();
		request.open("POST", "server.php")

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		
		// контакты
		let formContactData = new FormData(formContact);
		
		// request.send(formData);
		request.send(formContactData);

		request.onreadystatechange = function() {
			
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status === 200 && request.status < 300){
					
					statusMessage.innerHTML = message.success;
					// добавляем контент на страницу
				} else {
					statusMessage.innerHTML = message.failure;
				}
			}
		}
			
		for (let i =0; i < inputContact.length; i++) {
			inputContact[i].value = 'Очищаем все поля контактов';
			console.log(inputContact[i]);
			// очищаем поля ввода
			}
	});
});