const sun=require('../Controllers/sum')

test('adds 1 + 2 to equal 3', () => {
    expect(sun(1, 2)).toBe(3);
  }
);
