
describe('Standalone test of Amok', ()=>{
	
	test('Simple concat',()=>{
		const concat = require("../amok.js")
		expect( concat("glenn","inn") ).toEqual("glenn inn");
	})

});