let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

let necessarily1 = prompt("Введите обязательную статью расходов в этом месяце");
let howMuch1 = prompt("Во сколько обойдется?");

appData.expenses[necessarily1] = howMuch1;


let necessarily2 = prompt("Введите обязательную статью расходов в этом месяце");
let howMuch2 = prompt("Во сколько обойдется?");

appData.expenses[necessarily2] = howMuch2;

let result = (money - howMuch1 - howMuch2) / 30;

alert(result);