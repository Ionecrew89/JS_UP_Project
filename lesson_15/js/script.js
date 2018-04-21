window.addEventListener('DOMContentLoaded',function() {
// 1 card +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	let overlay = document.getElementsByClassName('overlay')[0],
		btn = document.querySelectorAll('.main-buttons .btn'),
		popup_btn = document.getElementsByClassName('popup-btn')[0],
		main = document.getElementsByClassName('main')[0],
		custom = document.getElementsByClassName('custom')[0],
		body = document.getElementsByTagName('body')[0],
		btn_ready = document.getElementById('ready'),
		main_cards_item = document.querySelectorAll('.main-cards-item')[0];

		// сбрасываем выделение кандлидата 
		main_cards_item.classList.remove('main-cards-item-active');


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
	

	// Выбор пола
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
				slider();
			});	
		}	
	}


	// Slider ++++++++++++++++++++++++++++++++++++++++++++
	// Переменная для передачи слайда в форму
	let _slideIMG = '';

	function slider() {

		let slideIndex = 1,
		slides = document.getElementsByClassName('preview')[0],
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next');

		showSlides(slideIndex); 

		function showSlides(n) {
			var slideIMG_men = [
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
				];

		// Контейнер слайдера			
		let person_easy = document.querySelector('.person-easy');
					
		// Выбор галереи 
		if(form_radio_value.value == "Мужской") {

			var slideIMG = slideIMG_men;
			slides.style.backgroundImage = slideIMG_men[slideIndex-1];	

			} else {

				var slideIMG = slideIMG_gerl;
				slides.style.backgroundImage = slideIMG_gerl[slideIndex-1]	
			}	
				
		if(n > slideIMG.length) {
			slideIndex = 1;
		};

		if(n < 1) {
			slideIndex = slideIMG.length;
		};
			
		slides.style.backgroundImage = slideIMG[slideIndex - 1];
		person_easy.style.backgroundImage = slideIMG[slideIndex - 1];

		_slideIMG = slideIMG[slideIndex - 1];
		}	

			
		
		function plusSlides(n) {
			showSlides(slideIndex += n)
			console.log(slideIndex + ' 1');
		}

		prev.addEventListener('click', function(){
			plusSlides(-1);
			console.log(slideIndex + ' 2');
		});

		next.addEventListener('click', function(){
			plusSlides(1);
			console.log(slideIndex + ' 3');
		});
	};	

	
	// Обнуление результатов голосования
	let progress_line = document.getElementsByClassName('progress-bar'),
		result_count = document.getElementsByClassName('result-count');

	function resultClean(height = 0, procent = 0) {
		this.height = height;
		this.procent = procent;

		for(let i = 0; i < progress_line.length; i++){
			progress_line[i].style.height = height + '%';
		};
		for(let i = 0; i < result_count.length; i++){
			result_count[i].textContent = procent + '%';
		};
	};


	// Создаем карточку и переносим все данные
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

		// перенос фото
		let photo_new = document.getElementsByClassName('photo-1')[1];
		photo_new.style.backgroundImage = _slideIMG;
		photo_new.style.backgroundSize = 'contain';

		// Очищаем результаты
		resultClean()
	});



	// Кнопка Сбросить результаты
	let btnReset = document.getElementById('reset'),
		btnVoting = document.getElementById('voting');
	

	btnReset.addEventListener('click', ()=>{

		hiddedElementsStart('','none');		
		
		main.style.display = 'none';
		custom.classList.add('active');

		main_cards_it_clon.remove();
	});

	btnVoting.addEventListener('click', ()=>{

		resultClean(70,70);
	});

});
	


