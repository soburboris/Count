'use strict';
var money, time;


function start() {
	money = +prompt('Ваш бюджет на месяц?', '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while (isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет на месяц?', '');

	}


}
start();



var appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	chooseExpenses: function () {
		for (var i = 0; i < 2; i++) {
			var a = prompt('Введите обязательную статью расходов в этом месяце', ''),
				b = prompt('Во сколько обойдется?', '');

			if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
				a != '' && b != '' && a.length < 50) {

				console.log('done');
				appData.expenses[a] = b;

			} else {
				console.log('Вы ввели недопустимые значения! Повторите ввод.');
				i = i - 1;


			}


		}

	},
	detectDayBudget: function () {
		appData.moneyPerDay = (appData.budget / 30).toFixed();

		alert('Ежедневыный бюджет:' + appData.moneyPerDay);


	},
	detectLevel: function() {
		if (appData.moneyPerDay < 100) {
			console.log('Минимальный уровень достатка!');
	
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log('Средний уровень достатка!');
		} else if (appData.moneyPerDay > 100) {
			console.log('Высокий уровень достатка!');
		} else {
			console.log('Ошибка!');
		}

	},
	checkSaving:function() {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?"),
				percent = +prompt("Под какой процент?");
	
			appData.monthIncome = save / 100 / 12 * percent;
			alert("Доход в месяц с депозита, составляет: " + appData.monthIncome);
		}

	},
	chooseOptExpenses: function() {

		for (var i = 1; i < 4; i++) {
			let questsion = confirm("Статья необязательных расходов?");
			if (questsion) {
				appData.optionalExpenses[i] = 'Yes';
			} else {
				appData.optionalExpenses[i] = 'No';
			}
	
	
		}
	}

};

