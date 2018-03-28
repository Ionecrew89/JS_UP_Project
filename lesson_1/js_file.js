

var mainList = {
	
	_budget: prompt("Ваш бюджет состовляет?", ""),
	_orgName: prompt("Введите название своего магазина", ""),
	shopGoods: [],
	employers: {
		name: 'Василий',
		position: 'Директор',
		year: '30'
	},
	open: true
};

mainList.shopGoods[0] = prompt("Какой тип товара будем продавать?", "");
mainList.shopGoods[1] = prompt("Какой тип товара будем продавать?", "");
mainList.shopGoods[2] = prompt("Какой тип товара будем продавать?", "");

var
budgetOneday = mainList._budget;
day = 30;

alert('Ваш бюджет на день состовляет: ' + budgetOneday/day);