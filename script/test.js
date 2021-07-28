const { greetings } = require('./logic.js')

describe('Should return Good Evening or Good Morning', () => {
    test('Should return Good Evening', () => {
        expect(greetings(13)).toBe('Good Evening');
    });
    test('Should return Good Morning', () => {
        expect(greetings(7)).toBe('Good Morning');
    });
    test('Should return Good Evening', () => {
        expect(greetings(17)).toBe('Good Evening');
    });
    test('Should return Good Morning', () => {
        expect(greetings(11)).toBe('Good Morning');
    });
});