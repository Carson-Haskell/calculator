var add = function(num1, num2) {
  return num1 + num2;
}
var multiply = function(num1, num2) {
  return num1 * num2;
}
var subtract = function(num1, num2) {
  return num1 - num2;
}
var divide = function(num1, num2) {
  return num1 / num2;
}

var num1 = parseInt(prompt("Enter a number:"));
var num2 = parseInt(prompt("Enter another number:"));
var result = subtract(num1, num2);
alert(result);
