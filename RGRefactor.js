import request from 'superagent';

export function getName({ name }) {
  return name;
}

export function copyAndPush(numArr, num) {
  const newArr = [...numArr, num];
  return newArr;
}

export function capFilterF(stringArr) {
  const newArr = [];

  stringArr.forEach(string => newArr.push(string.toUpperCase()));
  return newArr.filter(letter => letter[0] !== 'F');
}

export async function fetchQuotes() {
  const response = await request.get('http://futuramaapi.herokuapp.com/api/quotes');

  const quotePicker = await Math.floor(Math.random() * response.body.length);
  const result = await response.body[quotePicker];

  const mungeResult = {
    name: result.character,
    text: result.quote,
    image: result.image
  };
  
  return mungeResult;
}
