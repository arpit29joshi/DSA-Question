// Find word is in an string or not

const arr = 'Hello javascript'
function linearSearch(arr, target) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true
    }
  }
  return false
}
const index = linearSearch(arr, 'z')
console.log(index)
//output false
