function getResult(a, b, c) {
    "use strict";

    let discriminant = (Math.pow(b, 2) - 4 * a * c);
    let array = [];

    if (discriminant < 0) {
        array;
    } else if (discriminant === 0) {
        let oneRoot = (-b / (2 * a));
        array.push(oneRoot);
    } else if (discriminant > 0) {
        let firstRoot = (-b + Math.sqrt(discriminant)) / (2 * a);
        array.push(firstRoot);
        let secondRoot = (-b - Math.sqrt(discriminant)) / (2 * a);
        array.push(secondRoot);
    }

    let result = array;
    return result;
}

function getAverageMark(marks) {
    marks.splice(5);
    
    if (marks.length === 0) {
      return 0;
    } else if (marks.length > 5) {
      console.log("Количество оценок больше 5!");
    } else {
      let sum = 0;
      let count = marks.length;
      for (let i = 0; i < count; i++) {
        sum += marks[i]
      };
      return sum / count;
    }
    let averageMark = sum / count;
    return averageMark;
}

function askDrink(name, dateOfBirthday) {

    dateOfBirthday = new Date(dateOfBirthday);
    let now = new Date();
    let age = now.getFullYear() - dateOfBirthday.getFullYear();
    let message;
    if (age >= 18) {
    message = (`Не желаете ли олд-фэшн, ${name}?`);
  } else if (age < 18) {
    message = (`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
  }
  return message;
}