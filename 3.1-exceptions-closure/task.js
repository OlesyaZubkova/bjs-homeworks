// task 1

function parseCount(x) {
    const parsed = Number.parseInt(x);
    if (isNaN(parsed)) {
        const parsedError = new Error("Невалидное значение");
        throw parsedError;
    } else {
        return parsed;
    };
};

function validateCount(y) {
    try {
        return parseCount(y);
    } catch (error) {
        return error;
    };
};

// task 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

    if (a + b < c || b + c < a || a + c < b) {
        const triangleError = new Error ("Треугольник с такими сторонами не существует");
        throw triangleError;
    };
    };

    getPerimeter() {
        const P = this.a + this.b + this.c;
        return P;
    };

    getArea() {
        const halfP = (this.a + this.b + this.c) * 0.5;
        const S = Math.sqrt(halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c));
        
        return Number(S.toFixed(3));
    };
};

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
} catch(e) {
    return {
        getPerimeter() {
            return "Ошибка! Треугольник не существует"
        },
        getArea() {
            return "Ошибка! Треугольник не существует"
        }
    };
};
};