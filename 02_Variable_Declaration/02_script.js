// Create two variables and display their sum
var num1 = 300;
var num2 = 200;
var sum = num1 + num2;
var sub = num1 - num2;
var mul = num1 * num2;
console.log('The Sum of' + num1 + ' + '+ num2 + 'is : ' + sum);
console.log('the sub of' + num1 + ' - '+ num2 + 'is : ' + sub);
console.log('the mul of' + num1 + ' * '+ num2 + 'is : ' + mul);

// Find the biggest value between 2 numbers
var a = 100;
var b = 200;
if(a > b){
    console.log('The big value is ' + a);
}
else{
    console.log('The big value is ' + b);
}

// Find the smallest value between 2 numbers
var a = 500;
var b = 1000;
if (a < b){
    console.log('the smallest value is '+ a)
}
else
{
    console.log('the smallest value is '+ b)
}


// Find the biggest value among 3 numbers
var x = 1000;
var y = 200;
var z = 30;
if(x > y && x > z){
    console.log('The Biggest value is ' + x);
}
else if(y > z){
    console.log('The Biggest value is ' + y);
}
else{
    console.log('The Biggest value is ' + z);
}