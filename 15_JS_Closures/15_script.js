// Closures Concept of JavaScript
var a = 10;
function greetOuter(){
    var b = 20;
    var greetInner = function(){
        var c = 30;
        console.log(a);
        console.log(b);
        console.log(c);
    };
    return greetInner;
}
function greetEngine(fName){
    fName();
}
var greet = greetOuter();
greetEngine(greet);
