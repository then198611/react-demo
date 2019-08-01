import sum from '../sum'

test('adds 1 + 2 to equal 3',() => {
  expect(sum(1, 2)).toBe(3)
})

test('浮点相加', () => {
  const value = 0.1 + 0.2
  // expect(value).toBe(0.3)
  expect(value).toBeCloseTo(0.3)
})

test('object assignment', () => {
  const data = { one: 1 }
  const data2 = { two: 2 }
  expect(Object.assign(data, data2)).toEqual({ one: 1, two: 2})
})
