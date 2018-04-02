var money = +prompt("Ваш бюджет состовляет?", ""),
	name = prompt("Введите название своего магазина", ""),
	time = 21;
var mainList = {
	_budget: money,
	_orgName: name,
	shopGoods: [],
	employers: {
		name: 'Василий',
		position: 'Директор',
		year: '30'
	},
	open: true
};

// mainList.shopGoods[0] = prompt("Какой тип товара будем продавать?", "");
// mainList.shopGoods[1] = prompt("Какой тип товара будем продавать?", "");
// mainList.shopGoods[2] = prompt("Какой тип товара будем продавать?", "");

var
budgetOneday = mainList._budget;
day = 30;

alert('Ваш бюджет на день состовляет: ' + budgetOneday/day);


for (let i=0; i<3; i++) {

let a = prompt("Какой тип товара будем продавать?", "");
	
	if ((typeof(a) === 'string') && (typeof(a) != null)) {
		console.log('чет работает');
		mainList.shopGoods[i] = a;
		console.log(mainList.shopGoods);
	} else {

		alert('Поле обязательно для заполнения');
		i = i - 1;
	}
	console.log(mainList);
}

// 1 - вариант

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// num = 0;
// while(num < 3) {

// let a = prompt("Какой тип товара будем продавать?", "");

// if ((typeof(a) === 'string') && (typeof(a) != null)) {
// 		mainList.shopGoods[num] = a;
// 	}

// num++;
// console.log(mainList.shopGoods);
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2 - вариат

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// num = 0;

// do {
// 	let a = prompt("Какой тип товара будем продавать?", "");

// 	if ((typeof(a) === 'string') && (typeof(a) != null)) {
// 			mainList.shopGoods[num] = a;
// 		}
// 	num++;
// 	console.log(mainList.shopGoods);
// }

// while(num < 3);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

if (time < 0) {
	console.log('Такого быть не может');
} else if (time > 8 && time < 20) {
		console.log('Время работать');
	} else if (time < 24) {
			console.log('Уже слишком поздно');
		} else {
				console.log('В сутках только 24 часа');
			}