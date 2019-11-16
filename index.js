let numsArray = [ 2, 4, 5, 6 ];

// function mapMethod(array, cb){
//   let newArray = [];
//   for(let i = 0; i < array.length; i++){
//     let updatedValue = cb(array[i]);
//     newArray.push(updatedValue);
//   }
//   return newArray;
// }

function addThree(num){
  return num + 3;
}

function multiplyByFive(num){
  return num * 5;
}

// mapMethod(numsArray, addThree)

numsArray.map(multiplyByFive)