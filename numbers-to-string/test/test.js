var expect    = require("chai").expect;
var n2s = require("../app");

describe("Number-2-String converter", function() {
  describe("Sync conversion", function() {
    it("converts the [1,2,3,4,5,6,7,8]", function() {
		var numbers = [1,2,3,4,5,6,7,8];	// массив чисел для преобразования
		var str = n2s.n2s(numbers);
		expect(str).to.equal("1-8");
    });
    it("converts the [1,3,4,5,6,7,8]", function() {
		var numbers = [1,3,4,5,6,7,8];	// массив чисел для преобразования
		var str = n2s.n2s(numbers);
		expect(str).to.equal("1,3-8");
    });
    it("converts the [1,3,4,5,6,7,8,10,11,12]", function() {
		var numbers = [1,3,4,5,6,7,8,10,11,12];	// массив чисел для преобразования
		var str = n2s.n2s(numbers);
		expect(str).to.equal("1,3-8,10-12");
    });
    it("converts the [1,2,3]", function() {
		var numbers = [1,2,3];	// массив чисел для преобразования
		var str = n2s.n2s(numbers);
		expect(str).to.equal("1-3");
    });
    it("converts the [1,2]", function() {
		var numbers = [1,2];	// массив чисел для преобразования
		var str = n2s.n2s(numbers);
		expect(str).to.equal("1,2");
    });
    it("converts the [1,2,4]", function() {
		var numbers = [1,2,4];	// массив чисел для преобразования
		var str = n2s.n2s(numbers);
		expect(str).to.equal("1,2,4");
    });
    it("converts the [1,2,4,5,6]", function() {
		var numbers = [1,2,4,5,6];	// массив чисел для преобразования
		var str = n2s.n2s(numbers);
		expect(str).to.equal("1,2,4-6");
    });
    it("converts the [1,2,3,7,8,9,15,17,19,20,21]", function() {
		var numbers = [1,2,3,7,8,9,15,17,19,20,21];	// массив чисел для преобразования
		var str = n2s.n2s(numbers);
		expect(str).to.equal("1-3,7-9,15,17,19-21");
    });
    it("converts the [1,2,3,4,5,6,100,1091,1999,2000,2001,2002]", function() {
		var numbers = [1,2,3,4,5,6,100,1091,1999,2000,2001,2002];	// массив чисел для преобразования
		var str = n2s.n2s(numbers);
		expect(str).to.equal("1-6,100,1091,1999-2002");
    });
    it("converts the [1]", function() {
		var numbers = [1];	// массив чисел для преобразования
		var str = n2s.n2s(numbers);
		expect(str).to.equal("1");
    });
    it("converts the [1,3,5,7,9,11]", function() {
		var numbers = [1,3,5,7,9,11];	// массив чисел для преобразования
		var str = n2s.n2s(numbers);
		expect(str).to.equal("1,3,5,7,9,11");
    });	
  });
  
  describe("Async conversion", function() {
    it("converts the [1,2,3,4,5,6,7,8]", function() {
		var callback = function(str) {
			expect(str).to.equal("1-8");
		}
		var numbers = [1,2,3,4,5,6,7,8];	// массив чисел для преобразования
		var str = n2s.n2s(numbers,callback);
    });
    it("converts the [1,3,4,5,6,7,8]", function() {
		var callback = function(str) {
			expect(str).to.equal("1,3-8");
		}
		var numbers = [1,3,4,5,6,7,8];	// массив чисел для преобразования
		var str = n2s.n2s(numbers,callback);
    });
    it("converts the [1,3,4,5,6,7,8,10,11,12]", function() {
		var callback = function(str) {
			expect(str).to.equal("1,3-8,10-12");
		}
		var numbers = [1,3,4,5,6,7,8,10,11,12];	// массив чисел для преобразования
		var str = n2s.n2s(numbers, callback);
    });
    it("converts the [1,2,3]", function() {
		var callback = function(str) {
			expect(str).to.equal("1-3");
		}
		var numbers = [1,2,3];	// массив чисел для преобразования
		var str = n2s.n2s(numbers, callback);
    });
    it("converts the [1,2]", function() {
		var callback = function(str) {
			expect(str).to.equal("1,2");
		}
		var numbers = [1,2];	// массив чисел для преобразования
		var str = n2s.n2s(numbers, callback);
    });
    it("converts the [1,2,4]", function() {
		var callback = function(str) {
			expect(str).to.equal("1,2,4");
		}
		var numbers = [1,2,4];	// массив чисел для преобразования
		var str = n2s.n2s(numbers, callback);
    });
    it("converts the [1,2,4,5,6]", function() {
		var callback = function(str) {
			expect(str).to.equal("1,2,4-6");
		}
		var numbers = [1,2,4,5,6];	// массив чисел для преобразования
		var str = n2s.n2s(numbers, callback);
    });
    it("converts the [1,2,3,7,8,9,15,17,19,20,21]", function() {
		var callback = function(str) {
			expect(str).to.equal("1-3,7-9,15,17,19-21");
		}
		var numbers = [1,2,3,7,8,9,15,17,19,20,21];	// массив чисел для преобразования
		var str = n2s.n2s(numbers, callback);
    });
    it("converts the [1,2,3,4,5,6,100,1091,1999,2000,2001,2002]", function() {
		var callback = function(str) {
			expect(str).to.equal("1-6,100,1091,1999-2002");
		}
		var numbers = [1,2,3,4,5,6,100,1091,1999,2000,2001,2002];	// массив чисел для преобразования
		var str = n2s.n2s(numbers, callback);
    });
    it("converts the [1]", function() {
		var callback = function(str) {
			expect(str).to.equal("1");
		}
		var numbers = [1];	// массив чисел для преобразования
		var str = n2s.n2s(numbers, callback);
    });
    it("converts the [1,3,5,7,9,11]", function() {
		var callback = function(str) {
			expect(str).to.equal("1,3,5,7,9,11");
		}
		var numbers = [1,3,5,7,9,11];	// массив чисел для преобразования
		var str = n2s.n2s(numbers, callback);
    });	
  });
  
});