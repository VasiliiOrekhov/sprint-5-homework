/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
  const arr = str.split(' ');
  const newArr = arr.map(function (item) {
    return item.toString()[0].toUpperCase() + item.toString().substr(1);
  });
  return newArr.join(' ');
}

// Напишите код здесь

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
