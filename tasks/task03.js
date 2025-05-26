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

//https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
function buildFun(n){

	const res = []

	for (let i = 0; i< n; i++){
		res.push(function(){
			return (i)
		})
	}
	return res
}
console.log(buildFun(10));

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, 'shark', status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status)
    this.master = master
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}

console.log("Doug", 12, "Serving his master", "Eliza");