let userAge = document.getElementById('age');

userAge.addEventListener('change', ()=>{

	function showUser(surname, name) {

		let age = {
			value: document.getElementById('age').value,
			alert: function () {

			    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
			}
		};

		age.alert();	
	}

	showUser('Трифонов', 'Виниамин');
});

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