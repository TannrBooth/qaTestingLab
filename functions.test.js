const {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
} = require('./functions.js')

test('This should return the number 2', () => {
    expect(returnTwo()).toEqual(2)
})


test('This should return "Hello, James" and "Hello, Jill"', () => {
    expect(greeting('James')).toEqual('Hello, James')
    expect(greeting('Jill')).toEqual('Hello, Jill')
})


test('This should return the number 3 and 14', () => {
    expect(add(1,2)).toEqual(3)
    expect(add(5,9)).toEqual(14)
})

describe('Testing Math Functions', () => {
    test('This should return 2 and 36', () => {
        expect(multiply(1,2)).toEqual(2)
        expect(multiply(3,6)).toEqual(18)
    })
    test('This should return 3 and 3', () => {
        expect(divide(6,2)).toEqual(3)
        expect(divide(9,3)).toEqual(3)
    })
    test('This should return 6 and 3', () => {
        expect(subtract(9,3)).toEqual(6)
        expect(subtract(10,7)).toEqual(3)
    })
})