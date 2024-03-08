// 1. Обработка неизвестного массива: Напишите функцию sumNumbers,
// которая принимает массив типа unknown и возвращает сумму всех чисел в массиве.
// Если элемент не является числом, он должен быть проигнорирован.

function sumNumbers(arr: unknown[]): number {
  var sum = 0;

  arr.forEach((num) => {
    if (typeof num != "number") return;
    sum += num;
  });

  return sum;
}

const numbers = [5, "a", 10, "a", 15, "a", 20];
console.log(sumNumbers(numbers));


// 2. Определите интерфейс Product, который содержит поля id (тип number),
// name (тип string), и price (тип number). Сделайте поле price опциональным.
// Создайте несколько объектов продуктов с разными комбинациями полей.

interface Product {
  id: number;
  name: string;
  price?: number;
}

let oranges: Product = {
  id: 1,
  name: "orange",
  price: 100,
};

let apple: Product = {
  id: 2,
  name: "apple",
};

// 3. Типы массивов: Создайте массив чисел и используйте цикл для вывода каждого числа в консоль.

const arrNumber: number[] = [1, 2, 3, 4, 5];

for (let i = 0; i != arrNumber.length; i++) {
  console.log(arrNumber[i]);
}

// 4. Дженерики: Напишите функцию identity, которая возвращает переданное ей значение любого типа.

export function identity<T>(x: T): T {
  return x;
}

// 5. Типы для работы с объектами: Напишите функцию,
// которая принимает объект с полями name и age и возвращает строку, содержащую имя и возраст.

type PersonType = { name: string; age: number };
export function getPersonData({ name, age }: PersonType): string {
  return `Имя ${name} возраст ${age}`;
}
