import {
  getName,

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

  test('numbers plus 32', () => {

    expect(copyAndPush(numbers, 32)).toEqual([1, 2, 3, 32]);
  });

});
