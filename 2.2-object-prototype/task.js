// task 1

String.prototype.isPalindrome = function isPalindrome() {

    const usualString = this.toLowerCase().split(" ").join("");
    const reverseString = this.toLowerCase().split("").reverse().join("").replace(/[ ,\.]/g,'');

    if (usualString === reverseString) {
        return true;
    } else {
        return false;
    };
};

// task 2

function getAverageMark(marks) {

    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
    };

    const roundedAverage = Math.round(sum / marks.length);

    if (sum === 0) {
      return 0;
    } else {
      return roundedAverage;
    };
};

// task 3

function checkBirthday(birthday) {

    const now = Date.now();
    birthday = new Date(birthday).getTime();
    const diff = now - birthday;
    const age = diff / (24 * 3600 * 365.25 * 1000);

    return age > 18;
};