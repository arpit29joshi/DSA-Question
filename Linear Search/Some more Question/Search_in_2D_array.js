//Find item in 2D array
const arr = [
  [1, 32, 4, 234],
  [1234, 134, 1556, 7657, 9],
  [1235, 763, 11354, 096]
]
function linearSearch(arr, target) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === target) {
        return [i, j]
      }
    }
  }
  return [-1, -1]
}
const newarray = linearSearch(arr, 9)
console.log(newarray)
//output [1,4]
