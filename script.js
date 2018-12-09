let budget, date;

function start() {
     budget = +prompt("Ваш бюджет на месяц?", '');
     date = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(budget) || budget == "" || budget == null) {
        budget = +prompt("Ваш бюджет на месяц?", '');
        break;
    }

}

start();


let appData = {
    budget: budget,
    expenses: {},
    income: [],
    timeData: date,
    savings: true,
    optionalExpenses: {}
};

    function chooseExpenses() {
        for (i = 0; i < 2; i++) {
            let  a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                 b = prompt("Во сколько обойдется?", '');
        
            if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
                 && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses [a] = b;
            }
        }
    }
    chooseExpenses();
    

    function detectDayBudget() {
        
        appData.moneyPerDay = (appData.budget / 30).toFixed();  

        alert("Ежедневный бюджет: " + appData.moneyPerDay); 
    }

    detectDayBudget();

    function checkSavings() {
        if(appData.savings == true) {
            let save = +prompt("Какова сумма накоплений");
                percent = +prompt ("Под какой процент?");
            
            appData.monthIncome = save/100*12*percent
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    }

    checkSavings();

    function detectLevel() {
       
        if (appData.moneyPerDay < 100) {
            console.log("Низкий уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        } 
    }

    detectLevel();


    function chooseOptExpenses() {
        for (let g = 1; g <= 3; g++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[g] = questionOptExpenses;
            console.log(questionOptExpenses);
        }
        
    }

    chooseOptExpenses();