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

export function fetchQuotes() {
  
}
