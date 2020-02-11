'use strict';

var money = prompt('Ваш бюджет на месяц?','');
var time = prompt('Введите дату в формате YYYY-MM-DD', '');

var appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false

};

do {
	Entering();
} while ( typeof(a) === 'string'  && (typeof(a)) != null && (typeof(b)) != null
&& a != '' && b != '' && a.length <50 );




appData.moneyPerDay = appData.budget / 30;

alert('Ежедневыный бюджет:' + appData.moneyPerDay);

function Entering() {
	for (let i = 0; i <2; i++){
		let a = prompt('Введите обязательную статью расходов в этом месяце', '') ,
			b = prompt('Во сколько обойдется?','');
	
	if ( typeof(a) === 'string'  && (typeof(a)) != null && (typeof(b)) != null
		&& a != '' && b != '' && a.length <50 ){
	
		console.log('done');
		appData.expenses[a] = b;
	
		} else {
			console.log('Вы ввели недопустимые значения! Повторите ввод.');
			// return false;
		
		}
		
		
		
	
	
	};
	// return true;


}
