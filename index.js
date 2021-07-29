// 1. Counting Number in Array

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

// 2. Reverse All Array

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

// 3. Unique Array

function uniqueArray(arr) {
  if (!arr.length) return [];
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let isUnique = false;
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j] === arr[i]) {
        isUnique = true;
        break;
      }
    }
    if (!isUnique) newArray[newArray.length] = arr[i];
  }
  return newArray;
}

console.log(uniqueArray([1, 4, 5, 6, 1, 1, 2, 2, 3, 4, 5, 6, 7]));
console.log(uniqueArray([1, 1, 1, 1, 1, 1]));
console.log(uniqueArray([1, 1, 2, 2, 3, 3, 4, 4]));
console.log(uniqueArray([]));

// 4. Shopping bubble tea

function jajanBoba(uangJajan) {
  const listBoba = [
    ["Xing Fu Tang", 38000],
    ["OneZo", 53500],
    ["KOI The", 36000],
    ["Chatime", 25000],
    ["Kokumi", 42000],
    ["Bubble Station Milk", 13000],
  ];

  console.log(`David mulai jajan dengan uang jajan ${uangJajan} rupiah`);
  for (let i = 0; i < listBoba.length; i++) {
    if (uangJajan > listBoba[i][1]) {
      console.log(
        `Dengan uang ${uangJajan}, cukup untuk beli ${listBoba[i][0]}.`
      );
      uangJajan -= listBoba[i][1];
      continue;
    }

    console.log(
      `Dengan uang ${uangJajan}, tidak cukup untuk beli ${listBoba[i][0]}.`
    );
  }
  return uangJajan;
}

jajanBoba(100000);
