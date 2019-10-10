import {getFirstNumberAvailable, getNumberOfPhoneNumbers} from '../../queries/numbersQueries';

const numbersMockState = {
  numbers: {
    personal: [72444],
    shared: [42323],
  }
};

describe("numbers queries", () => {
    it("check the query getNumberOfPhoneNumbers", () => {
        const number = getNumberOfPhoneNumbers(numbersMockState)()
        expect(number).toEqual(2);
    });
  
    it("check the query getFirstNumberAvailable", () => {

      const number = getFirstNumberAvailable(numbersMockState)()
      expect(number).toEqual(72444);
  });
  });