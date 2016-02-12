
var ex1 = [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, currentIndex, array) {
  return previousValue + currentValue;
});

console.log('ex0:' , ex0);
//10



var ex1 = [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, currentIndex, array) {
  return previousValue + currentValue;
}, 10);

console.log('ex1:' , ex1);
//20

var ex2= [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
}, []);

console.log('ex2:' , ex2);
// ex2 is [0, 1, 2, 3, 4, 5]



var total = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
});
// total == 6
