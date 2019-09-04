function bubbleSort(array) {
  let sortedArray = [...array]
  if (sortedArray.length <= 1) {
    return sortedArray;
  }

  for (let count = 0; count < sortedArray.length; count++) {
    for (let nestedCount = 0; nestedCount < sortedArray.length - 1; nestedCount++) {
      if (sortedArray[nestedCount] > sortedArray[nestedCount + 1]) {
        swap(sortedArray, nestedCount)
      }
    }
  }


  return sortedArray;
}

function swap(array, count) {
  let greaterNumber = array[count];
  array[count] = array[count + 1];
  array[count + 1] = greaterNumber;
}
