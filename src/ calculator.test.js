const { sum, subtraction, multiplication, division } = require('./calculator.js');

describe('Calculator functions', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    // test('subtracts 4 - 2 to equal 2', () => {
    //     expect(subtraction(4, 2)).toBe(2);
    // });

    // test('multiplies 3 * 4 to equal 12', () => {
    //     expect(multiplication(3, 4)).toBe(12);
    // });

    // test('divides 6 / 2 to equal 3', () => {
    //     expect(division(6, 2)).toBe(3);
    // });

    // test('throws error when dividing by zero', () => {
    //     expect(() => {
    //         division(6, 0);
    //     }).toThrow("Can't divide by zero");
    // });
});
