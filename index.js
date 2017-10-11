/**
 * n2s() преобразует массив целых чисел в строку.
 * Может быть запущена как синхронно, так и асинхронно. 
 * Для асинхронного запуска требуется передать функцию callback вторым аргументом.
 */

var n2s = require('numbers-to-string'); // подгружаем модуль n2s

var numbers = [1, 2, 4, 5, 6, 7];	// массив чисел для преобразования

// асинхронный запуск
// функция, которая будет запущена после асинхронного выполнения
//var callback = function(str) {
//	console.log('Async.');
//	console.log(str);
//}
//n2s.n2s(numbers, 0, callback);

// синхронный запуск
var str = n2s.n2s(numbers, 1);				
console.log('Sync.');
console.log(str);
