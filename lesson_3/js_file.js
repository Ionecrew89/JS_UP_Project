let money,
	name,
	time,
	price,
	nameEmployer;

function employers() {

	for (let i=0; i<4; i++) {

		let nameEmployer = prompt("Имя вашего сотрудника?", "");
	    mainList.employers[i] = nameEmployer;
	    console.log(mainList.employers);
	}
};

function budget(){
	money = prompt("Ваш бюджет состовляет?", "");
	
	while(isNaN(money) || money === '' || money === null) {
		money = prompt("Ваш бюджет состовляет?", "");
	}
}

function start() {
	name = prompt("Введите название своего магазина", "");
	time = 21;
	price = 100000;
}


let mainList = {
	_budget: money,
	_orgName: name,
	shopGoods: [],
	employers: [],
	open: false,
	discount: true
};

employers();
budget();
start();


console.log(mainList.discount);

let
budgetOneday = mainList._budget;
day = 30;

alert('Ваш бюджет на день состовляет: ' + budgetOneday/day);

function shopGoods() {
	for (let i=0; i<3; i++) {

	let a = prompt("Какой тип товара будем продавать?", "");
		
		if ((typeof(a) === 'string') && (typeof(a) !== null)) {
			console.log('чет работает');
			mainList.shopGoods[i] = a;
			console.log(mainList.shopGoods);
		} else {

			alert('Поле обязательно для заполнения');
			i--;
		}
		console.log(mainList);
	}
}

shopGoods();

function workTime(time) {
	if (time < 0) {
		console.log('Такого быть не может');
	} else if (time > 8 && time < 20) {
			console.log('Время работать');
		} else if (time < 24) {
				console.log('Уже слишком поздно');
			} else {
					console.log('В сутках только 24 часа');
				}
}

workTime();



function discountSystem() {
	console.log(price);
	if (mainList.discount) {
		price = (price * 80) / 100;
	}
	console.log('===========================');
	console.log(price);
}

discountSystem();





