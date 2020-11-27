"use strict";

// first task

function getSolutions(a, b, c) {
const D = (Math.pow(b, 2) - 4 * a * c);

let x1;
let x2;

if (D < 0) {
    return {D: D, roots: [] };
} else if (D === 0) {
    x1 = (-b / (2 * a));
    return {D: D, roots: [x1]};
} else if (D > 0) {
    x1 = ((-b + Math.sqrt(D)) / (2 * a));
    x2 = ((-b - Math.sqrt(D)) / (2 * a));
    return {D: D, roots: [x1, x2]};
};

}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения: ${a}x² + ${b} + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.D < 0) {
        return (`Уравнение не имеет вещественных корней`);
    } else if (result.D === 0) {
        return (`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else if (result.D > 0) {
        return (`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    };
};

// second task 

function getAverageScore(data) {
  const result = {};
  const averageMark = [];

  for (let array in data) {
    result[array] = getAverageMark(data[array]);
    averageMark.push(getAverageMark(data[array]));
  }

  result.average = getAverageMark(averageMark);
  console.log(`Средняя оценка по всем предметам: ${result.average}`);

  function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
    }
    
    if (sum === 0) {
      return 0;
    } else {
        return sum / marks.length;
    };
  };
  return result;
};