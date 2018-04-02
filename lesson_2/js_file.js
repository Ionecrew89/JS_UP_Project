var money = +prompt("Ваш бюджет состовляет?", ""),
	name = prompt("Введите название своего магазина", "");

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
	
	if ((typeof(a) === 'string') && (typeof(a) !== null)) {
		console.log('чет работает');
		mainList.shopGoods[i] = a;
	} else {

		alert('Поле обязательно для заполнения');
	}
	console.log(mainList);
}

// 1 - вариант

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// num = 0;
// while(num < 3) {

// let a = prompt("Какой тип товара будем продавать?", "");

// if ((typeof(a) === 'string') && (typeof(a) !== null)) {
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

// 	if ((typeof(a) === 'string') && (typeof(a) !== null)) {
// 			mainList.shopGoods[num] = a;
// 		}
// 	num++;
// 	console.log(mainList.shopGoods);
// }

// while(num < 3);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++