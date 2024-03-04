"use strict";
// 1. Обработка неизвестного массива: Напишите функцию sumNumbers,
// которая принимает массив типа unknown и возвращает сумму всех чисел в массиве.
// Если элемент не является числом, он должен быть проигнорирован.
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPersonData = exports.identity = void 0;
function sumNumbers(arr) {
    var sum = 0;
    arr.forEach(function (num) {
        if (typeof num != "number")
            return;
        sum += num;
    });
    return sum;
}
var numbers = [5, "a", 10, "a", 15, "a", 20];
console.log(sumNumbers(numbers));
var oranges = {
    id: 1,
    name: "orange",
    price: 100,
};
var apple = {
    id: 2,
    name: "apple",
};
// 3. Типы массивов: Создайте массив чисел и используйте цикл для вывода каждого числа в консоль.
var arrNumber = [1, 2, 3, 4, 5];
for (var i = 0; i != arrNumber.length; i++) {
    console.log(arrNumber[i]);
}
// 4. Дженерики: Напишите функцию identity, которая возвращает переданное ей значение любого типа.
function identity(x) {
    return x;
}
exports.identity = identity;
function getPersonData(_a) {
    var name = _a.name, age = _a.age;
    return "\u0418\u043C\u044F ".concat(name, " \u0432\u043E\u0437\u0440\u0430\u0441\u0442 ").concat(age);
}
exports.getPersonData = getPersonData;
