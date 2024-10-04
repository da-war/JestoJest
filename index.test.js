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
    it("10 and 0 should return Infinity", () => {
        expect(divide(10, 0)).toBe(Infinity)
    })

    it("-2 and -2 should return 1", () => {
        expect(divide(-2, -2)).toBe(1)
    })
}
)


//test for objects 

describe("objects", () => {
    it("two objects that are equal", () => {
        const obj = { a: 1, b: 2 };
        expect(obj).toEqual({ a: 1, b: 2 });
    }
    )
}
)

describe("truthiness", () => {
    it("null", () => {
        const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).toBeFalsy();
    }
    )
    it("zero", () => {
        const z = 0;
        expect(z).not.toBeNull();
        expect(z).toBeDefined();
        expect(z).not.toBeUndefined();
        expect(z).toBeFalsy();
    }
    )
}
)


describe("numbers", () => {
    value = 3 + 3
    it("should be greater than 5", () => {
        expect(value).toBeGreaterThan(5)
    }
    )
    it("should be greater than or equal to 6", () => {
        expect(value).toBeGreaterThanOrEqual(6)
    }
    )
    it("should be less than 7", () => {
        expect(value).toBeLessThan(7)
    }
    )
    it("should be less than or equal to 6", () => {
        expect(value).toBeLessThanOrEqual(6)
    }
    )
    it("should be 6", () => {
        expect(value).toBe(6)
    }
        
    )
}
)



//string
describe("strings", () => {
    it("should contain 'world'", () => {
        expect("hello world").toMatch(/world/)
    }
    )
    it("should not contain 'world'", () => {
        expect("hello").not.toMatch(/world/)
    }
    )
}
)

//float
describe("float", () => {
    it("should be 0.1", () => {
        expect(0.1 + 0.2).toBeCloseTo(0.3)
    }
    )
}
)

//toBeNull() matches only null
//toBeUndefined() matches only undefined
//toBeDefined() is the opposite of toBeUndefined()
//toBeTruthy() matches anything that an if statement treats as true
//toBeFalsy() matches anything that an if statement treats as false

// tobedefined means it'll will be defined in future but now it's null right? Yes or No ? 
//ans: No, toBeDefined means it is defined and not null or undefined.





//why to use describe?
// The describe function is used to group test cases together. It is a way to organize your tests.
// The first argument to describe is a string that describes the group of test cases.
// The second argument is a function that contains the test cases.
// In the above example, we have a group of test cases for the multiply function.
// We have four test cases that test different aspects of the multiply function.