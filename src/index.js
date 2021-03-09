
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (typeof matrix === "undefined")
    return arr;
  for (let i = 1; i < matrix.length + 1; i++){
    if (Array.isArray(matrix[i-1])){
      if (i % 2){
        for (let j = 0; j < matrix[i-1].length; j++){
          arr.push(matrix[i-1][j]);
        }
      } else {
        for (let j = matrix[i-1].length - 1; j >= 0; j--){
          arr.push(matrix[i-1][j]);
        }
      }
    } else {
      arr.push(matrix[i-1]);
    }
  }
  
  return arr;
}
