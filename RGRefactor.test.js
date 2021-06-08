import {
  getName,
  copyAndPush,
  capFilterF,
  fetchQuotes
} from './RGRefactor.js';

describe('getName', () => {

  const spot = { name: 'spot', age: 5, weight: '20 lbs' };
  const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };

  test('should return Spot and Aang', () => {
    const output = getName(spot);
    expect(output).toEqual('spot');

    expect(getName(character)).toEqual('Aang');
  });

});

describe('Copy and Push Function', () => {

  const numbers = [1, 2, 3];

  test('numbers plus 4', () => {
    expect(copyAndPush(numbers, 4)).toEqual([1, 2, 3, 4]);
  });

  test('makes sure numbers is unchanged', () => {
    expect(numbers).toEqual([1, 2, 3]);
  });

});

describe('Capitalize and Filter', () => {

  const stringArr = ['a', 'frog', 'from', 'florida', 'ate', 'a', 'radioactive', 'fly'];

  test('capitalized and not including frog from Florida', () => {
    expect(capFilterF(stringArr)).toEqual(['A', 'ATE', 'A', 'RADIOACTIVE']);
  });

});

describe('fetch quotes', () => {

  test('fetches a random quote from Futurama API', async () => {
    
    const quote = await fetchQuotes();

    expect(quote.name).toEqual(expect.any(String));
    expect(quote.text).toEqual(expect.any(String));
    expect(quote.image).toEqual(expect.any(String));
  });

});
