// Given an array, find the int that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  let oddInt;

  A.forEach((num) => {
    let numArray = A.filter((ele) => ele === num)
    if (numArray.length % 2 !== 0) {
      oddInt = num
    }
  })
  
  return oddInt;
}
