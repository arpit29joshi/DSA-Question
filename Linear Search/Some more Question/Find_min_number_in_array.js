// Find min. no. in array
const arr = [1, 2, 3, 23, 45, 0, 25, 2123, 213, -12, 12]
let min
function linearSearch(arr) {
  for (i = 0; i <= arr.length; i++) {
    if (i === 0) {
      min = arr[i]
    } else if (arr[i] < min) {
      min = arr[i]
    }
  }
  return min
}
const minNo = linearSearch(arr)
console.log(minNo)
// output -12
