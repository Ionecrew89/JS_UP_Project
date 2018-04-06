let money,
	name,
	time,
	price,
	nameEmployer;





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
	chooseGoods: [],
	employers: [],
	open: false,
	discount: true,
	shopItems: [],

	emploers: function employers() {

		for (let i=0; i<4; i++) {


			let nameEmployer = prompt("Имя вашего сотрудника?", "");
		    mainList.nameEmployer[i]=nameEmployer;
		}
	},

	chooseGoods: function chooseGoods() {

		for (let i=0; i<3; i++) {

		let a = prompt("Какой тип товара будем продавать?", "");
			
			if ((typeof(a) === 'string') && (typeof(a) !== null) && a !== '') {
				mainList.chooseGoods[i] = a;
				console.log(mainList.chooseGoods);
			} else {

				alert('Поле обязательно для заполнения');
				i = i - 1;
			}
			console.log(mainList);
		}
	},

	discountSystem: function discountSystem() {
		if (mainList.discount === true) {
			price = (price * 80) / 100;
		}
		console.log('===========================');
		console.log(price);
	},

	budgetOneDay: function budgetOneDay() {
		let _budgetOneDay = mainList._budget;
			day = 30;

		alert('Ваш бюджет на день состовляет: ' + _budgetOneDay/day);
	},

	chooseShopItems: function chooseShopItems() {
					
		for(i=0; i<1; i++) {

			let items = prompt('Перечислите через запятую товары', '');


			if ((typeof(items) === 'string') && (typeof(items) !== null) && items !== '') {
				mainList.shopItems = items.split(',');
				mainList.shopItems.push(prompt('Подождите, еще', ''));
				mainList.shopItems.sort();
				console.log(mainList.shopItems)
			}  else {
				console.log('мими')
			let items = prompt('Перечислите через запятую товары', '');	
			i--;			
		 	}
		};
	} 
};

for (let key in mainList) {
	 console.log("Наш магазин включает в себя:" + key+ '-' + mainList[key]);
}

	
mainList.chooseShopItems();

mainList.shopItems.forEach(function(item,i) {
	i++;
	alert('У нас вы можете купить:'+ i + ' - ' + item);
});









