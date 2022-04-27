//Find a number in given range
const arr = [1, 2, 3, 23, 45, 25, 2123, 213, 12]
function linearSearch(arr, target, start, end) {
  for (i = start; i <= end; i++) {
    if (arr[i] === target) {
      return i
    }
  }
  return -1
}
const index = linearSearch(arr, 45, 2, 4)
console.log(index)
//output 4
