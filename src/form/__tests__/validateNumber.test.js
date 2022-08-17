import validateNumber from '../numberValidator';

test('Card number is valid', () => {
  const result = validateNumber(4916992764673581);
  expect(result).toBe(true);
});

test('Card number is invalid', () => {
  const result = validateNumber(1111);
  expect(result).toBe(false);
});
