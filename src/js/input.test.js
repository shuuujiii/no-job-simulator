import * as inputjs from './input';
describe('InputNumOnly', () => {
    test('InputNumOnly', () => {
        expect(inputjs.InputNumOnly("11a")).toBe("11");
    });

})

describe('InputComma', () => {
    test('number', () => {
        expect(inputjs.InputComma(1111)).toEqual("1,111")
    });
    test('string', () => {
        expect(inputjs.InputComma("1111")).toEqual("1,111")
    })
})
