const sum = require('./sol');

test('adds 1 + 2 to equal 3', () => {

    expect(sum(1, 2)).toBe(3);
    expect(sum(100, 300)).toBe(400);

});
