/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 *
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
 */

function findVowels(str) {
  const array = str.toLowerCase().split('');
  const arrayFilter = array.filter(
    (word) =>
      word == 'а' ||
      word == 'я' ||
      word == 'о' ||
      word == 'ё' ||
      word == 'у' ||
      word == 'ю' ||
      word == 'ы' ||
      word == 'и' ||
      word == 'э' ||
      word == 'е'
  );
  return arrayFilter.length;

  // Напишите код здесь
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здрАвствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3
