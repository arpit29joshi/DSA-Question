//Find how many digits in array is even
const arr = [1, 23, 1234, 213, 445, 76]
let count = 0
function linearSearch(ar) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].toString().length % 2 === 0) {
      count += 1
    }
  }
  console.log('Even number of digits in above array is ' + count)
  //output
  //Even number of digits in above array is 3
}
linearSearch(arr)
