import findPayService from '../payService';

test('Pay service - visa', () => {
  const result = findPayService(4916992764673581);
  expect(result).toBe('visa');
});

test('Pay service - Master Card', () => {
  const result = findPayService(5432207943936151);
  expect(result).toBe('masterCard');
});
