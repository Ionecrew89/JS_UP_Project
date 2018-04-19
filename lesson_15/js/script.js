window.addEventListener('DOMContentLoaded',function() {
// 1 card +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	let overlay = document.getElementsByClassName('overlay')[0],
		btn = document.querySelectorAll('.main-buttons .btn'),
		popup_btn = document.getElementsByClassName('popup-btn')[0],
		main = document.getElementsByClassName('main')[0],
		custom = document.getElementsByClassName('custom')[0],
		body = document.getElementsByTagName('body')[0],
		btn_ready = document.getElementById('ready'); 

		

	function hiddedElementsStart(_btn, _modal) {
		this._btn = _btn;
		this._modal = _modal;

		
		for(let i=0; i < btn.length; i++) {
			btn[i].style.display = _btn;		
		}
		
		// показываем/скрываем модальное окно
		if(_modal == 'none'){
			// отображение диалога
			overlay.style.display = 'none';
			// Убираем сролл если диалог открыт
			body.style.overflow = '';	
		} else {
			overlay.style.display = '';
			body.style.overflow = 'hidden';	
		}		
	}	
	// btn / modal // main / custom	
	hiddedElementsStart('none','');

	popup_btn.addEventListener('click', ()=>{
		hiddedElementsStart('','none');		
		
		main.style.display = 'none';
		custom.classList.add('active');

		radioChecked();

		slider();
	});


	

// 2 card +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let custom_info_form = document.getElementsByClassName('custom-info')[0],
	form_radio = document.getElementsByClassName('radio')[0]
		form_name_value = custom_info_form.querySelector('#name'),
		form_age_value = custom_info_form.querySelector('#age'),
		// Дефолтное значение пола
		form_radio_value = custom_info_form.querySelector('input[checked]'),
		form_radio_input = form_radio.getElementsByTagName('input'),
		form_select_value = custom_info_form.querySelector('#select'),
		form_bio_value = custom_info_form.querySelector('#bio'),
	// Карты на главной _________________________________________________________________
	main_cards = document.querySelector('.main-cards'),
	main_cards_it = document.getElementsByClassName('main-cards-item');
	main_cards_it_clon = main_cards_it[0].cloneNode(true),
	// Содержимое карт _________________________________________________
	candidate_block = document.getElementsByClassName('main-cards-item')[0],
	candidate_name = candidate_block.querySelector('.name'),
	candidate_age = candidate_block.querySelector('.age'),
	candidate_sex = candidate_block.getElementsByClassName('sex')[0],
	candidate_views = candidate_block.getElementsByClassName('views')[0],
	candidate_bio = candidate_block.getElementsByClassName('bio')[0];


	function radioChecked() { 


		for(let i = 0; i < form_radio_input.length; i++) {		


			form_radio_input[i].addEventListener('click', function() {

				// переключение радио в между полами
				if(this.hasAttribute('checked')) {

				} else {

					function checkedClear() {
						form_radio_input[0].removeAttribute('checked');
						form_radio_input[1].removeAttribute('checked');
					}
					checkedClear();
					this.setAttribute('checked', '');	
				}

				form_radio_value = this;

				
			});	
		}	
	}

	btn_ready.addEventListener('click', ()=>{

		// отображаем необходимые  элементы
		main.style.display = 'block';
		custom.classList.remove('active');
		hiddedElementsStart('block','none');

		// создаём карточку
		main_cards.insertBefore(main_cards_it_clon, main_cards_it[0]);

		// перенос данных из формы в карточку
		candidate_name.textContent = form_name_value.value;
		candidate_age.textContent = form_age_value.value + ' лет';
		candidate_sex.textContent = form_radio_value.value;
		candidate_views.textContent = form_select_value.value;
		candidate_bio.textContent = form_bio_value.value;
		let photo_new = document.getElementsByClassName('photo-1')[1];
		// photo_new.style.backgroundImage = showSlides;
	});


	// Slider ++++++++++++++++++++++++++++++++++++++++++++

	function slider() {

		let slideIndex = 1,
		slides = document.getElementsByClassName('preview')[0],
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next');
		// dotsWrap = document.querySelector('.slider-dots'),
		// dots = document.getElementsByClassName('dot');

		showSlides(slideIndex); 

		function showSlides(n) {
			let slideIMG_men = [
					'url("img/construct-5.png")',
					'url("img/construct-6.png")',
					'url("img/construct-7.png")',
					'url("img/construct-8.png")',
				],
				slideIMG_gerl = [	
					'url("img/construct-1.png")',
					'url("img/construct-2.png")',
					'url("img/construct-3.png")',
					'url("img/construct-4.png")'
				]

				// Фон слайдера в зависемости от пола	
					
				let person_easy = document.querySelector('.person-easy');
					
					if(form_radio_value.value == "Мужской") {

						var slideIMG = slideIMG_men;
						slides.style.backgroundImage = slideIMG_men[slideIndex-1];
						person_easy.style.backgroundImage = 'url("img/candidate-1.png")';	

						} else {

							var slideIMG = slideIMG_gerl;
							slides.style.backgroundImage = slideIMG_gerl[slideIndex-1];
							person_easy.style.backgroundImage = 'url("img/candidate-2.png")';	
					}	
				
				if(n > slideIMG.length) {
					slideIndex = 1;
				};

				if(n < 1) {
					slideIndex = slideIMG.length;
				};

				// for( let i = 0; i < slides.length; i++) {
				// 	slides[i].style.display = 'none';
				// };

				// for(let i = 0; i < dots.length; i++) {
				// 	form_radio_input[i].classList.remove('dot-active');
				// };
				
			
				slides.style.backgroundImage = slideIMG[slideIndex - 1];
				// dots[slideIndex - 1].classList.add('dot-active');
						}		
		
		alert(showSlides);
		function plusSlides(n) {
			showSlides(slideIndex += n)
			console.log(slideIndex + ' 1');
		}

		// function currentSlide(n) {

		// 	showSlides(slideIndex = n)
		// }

		prev.addEventListener('click', function(){
			plusSlides(-1);
			console.log(slideIndex + ' 2');
		});

		next.addEventListener('click', function(){
			plusSlides(1);
			console.log(slideIndex + ' 3');
		});

		// form_radio.addEventListener('click', function(){
		// 	for(let i = 0; i < dots.length + 1; i++) {
		// 		if(event.target.classList.contains('dot') && event.target == dots[i - 1]) {
		// 			currentSlide(i);
		// 		}
		// 	}
		// });
				
	}	
});
	


