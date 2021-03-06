// import the function sfrom the index.js file
const { add, subtract, multiply, divide } = require('./index');

describe("Adding two numbers", () => {
    it("Should return the sum", () => {
        expect(add(9, 5)).toBe(14)
    })
})

describe("Subtract function", () => {
    it("Subtracting 2 number should return the difference", () => {
        expect(subtract(10, 1)).toBe(9)
    })
})

describe("Multiply function", () => {
    it("Should return the multiplied sum", () => {
        expect(multiply(7, 9)).toBe(63)
    })
})
