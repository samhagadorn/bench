function shiftRight(v1, v2){
        return Math.floor(v1/(2**v2));
}

console.log(shiftRight(80, 3));
console.log(shiftRight(-24, 2));
console.log(shiftRight(-5, 1));
console.log(shiftRight(4666, 6));
console.log(shiftRight(3777, 6));
console.log(shiftRight(-512, 10));