function isOdd(number) {
  return number % 2 === 1;
}

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const compareNumbers = (a, b) => a - b;

const compareArrays = (a, b) => {
  if (a.length < b.length)
    return -1;
  if (a.length > b.length)
    return 1;
  //lengths are the same
  return 0
};

const arrays = new Array(100);

//generating arrays with random length
for (let i = 0; i < 100; i++) {
  const tempArray = [];

  //generating positive values (max value - 100) for items in array
  for (let j = 0; j < getRandomIntInclusive(5, 50); j++) {
    tempArray.push(getRandomIntInclusive(1, 100));
  }
  arrays.push(tempArray)
}

arrays.sort(compareArrays);

//merge arrays into one
const mergedArray = arrays.flat();
console.log("Generated array: " + mergedArray);

//copy array for odd numbers only
const mergedArrayWithOddNumbers = Array.from(mergedArray);


//DELETING ODD NUMBERS
for (let i = mergedArray.length - 1; i >= 0; i--) {
  if (isOdd(mergedArray[i])) {
    mergedArray.splice(i, 1);
  }
}
console.log("Generated array - no odd numbers: " + mergedArray);

//sort in ascending order
mergedArray.sort(compareNumbers);
console.log("Generated array - no odd numbers - ascending order: " + mergedArray);


//DELETING EVEN NUMBERS
for (let i = mergedArrayWithOddNumbers.length - 1; i >= 0; i--) {
  if (!isOdd(mergedArrayWithOddNumbers[i])) {
    mergedArrayWithOddNumbers.splice(i, 1);
  }
}
console.log("Generated array - no even numbers: " + mergedArrayWithOddNumbers);

//sort in ascending order
mergedArrayWithOddNumbers.sort(compareNumbers);
console.log("Generated array - no even numbers - ascending order: " + mergedArrayWithOddNumbers);