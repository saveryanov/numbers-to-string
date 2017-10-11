console.log('N2S. Module initialized');
	
module.exports.n2s = function(numbers, callback) {
	
	// Функция преобразования (решение с бинарным поиском. логарифмическая сложность)
	var transform_bin = function() {
		var output = "";
		if(Array.isArray(numbers)) {	// если numbers массив
			
		}
		if(callback === undefined) {	// если указан callback, то вывод через него
			return output;
		} else {
			callback(output);
		}
	}
		
	// Функция преобразования (решение "в лоб". линейная сложность)
	var transform = function() {
		var output = "";
		if(Array.isArray(numbers)) {	// если numbers массив
			var interval_len = false;	// длинна интервала
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
						output += "-" + numbers[i - 1];
					}
					if(interval_len == 1) {
						output += "," + numbers[i - 1];
					}
					output += "," + item;
					interval_len = 0;
				}		
			});
			// закрываем найденный интервал если есть
			if(interval_len) {
				if(interval_len > 1) {
					output += "-" + numbers[numbers.length - 1];
				}
				if(interval_len == 1) {
					output += "," + numbers[numbers.length - 1];
				}
			}
		}
		if(callback === undefined) {	// если указан callback, то вывод через него
			return output;
		} else {
			callback(output);
		}
	}
		
	if(callback === undefined) {
		return transform();			// если не указан callback, то синхронный запуск с выводом через return
	} else {
		setImmediate(transform);	// если указан callback, то асинхронный запуск
	}
}


