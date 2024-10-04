import { add, subtract, multiply, divide } from './mathUtils.js'

function calculate(a, b, operation) {
    switch(operation) {
        case 'add':
            return add(a, b)
        case 'subtract':
            return subtract(a, b)
        case 'multiply':
            return multiply(a, b)
        case 'divide':
            return divide(a, b)
        default:
            return 'Invalid operation'
    }
}

export { calculate }
