"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {

    if (isNaN(percent)) {
        return (`Параметр "Процентная ставка" содержит неправильное значение ${percent}`);
    };

    if (isNaN(contribution)) {
        return (`Параметр "Начальный взнос" содержит неправильное значение ${contribution}`);
    };

    if (isNaN(amount)) {
        return (`Параметр "Общая стоимость" содержит неправильное значение ${amount}`);
    };
    

    let S = amount - contribution;
    let p = percent / 1200;
    let n = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date ().getMonth());

    let monthPayment = S * (p + p / ((Math.pow((1 + p), n)) - 1));
    let payment = monthPayment * n;

    return Number(payment.toFixed(2)); 
}

function getGreeting(name) {
    if (name) {
        return  (`Привет, мир! Меня зовут ${name}.`);
    } else {
        return (`Привет, мир! Меня зовут Аноним.`);
    }
}