// number-to-string convert function
// Простое решение "в лоб"
module.exports.n2s = function(numbers, callback) {
	// Функция преобразования. 
	var transform = function() {
		var output = "";
		if(Array.isArray(numbers)) {	// если numbers массив
			var interval_len = false;	// длина интервала
			numbers.forEach(function(item, i, numbers) {
				if(i == 0) {	// всегда добавляем первый элемент
					output += item;
					return;
				}
				if(item - numbers[i - 1] == 1) {	// если разница между соседними числами равна единице
					interval_len++;	// фиксируем длинну интервала
					return;
				} else { // иначе если не равна единице
					if(interval_len > 1) {
						output += "-" + numbers[i - 1];	// подставляем тире только если длина интервала > 1
					}
					if(interval_len == 1) {
						output += "," + numbers[i - 1];	// иначе подставляем запятую
					}
					output += "," + item;	// фиксируем начало нового интервала
					interval_len = 0;		// обнуляем длинну
				}		
			});
			// закрываем найденный интервал (если такой есть)
			if(interval_len) {
				if(interval_len > 1) {
					output += "-" + numbers[numbers.length - 1];	// с тире если длина > 1
				} else {
					output += "," + numbers[numbers.length - 1];	// иначе с запятой
				}
			}
		}
		if(callback === undefined) {	// если указан callback, то вывод через него
			return output;
		} else {
			callback(output);
		}
	}

	// Обработка вывода
	if(callback === undefined) {
		return transform();		// если не указан callback, то синхронный запуск с выводом через return
	} else {
		setImmediate(transform);	// если указан callback, то асинхронный запуск
	}
}

// number-to-string convert function (with binary search)
// Решение посложнее на основе алгоритма бинарного поиска 
// Работает быстрее для больших массивов чисел в которых преимущественно длинные серии
module.exports.n2s_bin = function(numbers, callback) {
	// Функция преобразования. 
	var transform = function() {
		var output = "";
		if(Array.isArray(numbers)) {	// если numbers массив
			if(numbers.length == 1) {	// если всего 1 элемент в массиве, то сразу возвращаем строку
				output += numbers[0];
			} else {
				// инициализация бинарного поиска
				var last_elem_i = numbers.length - 1;
				var interval_start = 0;
				var interval_end = 0;
				
				var first_i = 0;
				var last_i = Math.ceil(last_elem_i/2);	// выбираем середину массива
				while(interval_end != last_elem_i) {	
					if((last_i - interval_start) == (numbers[last_i] - numbers[interval_start])) {	// если разница в индексах равна разнице в значениях, то это интервал
						if(((last_i) == last_elem_i) || ((numbers[last_i + 1] - numbers[last_i]) > 1)) {	// если следующий элемент больше текущего больше чем на 1, то конец
							interval_end = last_i;
							if(interval_start != 0) {	// если не первый элемент, то между интервалами рисуем запятую
								output += ",";
							}
							output += numbers[interval_start];	// записываем начало интервала
							if(interval_end - interval_start > 1) {	// если длина интервала > 1, то тире
								output += "-";
							} else if(interval_end - interval_start == 1){	// если длина интервала == 1, то запятая
								output += ",";
							}
							if(last_i != first_i) {	// если интервал длиной 0, то не повторяем число
								output += numbers[last_i];
							}
							// фиксируем новый интервал
							interval_start = interval_end + 1;
							first_i = interval_start;
						} else {
							first_i = last_i; // фиксируем начало рассматриваемого интервала
						}
						last_i += Math.ceil((last_elem_i - last_i)/2);	// делаем шаг на половину интервала вправо							
					} else {
						last_i -= Math.ceil((last_i - first_i)/2);	// делаем шаг на половину интервала влево
					}
				}					
			}
		}
		if(callback === undefined) {	// если указан callback, то вывод через него
			return output;
		} else {
			callback(output);
		}
	}
	// Обработка вывода
	if(callback === undefined) {
		return transform();		// если не указан callback, то синхронный запуск с выводом через return
	} else {
		setImmediate(transform);	// если указан callback, то асинхронный запуск
	}
}



