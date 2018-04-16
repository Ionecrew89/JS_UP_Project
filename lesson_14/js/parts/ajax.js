function ajax(){
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Cпасибо! Скоро мы с вами свяжемся";
	message.failure = "Что-то пошло не так";

	let formMail = document.getElementsByClassName('main-form')[0],
 		formMailInput = formMail.getElementsByTagName('input'),
 		statusMessage = document.createElement('div');
 		
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
}

module.exports = ajax;