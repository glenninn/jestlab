const concat = require("../amok")
const makeUser = require("../newUser")

jest.mock("../amok");


describe('New User Testing', ()=>{
	
	test('Mock new user, this fails', ()=> {
		concat.mockImplementation( ()=>"first last");
		expect( makeUser("glenn","inn") ).toEqual( {name:"glenn inn",mdy : ""} )
		
	});
		
	test('Mock new user, passes', ()=> {
		concat.mockImplementation( ()=>"first last");
		expect( makeUser("glenn","inn") ).toEqual( {name:"first last",mdy : ""} )
		
	});
});
