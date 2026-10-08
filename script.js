
// 1. Create a function named hello that prints "Hello Everyone"

function hello() {
    console.log("Hello Everyone");
}

hello();


// 2. Create a function named welcome that prints
// "Welcome to JavaScript" and call it

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();


// 3. Create a function named navi that prints your name

function navi() {
    console.log("pushpak");
}

navi();


// 4. Create a function named message that prints three different messages

function message() {
    console.log("Hello");
    console.log("Welcome");
    console.log("Good Morning");
}

message();


// 5. Create a function named numbers that prints , numbers from 1 to 5 using a for loop

function numbers() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

numbers();


// 6. Create a function named check that contains an if condition

function check() {
    let age = 20;

    if (age >= 18) {
        console.log("Eligible");
    }
}

check();


// 7. Create a function named details that prints name, qualification and role

function details() {
    console.log("Name: Pushpak");
    console.log("Qualification: B.Tech");
    console.log("Role: FULL STACK Developer");
}

details();


// 8. Create a function named company that prints, your company name

function company() {
    console.log("STACKLY");
}

company();


// 9. Create a function named welcomeUser and call it three times

function welcomeUser() {
    console.log("Welcome User");
}

welcomeUser();
welcomeUser();
welcomeUser();


// 10. Create two different functions and call both

function firstFunction() {
    console.log("This is the first function");
}

function secondFunction() {
    console.log("This is the second function");
}

firstFunction();
secondFunction();




// 11. Create a function with one parameter and print the parameter value

function printValue(value) {
    console.log(value);
}

printValue("JavaScript");


// 12. Create a function with two parameters and print both values

function printTwoValues(a, b) {
    console.log(a);
    console.log(b);
}

printTwoValues(10, 20);


// 13. Create add(a, b)

function add(a, b) {
    console.log(a + b);
}

add(10, 20);


// 14. Create sub(a, b)

function sub(a, b) {
    console.log(a - b);
}

sub(20, 10);


// 15. Create multiply(a, b)

function multiply(a, b) {
    console.log(a * b);
}

multiply(10, 5);


// 16. Create divide(a, b)

function divide(a, b) {
    console.log(a / b);
}

divide(20, 5);


// 17. Create student(name, age)

function student(name, age) {
    console.log("Name: " + name);
    console.log("Age: " + age);
}

student("Rahul", 21);


// 18. Create employee(name, role, salary)

function employee(name, role, salary) {
    console.log("Name: " + name);
    console.log("Role: " + role);
    console.log("Salary: " + salary);
}

employee("Pushpak", "Developer", 40000);


// 19. Create a function with four parameters

function fourParameters(a, b, c, d) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

fourParameters("Pushpak", 25, "B.Tech", "Hyderabad");


// 20. Create a function with six parameters

function sixParameters(a, b, c, d, e, f) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
}

sixParameters(
    "Pushpak",
    25,
    "B.Tech",
    "FULL STACK Developer",
    "Hyderabad",
    40000
);



// 21. student(name, department, cgpa)
// department has a default value

function studentDetails(name, department = "CSE", cgpa) {
    console.log(name);
    console.log(department);
    console.log(cgpa);
}

studentDetails("Pushpak", undefined, 8.5);


// 22. user(name, age = 18) . Call without passing age

function user(name, age = 18) {
    console.log("Name: " + name);
    console.log("Age: " + age);
}

user("Pushpak");


// 23. employee(name, role = "Developer")

function employeeDetails(name, role = "Developer") {
    console.log("Name: " + name);
    console.log("Role: " + role);
}

employeeDetails("Pushpak");


// 24. form(name, department, cgpa, disability = "no") :  Call it twice

function form(name, department, cgpa, disability = "no") {
    console.log("Name: " + name);
    console.log("Department: " + department);
    console.log("CGPA: " + cgpa);
    console.log("Disability: " + disability);
}

form("Pushpak", "ECE", 8.5);

form("Priya", "ECE", 9.0, "yes");


// 25. Two normal parameters and one default parameter

function course(name, duration, mode = "Online") {
    console.log("Name: " + name);
    console.log("Duration: " + duration);
    console.log("Mode: " + mode);
}

course("JavaScript", "3 Months");



// 26. Function returns addition

function addReturn(a, b) {
    return a + b;
}

let result1 = addReturn(10, 20);
console.log(result1);


// 27. Function returns subtraction

function subReturn(a, b) {
    return a - b;
}

