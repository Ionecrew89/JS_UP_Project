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
