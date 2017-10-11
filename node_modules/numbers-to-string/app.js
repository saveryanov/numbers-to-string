console.log('N2S. Module initialized');

module.exports.n2s = function(numbers) {
	var output = "";
	if(Array.isArray(numbers)) {	// если numbers массив
		var is_dash_placed = false;	// флаг установки тире между двух чисел в строке
		numbers.forEach(function(item, i, numbers) {
			if(i == 0) {	// всегда добавляем первый элемент
				output += item;
				return;
			}
			
			if(item - numbers[i - 1] == 1) {	// если разница между соседними числами равна единице
				// добавляем тире, если оно не было установлено ранее
				if(!is_dash_placed) {
					output += "-";
					is_dash_placed = true;	// флаг тире в true
				}
				return;
			} else {	// иначе если не равна единице
				// если разница между текущим и предыдущим числом больше единицы, то добавляем в вывод текущее число и предыдущее
				if(is_dash_placed) {
					output += numbers[i - 1];
				}
				output += "," + item;
				is_dash_placed = false;
			}		
		});
	}
	return output;
}


