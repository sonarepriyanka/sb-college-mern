//class and object

exports.MyCircle = class {
  constructor(r) {
    this.radius = r;
    console.log(this.radius);
    console.log("Hello I am My Circle Constructor...");
  }

  area() {
    let area = 3.14 * this.radius * this.radius;
    console.log(`Area: ${area.toFixed(2)}`);
  }
};

// c1 = new MyCircle(3);
// c2 = new MyCircle(6);
// c3 = new MyCircle(9);
// c1.area();
// c3.area();

exports.add = (x, y) => x + y;
exports.sub = (x,y) => x - y;
exports.mul = (x,y) => x * y;
exports.div = (x,y) => x / y;

// console.log(add(2,3));
// console.log(sub(20,3));
// console.log(mul(2,3));
// console.log(div(2,3).toFixed(3));

function greet(name='you'){
    console.log(`hello, ${name}`);
}

// greet('harsh'); // name = "harsh"
// greet();

// add 2 number, 

