
const fib = require("../fib.js");

describe('Test Suite for Fibonacci Function', ()=>{

	test('Minimum Fibonacci Case', () =>{
		expect( fib.fib(2) ).toBe(3)
	});
	
	test('Bigger Fibonacci Case', () =>{
		expect( fib.fib(10) ).toBe(55)
	});
});

describe('Test Suite for nFactorial Function', ()=>{

	test('Minimum nFactorial Case', ()=>{
		expect( fib.nfac(0) ).toBe(1)
	});
	
	test('Larger nFactorial Case', ()=>{
		expect( fib.nfac(5) ).toBe(120)
	});
});



describe('Test Suite for nSum Function', ()=>{

	test('Minimum nSum Case', ()=>{
		expect( fib.nsum(0) ).toBe(0)
	});
	
	test('Larger nSum Case', ()=>{
		expect( fib.nsum(5) ).toBe(15)
	});
});