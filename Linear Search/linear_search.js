//linear search
const arr = [1, 2, 3, 23, 45, 25, 2123, 213, 12]
function linearSearch(arr, target) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i
    }
  }
  return -1
}
const index = linearSearch(arr, 124124)
console.log(index)
//output -1;
