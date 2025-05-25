//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
class Circle {
    constructor(center, radius){
        this.center = center;
        this.radius = radius;
        }
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;}
}

const PI = 3.141592653589793
function circleCircumference(circle) {
    return Number((2 * PI * circle.radius).toFixed(6));
}
const c = new Circle(10,10)
console.log(circleCircumference(c));

//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj){
    let arr = []
    for (let key in obj){
        if (key.length === 5) {
            arr.push(key)}
        if (obj[key].length === 5) {
            arr.push(obj[key])}}
    return arr
}

console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}))

