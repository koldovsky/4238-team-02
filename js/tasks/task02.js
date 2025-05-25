// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  return string.split(" ");
}
console.log(stringToArray("Hello world"));

//function DNAtoRNA(dna) {
//    return dna.split('T').join('U');
//}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}
console.log(DNAtoRNA("TTTT"));

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function (list) {
  return Math.min(...list);
};
var max = function (list) {
  return Math.max(...list);
};

list = [0, 3, 342, 5434, -12, 43, 0, -2334];
console.log(min(list), max(list));

function min(arr, toReturn) {
  if (toReturn === "value") {
    return Math.min(...arr);
  }
  if (toReturn === "index") {
    return arr.indexOf(Math.min(...arr));
  }
}
console.log(min([1, 2, 3, 4, 5], "value"));
console.log(min([1, 2, 3, 4, 5], "index"));

function min_v2(arr, to_return) {
  min_number = arr[0];
  min_index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min_number) {
      min_number = arr[i];
      min_index = i;
    }
  }

  if (to_return === "value") {
    return min_number;
  }
  if (to_return === "index") {
    return min_index;
  }
}

console.log(min_v2([1, 2, 3, -4, 5], "value"));
console.log(min_v2([1, 2, -3, 4, 5], "index"));
