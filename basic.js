//JSON
std = {
   'name' : 'gurjyot', 
   'age' : 20, 
   'city' : 'pub'
}
console.log(std['name']);

//array of JSON
stds = [
    {'name' : 'gurjyot', 'age' : 20, 'city' : 'pub'}, 
    {'name' : 'adarsh', 'age' : 19, 'city' : 'mum'}, 
    {'name' : 'vaibhav', 'age' : 18, 'city' : 'hyd'}, 
    {'name' : 'priya', 'age' : 32, 'city' : 'pune'}, 
]

console.log(stds);

for (x of stds){
    console.log(x['name']);
    console.log(x['age']);
    console.log(x['city']);
}


// aray
nums = [2,3,40];
console.log(nums[2]);

for (num of nums){
    console.log(num);
}

//aray of array
stds = [
    ['ritesh', 22, 'nag'], 
    ['harsh', 20, 'hyd'], 
    ['aman', 20, 'mum'], 
];

for(i of stds){
    console.log(i[0]);
} 
console.log('------------aray as is----------------')
console.log(stds);
console.log(stds[1]);
console.log(stds[1][2]);


// loops 
n = 5;

for ( let x = 1; x < 11 ; x=x+2){
    console.log(` ${n} * ${x} = ${n * x}`); // 3 * 1 = 3
}


//conditions
//logical operators = and (&&) or (||)
//comparision operators > , <, >=, <=, ==, ===
x = -10;

if (x > 0 && x < 11) {
  console.log(`number of students are between 0-10`);
} else if (x > 10 && x < 21) {
  console.log(`number of students are between 11-20`);
} else if (x > 20 && x < 31) {
  console.log(`number of students are between 21-30`);
}else{
    console.log(`number of students are not in the range of 1-30`);
}


if(x > 0){
    if (x % 2 == 0){
        console.log(`${x} is even`);
    }else{
        console.log(`${x} is odd`);
    }
}else{
    console.log(`Enter a positive number`);
}

//variables
n1 = 50;
n2 = 40;
sum = n1 + n2
//template literals
console.log(`${n1} + ${n2} = ${sum}`); 
// sum of 40 and 50 is 90
console.log('Hello world 10');
// mathematical operators: +, -, / , %, *