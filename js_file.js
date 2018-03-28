var budgetQuestion = prompt("Ваш бюджет состовляет?")
	orgName = prompt("Введите название своего магазина")

var mainList = {
	_budget: '30000',
	_orgName: 'ТоргСклад',
	shopGoods: ["двери", "наличники"],
	employers: {
		name: 'Василий',
		position: 'Директор',
		year: '30'
	}
}

var shopGoods=[] 
shopGoodsDialog = prompt("Какой тип товара будем продавать?");
shopGoods.push(shopGoodsDialog);
shopGoodsDialog = prompt("Какой тип товара будем продавать?");
shopGoods.push(shopGoodsDialog);
shopGoodsDialog = prompt("Какой тип товара будем продавать?");
shopGoods.push(shopGoodsDialog);

console.log(shopGoods);

console.log(typeof(budgetQuestion));	

var budget = Number(budgetQuestion);

console.log(typeof(budget));

budgetOneDay = budget / 30;

alert('Ваш бюджет на день состовляет: ' + budgetOneDay);