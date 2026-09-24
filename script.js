// ======================================================
// JAVASCRIPT - 50 PRACTICE TASKS
// Variables, Data Types, Arrays, Objects & Operators
// ======================================================


// ======================================================
// VARIABLES & DATA TYPES
// ======================================================

// 1. Create a variable using let and store your name.
// Print its data type using typeof.

let name1 = "Rahul";
console.log(name1);
console.log(typeof name1);


// 2. Create a variable containing your age.
// Print its value and data type.

let age1 = 21;
console.log(age1);
console.log(typeof age1);


// 3. Create a variable containing true.
// Print its value and data type.

let isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);


// 4. Declare a variable without assigning any value.
// Print its value and data type.

let value1;
console.log(value1);
console.log(typeof value1);


// 5. Create a variable containing null.
// Print its value and data type.

let value2 = null;
console.log(value2);
console.log(typeof value2);


// 6. Create five variables containing:
// string, number, boolean, undefined, and null.

let studentName = "Rahul";
let studentAge = 21;
let studentStatus = true;
let studentValue;
let studentData = null;

console.log(studentName);
console.log(studentAge);
console.log(studentStatus);
console.log(studentValue);
console.log(studentData);


// 7. Create a variable containing your qualification.
// Print its data type.

let qualification = "B.Tech";
console.log(typeof qualification);


// 8. Create a variable containing your salary.
// Check whether its data type is number.

let salary = 30000;

console.log(typeof salary);
console.log(typeof salary === "number");


// 9. Create a variable containing "100"
// and another containing 100.
// Print the data type of both.

let stringNumber = "100";
let actualNumber = 100;

console.log(typeof stringNumber);
console.log(typeof actualNumber);


// 10. Create variables for name, age,
// qualification, and working status.
// Print all values and data types.

let name2 = "Rahul";
let age2 = 21;
let qualification2 = "B.Tech";
let workingStatus = true;

console.log(name2, typeof name2);
console.log(age2, typeof age2);
console.log(qualification2, typeof qualification2);
console.log(workingStatus, typeof workingStatus);



// ======================================================
// ARRAYS
// ======================================================

// 11. Create an array containing five fruit names.
// Print the complete array.

let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

console.log(fruits);


// 12. Create an array containing five numbers.
// Print the first element.

let numbers1 = [10, 20, 30, 40, 50];

console.log(numbers1[0]);


// 13. Create an array containing six colors.
// Print the third element.

let colors = ["Red", "Blue", "Green", "Yellow", "Black", "White"];

console.log(colors[2]);


// 14. Create an array containing five mobile brands.
// Print the last element using length.

let mobiles = ["Samsung", "Apple", "OnePlus", "Vivo", "Oppo"];

console.log(mobiles[mobiles.length - 1]);


// 15. Create an array containing seven numbers.
// Print the second-last element using length.

let numbers2 = [10, 20, 30, 40, 50, 60, 70];

console.log(numbers2[numbers2.length - 2]);


// 16. Create an array containing your favorite foods.
// Print the first, third, and last elements.

let foods = ["Pizza", "Biryani", "Burger", "Dosa", "Noodles"];

console.log(foods[0]);
console.log(foods[2]);
console.log(foods[foods.length - 1]);


// 17. Create an array containing five cricketer names.
// Print the fourth cricketer.

let cricketers = ["Virat", "Rohit", "Dhoni", "Bumrah", "Gill"];

console.log(cricketers[3]);


// 18. Create an array containing different toys.
// Print the last toy dynamically using length - 1.

let toys = ["Car", "Robot", "Ball", "Doll", "Puzzle"];

console.log(toys[toys.length - 1]);


// 19. Create an array containing 10 values.
// Print first, last, and second-last values.

let values = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log(values[0]);
console.log(values[values.length - 1]);
console.log(values[values.length - 2]);


// 20. Create an array containing fruits, toys,
// and a cricketer's name.
// Print the complete array and any three individual values.

let mixedArray = ["Apple", "Car", "Virat", "Mango", "Robot", "Dhoni"];

console.log(mixedArray);

console.log(mixedArray[0]);
console.log(mixedArray[2]);
console.log(mixedArray[5]);



// ======================================================
// OBJECTS
// ======================================================

// 21. Create an object containing name, age, and city.
// Print the complete object.

let person1 = {
    name: "Rahul",
    age: 21,
    city: "Hyderabad"
};

console.log(person1);


// 22. Create an object containing your name,
// qualification, and company.
// Print the company.

let person2 = {
    name: "Rahul",
    qualification: "B.Tech",
    company: "TCS"
};

console.log(person2.company);


// 23. Create an object containing a fruits array.
// Print the second fruit.

