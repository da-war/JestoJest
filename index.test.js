const multiply= require('./index')
// Test Suite
test("2 and 5 should return 10", () => {
    expect(multiply(2,5)).toBe(10)
}
)
test("2 and 5 should return 10", () => {
    expect(multiply(2,5)).not.toBe(5)
}
)


