/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 *
 */

function primes(n) {
  function isPrime(num) {
    if (num <= 2) {
      return false;
    }
    for (i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  function display(n) {
    let arr = [2];
    for (let i = 3; i < n; i++) {
      if (isPrime(i) === true) {
        arr.push(i);
      }
    }
    return arr; // use arr result on your own
  }

  // Напишите код здесь
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(18)); // [2, 3, 5, 7, 11, 13, 17]

// function isPrime(n) {
//   if (n <= 2) {
//     return false;
//   }
//   for (i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