let fruitObject = {
    fruits: ["Apple", "Mango", "Banana", "Orange"]
};

console.log(fruitObject.fruits[1]);


// 24. Create an object containing a toys array.
// Print the last toy dynamically.

let toyObject = {
    toys: ["Car", "Robot", "Ball", "Doll"]
};

console.log(toyObject.toys[toyObject.toys.length - 1]);


// 25. Create an object containing cricketer and team.
// Print the cricketer's name.

let cricketObject = {
    cricketer: "Virat Kohli",
    team: "India"
};

console.log(cricketObject.cricketer);


// 26. Create an object containing fruitName,
// toyName, and cricketer.
// Print all three properties.

let objectData = {
    fruitName: "Apple",
    toyName: "Car",
    cricketer: "Virat Kohli"
};

console.log(objectData.fruitName);
console.log(objectData.toyName);
console.log(objectData.cricketer);


// 27. Create an object with two arrays:
// students and courses.
// Print the first student and second course.

let college = {
    students: ["Rahul", "Priya", "Arun"],
    courses: ["Java", "Python", "JavaScript"]
};

console.log(college.students[0]);
console.log(college.courses[1]);


// 28. Create an object containing a mobile array.
// Print the third mobile.

let mobileObject = {
    mobile: ["Samsung", "Apple", "OnePlus", "Vivo"]
};

console.log(mobileObject.mobile[2]);


// 29. Create an object containing employeeName,
// skills, and experience.
// Print the second skill.

let employee = {
    employeeName: "Rahul",
    skills: ["Java", "SQL", "JavaScript"],
    experience: 2
};

console.log(employee.skills[1]);


// Print any three individual properties.

let personalInfo = {
    name: "Rahul",
    age: 21,
    city: "Hyderabad",
    qualification: "B.Tech",
    company: "TCS"
};

console.log(personalInfo.name);
console.log(personalInfo.age);
console.log(personalInfo.qualification);




// ARITHMETIC OPERATORS

// addition, subtraction, multiplication, and division.

let a1 = 20;
let b1 = 10;

console.log(a1 + b1);
console.log(a1 - b1);
console.log(a1 * b1);
console.log(a1 / b1);


// 32. Create two numbers and find their remainder.

let a2 = 25;
let b2 = 4;

console.log(a2 % b2);


// 33. Find the result of 2 ** 5.

console.log(2 ** 5);


// +, -, *, /, %, **

let a3 = 10;
let b3 = 3;

console.log(a3 + b3);
console.log(a3 - b3);
console.log(a3 * b3);
console.log(a3 / b3);
console.log(a3 % b3);
console.log(a3 ** b3);


// Increase its value by 5 using +.

let number3 = 10;

number3 = number3 + 5;

console.log(number3);



// INCREMENT & DECREMENT

// and use pre-increment.

let number4 = 10;

console.log(++number4);


// and use post-increment.

let number5 = 10;

console.log(number5++);
console.log(number5);


// and use pre-decrement.

let number6 = 20;

console.log(--number6);


// and use post-decrement.

let number7 = 20;

console.log(number7--);
console.log(number7);


// pre-increment and post-increment.

let pre = 10;
let post = 10;

console.log(++pre);
console.log(post++);

console.log(pre);
console.log(post);


// ASSIGNMENT OPERATORS/ 

// Use +=

let a4 = 20;
let b4 = 10;

a4 += b4;

console.log(a4);


// Use -=

let a5 = 50;
let b5 = 20;

a5 -= b5;

console.log(a5);


// Use *=

let a6 = 10;
let b6 = 5;

a6 *= b6;

console.log(a6);


// Use /=

let a7 = 100;
let b7 = 10;

a7 /= b7;

console.log(a7);


// Use %=

let a8 = 25;
let b8 = 4;

a8 %= b8;

console.log(a8);

// COMPARISON, LOGICAL & TERNARY OPERATORS

// <, >, <=, >=

let a9 = 20;
let b9 = 10;

console.log(a9 < b9);
console.log(a9 > b9);
console.log(a9 <= b9);
console.log(a9 >= b9);


// using == and ===

let numberValue = 10;
let stringValue = "10";

console.log(numberValue == stringValue);
console.log(numberValue === stringValue);


// using &&, ||, and !

let age3 = 20;
let marks3 = 80;

console.log(age3 >= 18 && marks3 >= 50);
console.log(age3 >= 18 || marks3 >= 90);
console.log(!(age3 >= 18));


// ternary operator for age eligibility.

let age4 = 20;

let eligibility = age4 >= 18 ? "Eligible" : "Not Eligible";

console.log(eligibility);


// ternary operator for Pass or Fail.

let marks4 = 75;

let result = marks4 >= 35 ? "Pass" : "Fail";

console.log(result);