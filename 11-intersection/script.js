/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 *
 */

function intersection(arr1, arr2) {
  let result = arr1.filter(function (item) {
    return (item = arr2.includes(item));
  });
  return result;

  // let result = arr1.filter((item) => (item = arr2.includes(item)));
  // return result;

  //let arr3 = [];
  // for (i = 0; i < arr1.length; i++) {
  //   for (k = 0; k < arr2.length; k++) {
  //     if (arr1[i] == arr1[k]) {
  //       arr3.concat(arr1[i]);
  //     }
  //   }
  // }

  // Напишите код здесь
}

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []
