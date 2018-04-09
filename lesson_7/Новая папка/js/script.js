let btnOpen = document.getElementById('open-btn'),
	nameValue = document.querySelectorAll('.name-value')[0],
	budgetValue = document.querySelectorAll('.budget-value')[0],
	goodsValue = document.querySelectorAll('.goods-value')[0],
	itemsValue = document.querySelectorAll('.items-value')[0],
	employersValue = document.querySelectorAll('.employers-value')[0],
	discountValue = document.querySelectorAll('.discount-value')[0],
	isopenValue = document.querySelectorAll('.isopen-value')[0],
	productСategory = document.querySelectorAll('.goods-item'),
	goodsItemBtn = document.getElementsByTagName('button')[1],
	countBudgetBtn = document.getElementsByTagName('button')[2],
	hireEmployersBtn = document.getElementsByTagName('button')[3],
	chooseItem = document.querySelector('.choose-item'),
	timeValue = document.querySelector('#time'),
	countBudget = document.querySelector('#budget'),
	hireEmployersItem = document.querySelectorAll('.hire-employers-item');


let money,
	price,
	nameEmployer;


btnOpen.addEventListener('click', ()=>{

	setTimeout(start, 2000);

});

function start(){
	money = prompt("Ваш бюджет состовляет?", "");
	
	while(isNaN(money) || money === '' || money === null) {
		money = prompt("Ваш бюджет состовляет?", "");
	}
	budgetValue.textContent = money; 

	nameValue.textContent =  prompt("Введите название своего магазина", "");
}

goodsItemBtn.addEventListener('click', ()=>{
	
	for (let i=0; i<goodsItem.length; i++) {

		let a = goodsItem[i].value;
			
			if ((typeof(a) === 'string') && (typeof(a) !== null)) {
				mainList.chooseGoods[i] = a;
				console.log('+++++++++++++++++++');
				console.log(mainList.chooseGoods);
				console.log('+++++++++++++++++++');
				goodsValue.textContent = mainList.chooseGoods;
			} else {

				alert('Поле обязательно для заполнения');
				i = i - 1;
			}
			console.log(mainList);
		}
});

chooseItem.addEventListener('change', ()=>{

	let items = chooseItem.value;

	if (isNaN(items) && items !== '') {
		mainList.shopItems = items.split(',');
		mainList.shopItems.sort();
	}
	itemsValue.textContent = mainList.shopItems;
		
});

timeValue.addEventListener('change', ()=>{

	let time = timeValue.value;

	if (time < 0) {
		console.log('Такого быть не может');
		mainList.open = false;
	} else if (time > 8 && time < 20) {
			console.log('Время работать');
			mainList.open = true;
		} else if (time < 24) {
				console.log('Уже слишком поздно');
				mainList.open = false;
			} else {
					console.log('В сутках только 24 часа');
					mainList.open = false;
				}

	if(mainList.open === true){
		isopenValue.style.backgroundColor = 'green';
	} else {
		isopenValue.style.backgroundColor = 'red';
	}
});

countBudgetBtn.addEventListener('click', ()=>{
	countBudget.value = money / 30;
});

hireEmployersBtn.addEventListener('click', ()=>{

	for (let i=0; i<hireEmployersItem.length; i++) {

			let nameEmployer = hireEmployersItem[i].value;
		    mainList._employers[i] = nameEmployer;

		    employersValue.textContent += mainList._employers[i] + ',';
		}
});


let mainList = {
	_budget: money,
	_orgName: name,
	chooseGoods: [],
	_employers: [],
	open: false,
	discount: true,
	shopItems: [],

	discountSystem: function discountSystem() {
		if (mainList.discount === true) {
			price = (price * 80) / 100;
		}
		console.log('===========================');
		console.log(price);
	},

};












