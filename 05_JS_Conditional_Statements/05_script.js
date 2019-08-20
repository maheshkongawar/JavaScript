// If Else condition Example
var courseCompleted = true ;
var practiceCompleted = false;
if(courseCompleted && practiceCompleted){
    console.log('You will get the Job Soon');
}
else if(courseCompleted && !practiceCompleted){
    console.log('start practicing!!');
}
else{
    console.log('Welcome to Ameerpet');
}

// For loop Example to display from 1 - 10 values
var output = '';
for(var i = 1; i<= 10; i++){
    if(i <= 9){
        output = output + i + " , ";
    }
    else{
        output = output + i ;
    }
}
console.log(output);

// While loop Example to display from 1 - 10 values
output = '';
i = 1;
while(i <= 10){
    if(i <= 9){
        output = output + i + " - ";
    }
    else{
        output = output + i ;
    }
    i++;
}
console.log(output);

// Do while loop Example to display from 1 - 10 values
output = '';
i = 1;
do{
    if(i <= 9){
        output = output + i + " * ";
    }
    else{
        output = output + i ;
    }
    i++;
}
while(i <= 10);
console.log(output);

// Switch Statement Example
var date = new Date().getDay();
output = 'Today is : ';
switch(date){
    case 0:
        output += 'Sunday';
        break;
    case 1:
        output += 'Monday';
        break;
    case 2:
        output += 'Tuesday';
        break;
    case 3:
        output += 'Wednesday';
        break;
    case 4:
        output += 'Thrusday';
        break;
    case 5:
        output += 'Friday';
        break;
    case 6:
        output += 'Saturday';
        break;
    default:
        output += '';
        break;
}
console.log(output);
