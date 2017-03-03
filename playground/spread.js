// function add(a, b) {
//     return a + b;
// }

// console.log(add(3,1));

// var toAdd = [9,5];

// console.log(add(...toAdd))

// var groupA = ['Ferg', 'Jacq'];
// var groupB = ['Luke'];

// var final = [...groupB, ...groupA];

// console.log(final);

var person = ['Ferg', '31'];
var person2 = ['Jacq', '32'];

function greeting(name, age) {
   console.log("Hi "+ name +" you are "+ age);
}
greeting(...person);
greeting(...person2);

var names = ['Luke', 'Jacq'];
var final = ['Ferg', ...names];

final.forEach(function (name) {
    console.log("hi "+ name);
});