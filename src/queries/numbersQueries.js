export const getNumberOfPhoneNumbers = (numbersState) => () => {
  return numbersState.numbers.personal.length + numbersState.numbers.shared.length;
};

export const getFirstNumberAvailable = (numbersState) => () => {
  if(numbersState.numbers.personal.length > 0) {
    return numbersState.numbers.personal[0];
  }

  if(numbersState.numbers.shared.length > 0) {
    return numbersState.numbers.shared[0];
  }

  return null;
};
