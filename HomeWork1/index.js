function detectDayBudget() {
  let money, time;

  function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
      money = +prompt("Ваш бюджет на месяц?");
    }
  }
  start();

  let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
  };

  function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце");
      var b = prompt("Во сколько обойдется?");

      if (
        typeof a === "string" &&
        typeof a != null &&
        typeof b != null &&
        a != "" &&
        b != ""
      ) {
        appData.optionalExpenses[a] = b;
      } else {
        i--;
      }
    }
  }
  chooseExpenses();

  function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
      let a = prompt("Введите необязательную статью расходов в этом месяце");
      let b = i + 1;

      if (
        typeof a === "string" &&
        typeof a != null &&
        typeof b != null &&
        a != "" &&
        b != ""
      ) {
        appData.expenses[b] = a;
      } else {
        i--;
      }
    }
  }
  chooseOptExpenses();

  /*let i = 0;
do {
    i = i++;
    var a = prompt("Введите обязательную статью расходов в этом месяце");
    var b = prompt("Во сколько обойдется?");

    appData.expenses[a] = b;
} while ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
    a != " " && b != " ") 
*/

  /*while ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
    a != " " && b != " ") {
        let i=0;
        i = i++;
        var a = prompt("Введите обязательную статью расходов в этом месяце");
        var b = prompt("Во сколько обойдется?");

    }
*/

  appData.moneyPerDay = (appData.budget / 30).toFixed();

  alert("Ежедневный бюджет: " + appData.moneyPerDay);

  function detectLevel() {
    if (appData.moneyPerDay < 1000) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 3000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 3000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произвошла какая то ошибка");
    }
  }
  detectLevel();

  console.log(appData);

  function checkSavings() {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");

      appData.monthIncome = (save / 100 / 12) * percent;
      alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
    }
  }

  checkSavings();
}

detectDayBudget();
