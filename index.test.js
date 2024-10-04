const {multiply,divide}= require('./index')
// Test Suite
describe('Multiply function', () => {
    // Test case
    it('2 and 5 should return 10', () => {
        expect(multiply(2, 5)).toBe(10)
    })
    // Test case
    it('3 and 3 should return 9', () => {
        expect(multiply(3, 3)).toBe(9)
    })
    // Test case
    it('2 and 0 should return 0', () => {
        expect(multiply(2, 0)).toBe(0)
    })
    // Test case
    it('0 and 0 should return 0', () => {
        expect(multiply(0, 0)).toBe(0)
    })
    // Test case
    it('2 and -3 should return -6', () => {
        expect(multiply(2, -3)).toBe(-6)
    })
    // Test case
    it('-2 and -3 should return 6', () => {
        expect(multiply(-2, -3)).toBe(6)
    })
}
)


describe("Division function", () => {
    it("10 and 2 should return 5", () => {
        expect(divide(10, 2)).toBe(5)
    })
    it("10 and 5 should return 0", () => {
        expect(divide(10, 5)).toBe(2)
    })
    it("2 and -2 should return -1", () => {
        expect(divide(2, -2)).toBe(-1)
    })
    it("-2 and -2 should return 1", () => {
        expect(divide(-2, -2)).toBe(1)
    })
}
)

//why to use describe?
// The describe function is used to group test cases together. It is a way to organize your tests.
// The first argument to describe is a string that describes the group of test cases.
// The second argument is a function that contains the test cases.
// In the above example, we have a group of test cases for the multiply function.
// We have four test cases that test different aspects of the multiply function.