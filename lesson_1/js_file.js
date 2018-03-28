var money = prompt('Ваш бюджет?', ''),
	name = prompt('Введите название своего магазина?', '');

var mainList = {
	budget: money, // тут ты должен написать только название переменной, в которую поместил ответ пользователя
	orgName: name, // тут ты должен написать только название переменной, в которую поместил ответ пользователя
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

var day = 30;
var budgetOneday = mainList.budget/day;

alert('Ваш бюджет на день состовляет: ' + budgetOneday);

console.log(mainList); //это нужно для тоо, чтобы в консоли увидеть весь объект с введенными в него новыми значениями)
