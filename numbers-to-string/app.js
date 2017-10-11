// number-to-string convert function
module.exports.n2s = function(numbers, is_bin_search, callback) {
	if(is_bin_search === undefined || !is_bin_search) {
		// Функция преобразования. 
		// Простое решение "в лоб" 
		// Сложность: линейная
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
	} else {
		// Функция преобразования. 
		// Решение посложнее на основе алгоритма бинарного поиска 
		// Сложность: логарифмическая
		// Работает быстрее, значительно лучше при больших массивах чисел
		var transform = function() {
			var output = "";
			if(Array.isArray(numbers)) {	// если numbers массив
				output += numbers[0]; // фиксируем первый элемент
				var last_elem_i = numbers.length - 1;
				
				var interval_start = 0;
				var interval_end = 0;
				
				var first_i = 0;
				var last_i = Math.ceil(last_elem_i/2);
				
				while(interval_end != last_elem_i) {
					console.log(numbers[last_i] + " ind=" + last_i);

					if((last_i - first_i) == (numbers[last_i] - numbers[first_i])) {	// если разница в индексах равна разнице в значениях, то это интервал
						if((last_i) == last_elem_i || (numbers[last_i + 1] - numbers[last_i]) > 1) {	// если следующий элемент больше текущего больше чем на 1, то конец
							interval_end = last_i;
							if(interval_end - interval_start > 1) {
								output += "-";
							} else {
								output += ",";
							}
							if(last_i != first_i) {
								output += numbers[last_i];
							}
							interval_start = interval_end;
							first_i = last_i + 1;
							last_i = last_i + 1 + Math.ceil((last_elem_i - last_i)/2);	// делаем шаг на половину вправо
						} else {
							first_i = last_i;
							last_i = last_i + Math.ceil((last_elem_i - last_i)/2);	// делаем шаг на половину вправо							
						}
					} else {
						last_i -= Math.ceil((last_elem_i - last_i)/2);	// делаем шаг на половину влево
					}
				}
			}
			if(callback === undefined) {	// если указан callback, то вывод через него
				return output;
			} else {
				callback(output);
			}
		}
	}
	// Обработка вывода
	if(callback === undefined) {
		return transform();		// если не указан callback, то синхронный запуск с выводом через return
	} else {
		setImmediate(transform);	// если указан callback, то асинхронный запуск
	}
}


