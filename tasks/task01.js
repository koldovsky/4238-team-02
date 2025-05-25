function goals(laLiga, copaDelRey, championsLeague) {
    return laLiga + copaDelRey + championsLeague;
}

console.log(goals(43, 10, 5));

function makeNegative(num){
    return -Math.abs(num);
}
console.log(makeNegative(5));

function move (position, roll) {
    return position + roll * 2;
}
console.log(move(0, 4));

function greet (name, owner) {
    if (name === owner) {
        return 'Hello boss';
    }
    else {
        return 'Hello guest';
    }
}
console.log(greet('Daniel', 'Test'));

function litres(time) {
  return Math.floor(time*0.5);
}
console.log(litres(11.8));

function lovefunc(flower1, flower2){
  if (flower1 % 2 === 0 && flower2 % 2 === 1) {
    return true;
  }
  else if (flower1 % 2 === 1 && flower2 % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}
console.log(lovefunc(0, 0));