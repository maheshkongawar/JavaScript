// Create an object
var fridge = {};
fridge.fruits = 20;
fridge.vegitbles = 40;

// Access the object
console.log(fridge);
console.log('fruits : ' + fridge.fruits);

// Object Literal
var mobile = {
    color : 'black',
    company : 'Lenovo',
    RAM : '3GB',
    isInsured : false,
    cost : 15000
};
console.log(mobile);

// Access Using dot , [] notations
console.log('Company :' + mobile.company); // Lenovo
console.log('Company :' + mobile['company']); // Lenovo

// Access Not Existing Property
console.log('Capacity : ' + mobile.capacity); // undefined

// Create a Nested Object
var student = {
    name : 'Rajan',
    age : 20,
    course : 'Engineering',
    address : {
        city : 'Hyderabad',
        state : 'Telangana',
        country : 'India'
    }
};

// Access the Object
console.log(student); // student Obj
console.log(student.address); // address Obj
console.log(student.address.city); // Hyderabad

// Add a property to Student Object
student.address.street = 'Ameerpet';
console.log(student.address);

// Delete an Object
delete student.address; // address object is deleted
console.log(student);