let result2 = subReturn(20, 10);
console.log(result2);


// 28. Function returns multiplication

function multiplyReturn(a, b) {
    return a * b;
}

let result3 = multiplyReturn(10, 5);
console.log(result3);


// 29. Function returns division

function divideReturn(a, b) {
    return a / b;
}

let result4 = divideReturn(20, 5);
console.log(result4);


// 30. salary() returns 40000

function salary() {
    return 40000;
}

let employeeSalary = salary();

console.log(employeeSalary);


// 31. Accept salary and return salary

function getSalary(salary) {
    return salary;
}

let salaryValue = getSalary(50000);

console.log(salaryValue);


// 32. Function returns person's name

function getName() {
    return "Rahul";
}

let personName = getName();

console.log(personName);


// 33. Return Pass or Fail

function checkMarks(marks) {

    if (marks >= 35) {
        return "Pass";
    } else {
        return "Fail";
    }
}

let markResult = checkMarks(75);

console.log(markResult);


// 34. Accept price and discount , Return discount value

function getDiscount(price, discount) {
    return discount;
}

let discountValue = getDiscount(1000, 10);

console.log(discountValue);


// 35. Return result from one function and use it in another function

function addition(a, b) {
    return a + b;
}

function displayResult(value) {
    console.log(value);
}

let additionResult = addition(10, 20);

displayResult(additionResult);



// 36. Variable outside function
// Access it inside function

let message1 = "Hello JavaScript";

function showMessage() {
    console.log(message1);
}

showMessage();


// 37. Object outside function

let person = {
    name: "Pushpak",
    designation: "Developer"
};

function showPerson() {
    console.log(person.name);
    console.log(person.designation);
}

showPerson();


// 38. Salary outside function , Add bonus

let salaryAmount = 40000;

function addBonus() {
    let bonus = 5000;
    console.log(salaryAmount + bonus);
}

addBonus();


// 39. Employee object outside function

let employeeInfo = {
    name: "Pushpak",
    role: "FULL STACK Developer",
    salary: 50000
};

function showEmployee() {
    console.log(employeeInfo.name);
    console.log(employeeInfo.role);
    console.log(employeeInfo.salary);
}

showEmployee();


// 40. Two functions accessing same outer variable

let companyName = "STACKLY";

function showCompany() {
    console.log(companyName);
}

function printCompany() {
    console.log(companyName);
}

showCompany();
printCompany();



// 41. Named function

function namedFunction(value) {
    console.log(value);
}

namedFunction("Hello");


// 42. Anonymous function stored in a variable

let anonymousFunction = function(value) {
    console.log(value);
};

anonymousFunction("Anonymous Function");


// 43. Arrow function with one parameter

let arrowFunction = (value) => {
    console.log(value);
};

arrowFunction("Arrow Function");


// 44. Arrow function with two parameters

let arrowAdd = (a, b) => {
    return a + b;
};

console.log(arrowAdd(10, 20));


// 45. Named, anonymous and arrow functions
// performing the same addition

function namedAdd(a, b) {
    return a + b;
}

let anonymousAdd = function(a, b) {
    return a + b;
};

let arrowAddition = (a, b) => {
    return a + b;
};

console.log(namedAdd(10, 20));
console.log(anonymousAdd(10, 20));
console.log(arrowAddition(10, 20));




// 46. IIFE that immediately prints
// "Hello JavaScript"

(function() {
    console.log("Hello JavaScript");
})();


// 47. IIFE with name parameter

(function(name) {
    console.log("Hello " + name);
})("Pushpak");


// 48. IIFE with product and discount parameters

(function(product, discount) {
    console.log(
        "Special Offer: " + product +
        " with " + discount + "% discount"
    );
})("Laptop", 20);



// CALLBACK & HIGHER-ORDER FUNCTIONS

//  49. add function accepts a callback and two numbers , Add the numbers and then call the callback

function addCallback(callback, a, b) {

    let result = a + b;

    console.log("Addition: " + result);

    callback(a, b);
}

function callbackFunction(a, b) {
    console.log("Callback executed");
}

addCallback(callbackFunction, 10, 20);


// 50. sub function passed as callback to add , Add first, then execute subtraction

function subCallback(a, b) {
    console.log("Subtraction: " + (a - b));
}

function addWithCallback(callback, a, b) {

    console.log("Addition: " + (a + b));

    callback(a, b);
}

addWithCallback(subCallback, 20, 10);