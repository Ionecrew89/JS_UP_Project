let button = document.querySelectorAll('.menu-item'),
	menu = document.querySelector('.menu'),
	title = document.getElementById('title'),
	adv = document.getElementsByClassName('adv'),
	_prompt = document.getElementById('prompt'),
	li = document.createElement('li');


menu.insertBefore(button[2], button[1]);
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
menu.appendChild(li);
title.textContent = 'Мы продаем только подлинную технику Apple';
adv[0].style.display = 'none';

let a = prompt('Ваше отношение к технике apple', '');

_prompt.textContent = a;

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
