function stringToArray(string){
  return string.split(' ')
}
console.log(stringToArray("Hello world"));

//function DNAtoRNA(dna) {
//    return dna.split('T').join('U');
//}

function DNAtoRNA(dna) {
    return dna.replaceAll('T','U');
}
console.log(DNAtoRNA("TTTT"));

var min = function(list){
    return Math.min(...list)
}

var max = function(list){
    return Math.max(...list)
}

list = [0,3,342,5434,-12,43,0,-2334]
console.log(min(list), max(list))


function min(arr, toReturn) {
    if (toReturn === "value" ){
        return Math.min(...arr);
    }
    if (toReturn === "index") {
        return arr.indexOf(Math.min(...arr));
    }
}
console.log(min([1,2,3,4,5], "value"));
console.log(min([1,2,3,4,5], "index"));

function min_v2(arr, to_return){
    min_number = arr[0]
    min_index = 0
    for (let i = 0; i < arr.length; i++ ){
        if (arr[i] < min_number){
            min_number = arr[i]
            min_index = i
            }
        }

    if (to_return === 'value'){
        return min_number
        }
    if (to_return === 'index'){
        return min_index}
    }

console.log(min_v2([1,2,3,-4,5], "value"))
console.log(min_v2([1,2,-3,4,5], "index"))

//https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld)
}
console.log(twiceAsOld(36,7))

//https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
function nthEven(n){
    return 2 * (n - 1)
    }
console.log(nthEven(3))
console.log('=====')

//https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
    const black_floor = 13
    if (0 < n && n < black_floor){
         return n - 1}
        else if (n >= black_floor ){
            return n - 2 }
        else{
            return n }
}

console.log(getRealFloor(-15))

//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s){
    hours_in_milisec = 3600000
    minets_in_milisec = 60000
    sec_in_milisec = 1000
    return h * hours_in_milisec + m * minets_in_milisec + s * sec_in_milisec
}
console.log(past(1,1,1))

//https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true}
        else{
            return false }
}
console.log(isDivisible(3,1,3))