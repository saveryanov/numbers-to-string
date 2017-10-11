/**
 * n2s() преобразует массив целых чисел в строку.
 * Может быть запущена как синхронно, так и асинхронно. 
 * Для асинхронного запуска требуется передать функцию callback вторым аргументом.
 */

var n2s = require('numbers-to-string'); // подгружаем модуль n2s

var numbers = [1, 2, 3, 5, 6, 10, 20, 21, 22, 23, 1000];	// массив чисел для преобразования

// Простое решение:

// асинхронный запуск
// функция, которая будет запущена после асинхронного выполнения
var callback_simple = function(str) {
	console.log('Async.');
	console.log(str);
}
n2s.n2s(numbers, callback_simple);

// синхронный запуск
var str = n2s.n2s(numbers);				
console.log('Sync.');
console.log(str);


// Решение с бинарным поиском

// асинхронный запуск
// функция, которая будет запущена после асинхронного выполнения
var callback_binary = function(str) {
	console.log('Async. Binary search.');
	console.log(str);
}
n2s.n2s_bin(numbers, callback_binary);

// синхронный запуск
var str = n2s.n2s_bin(numbers);				
console.log('Sync. Binary search.');
console.log(str);
