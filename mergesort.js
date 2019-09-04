function split(wholeArray) {
  let midpoint = Math.floor(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, midpoint)
  let secondHalf = wholeArray.slice(midpoint)

  return [firstHalf, secondHalf];
}

function merge(arrOne, arrTwo) {
  let mergedArray = [];
  console.log('componenets', arrOne, arrTwo)

  while (arrOne.length + arrTwo.length > 0) {
    if (arrOne[0] === undefined || arrOne[0] >= arrTwo[0]) {
      let lesserNum = arrTwo.shift()
      mergedArray.push(lesserNum);
    }
    else {
      let lesserNum = arrOne.shift()
      mergedArray.push(lesserNum);
    }
  }
  console.log('mergedArr', mergedArray)
  return mergedArray;
}

function mergeSort(array) {
  console.log('array', array)

  let splitArray = split(array)

  if (array.length === 1) {
    return array;
  } else {
    return merge(
      mergeSort(splitArray[0]),
      mergeSort(splitArray[1])
    )
  }}

  // merge(mergeSort([1, 3, 4, 2, 6]))
  // merge(mergeSort([1, 3]), mergeSort([4, 2, 6]))
  // merge(mergeSort([1]), mergeSort([3]))
  // merge(mergeSort([4]), mergeSort([2, 6]))
  // merge(mergeSort([2]), mergeSort([6]))






  // let splitArray = split(array);
  // let newArray = [...splitArray];

  // while (newArray.length !== array.length) {
  //   splitArray = newArray;
  //   newArray = [];
  //   // eslint-disable-next-line no-loop-func
  //   splitArray.forEach(subArray => {
  //     if (subArray.length === 1) {
  //       newArray.push(subArray);
  //     } else {
  //       let test2 = split(subArray)
  //       newArray.push(test2[0])
  //       newArray.push(test2[1])
  //     }
  //   })
  //   console.log('newArr', newArray)
  // }

  // let tempArray = newArray;
  // let mergedArray = []
  // while (mergedArray.length !== array.length) {
  //   for (let count = 0; count < array.length; count += 2) {
  //     let merged = merge(newArray[count], newArray[count + 1])
  //       mergedArray.push(merged)
  //   }
  //   console.log('merge', mergedArray)
  // }










  // for (let count = 0; count < splitArray.length; count++) {
  //   if (splitArray[count].length !== 1) {
  //     split(splitArray[count])
  //   }
  // }

  // splitArray.forEach(subArray => {

  // let fullySplit = false;

  // array.forEach(subArray => {
  //   fullySplit = fullySplit * (subArray.length === 1)
  // })

  // if (array.length === 1 || fullySplit === true) {
  //   fullySplit = true;
  //   merge(array)
  // } else if (fullySplit === false) {
  //   let newArray = split(array)
  //   mergeSort(newArray[0])
  //   mergeSort(newArray[1])
  // }

