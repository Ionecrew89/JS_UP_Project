
function showUser(surname, name) {

	let age = {
		value: document.getElementById('age').value,
		alert: function () {

		    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
		}
	}

	age.alert();	
}
 
showUser('Трифонов', 'Виниамин');

let userAge = document.getElementById('age');
console.log(userAge);

userAge.addEventListener('change', ()=>{
	showUser('Трифонов', 'Виниамин');
}
