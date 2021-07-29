function sumArr(arr) {
  if (!arr.length) return [];

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArr([1, 2, 3, 4, 5, 6]));
console.log(sumArr([1, 2, 3]));
console.log(sumArr([10, 10, 10, 10, 10]));
console.log(sumArr([]));

console.log("----------------------");

function reverseValue(arr) {
  if (!arr.length) return [];

  var arrBaru = [];
  for (let i = 0; i < arr.length; i++) {
    let baru1 = arr[i].toString();
    let baruReverse = "";
    for (let j = baru1.length - 1; j >= 0; j--) {
      baruReverse += baru1[j];
    }
    arrBaru.push(baruReverse);
  }
  return arrBaru;
}

function reverseArray(arr) {
  const arrayBaru = reverseValue(arr);
  var newArray = [];
  for (var i = arrayBaru.length - 1; i >= 0; i--) {
    let arrNumber = Number(arrayBaru[i]);
    newArray.push(arrNumber);
  }
  return newArray;
}

console.log(reverseArray([123, 456]));
console.log(reverseArray([332, 432, 661]));
console.log(reverseArray([456789, 332]));
console.log(reverseArray([]));
