// import the function sfrom the index.js file
const {add} = require('./index');

describe("Adding two numbers", () => {
    it("Should return the sum", ()=> {
        expect(add(9,5)).toBe(14)               
    })
})



