window.addEventListener('DOMContentLoaded',function() {

	let overlay = document.getElementsByClassName('overlay')[0],
		btn = document.querySelectorAll('.main-buttons .btn'),
		popup_btn = document.getElementsByClassName('popup-btn')[0],
		main = document.getElementsByClassName('main')[0],
		custom = document.getElementsByClassName('custom')[0],
		body = document.getElementsByTagName('body')[0];

	function hiddedElementsStart() {
		for(let i=0; i < btn.length; i++) {
			btn[i].style.display = "none";		
		}
		body.style.overflow = "hidden";
	}

	hiddedElementsStart();

	console.log(btn.length);

	popup_btn.addEventListener('click', ()=>{
		overlay.style.display = "none";
		body.style.overflow = "";
		main.style.display = "none";
		custom.classList.add('active');
	})



});
