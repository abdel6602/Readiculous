const {add, subtract} = require('../Controllers/sampleController')

test('testing addition' ,  () => {
    expect(add(2, 3)).toBe(5)
});

test('testing subtraction' ,  () => {
    expect(subtract(3, 2)).toBe(1)
});