function findPayService(cardNumber) {
  const cardNumbers = {
    2: 'mir',
    4: 'visa',
    5: 'masterCard',
    6: 'maestro',
  };

  return cardNumbers[String(cardNumber)[0]];
}

export default findPayService;
