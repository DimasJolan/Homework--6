"use strict";

let n = 250;
let arr = [];

nextStep:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextStep; 
  }

  arr.push(i); 
}
console.log(arr);

function arraySum(array){
  var sum = 0;
  for(var i = 0; i < array.length; i++){
      sum += array[i];
      }
  console.log(sum);
  }
arraySum(arr);



