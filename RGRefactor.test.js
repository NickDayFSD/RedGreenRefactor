import getName from './RGRefactor.js';

describe('getName', () => {

  const spot = { name: 'spot', age: 5, weight: '20 lbs' };
  const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };

  test('should return Spot and Aang', () => {
    const output = getName(spot);
    expect(output).toEqual('spot');

    expect(getName(character)).toEqual('Aang');
  });

});
