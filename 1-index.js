var mymath = require('./mymodule');

console.log(mymath.add(20,30));
console.log(mymath.sub(20,3));
console.log(mymath.mul(4,3));
console.log(mymath.div(6,3).toFixed(3));

c1 = new mymath.MyCircle(3);
c1.area();

// c2 = new MyCircle(6);
// c3 = new MyCircle(9);
// c3.area();
