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



// lesson 10++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var __options = class options {

	constructor (width, height, bg, fontSize, textAlign) {
		this.width = width;
		this.height = height;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	
	div() {

		let div = document.createElement('div'),
			mainBlockTitle = document.querySelector('.main-block-title');
		 	mainBlockTitle.appendChild(div);
		 	console.log(this.bg);
		 	console.log(this.fontSize);
		 	console.log(this.textAlign);
		 	div.textContent = 'default text';
		 	div.style.cssText = `background: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign};`;

		 	console.log(div.style.cssText)
	}

};

const creatDiv = new __options(90, 90, 'blue', 18, 'left');

creatDiv.div();
});


