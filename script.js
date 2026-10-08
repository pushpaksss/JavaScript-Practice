// 1. Curried function that accepts 3 numbers and prints their sum
function addCurried(a) {
    return function(b) {
        return function(c) {
            console.log("1.", a + b + c);
        };
    };
}
addCurried(10)(20)(30);


// 2. Curried function for name, department, and salary
function employeeCurried(name) {
    return function(department) {
        return function(salary) {
            console.log("2.", name, department, salary);
        };
    };
}
employeeCurried("Pushpak")("IT")(50000);


// 3. Curried function that accepts 3 numbers and prints multiplication
function multiplyCurried(a) {
    return function(b) {
        return function(c) {
            console.log("3.", a * b * c);
        };
    };
}
multiplyCurried(2)(3)(4);


// 4. Convert a curried function into an uncurried function
function curriedExample(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

function uncurriedExample(a, b, c) {
    console.log("4.", curriedExample(a)(b)(c));
}

uncurriedExample(10, 20, 30);


// 5. Curried and uncurried versions of adding 4 numbers
function addFourCurried(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return a + b + c + d;
            };
        };
    };
}

function addFourUncurried(a, b, c, d) {
    return a + b + c + d;
}

console.log("5. Curried:", addFourCurried(10)(20)(30)(40));
console.log("5. Uncurried:", addFourUncurried(10, 20, 30, 40));


// 6. Merge two arrays using array spread
let spreadNumbers1 = [10, 20, 30, 40, 50];
let spreadNumbers2 = [60, 70, 80, 90, 100];

let mergedSpreadNumbers = [...spreadNumbers1, ...spreadNumbers2];

console.log("6.", mergedSpreadNumbers);


// 7. Merge two student name arrays using spread
let students1 = ["Pushpak", "Priya", "Amit"];
let students2 = ["Sneha", "Arjun", "Kiran"];

let allStudents = [...students1, ...students2];

console.log("7.", allStudents);


// 8. Copy an array and add 3 new values using spread
let originalValues = [10, 20, 30, 40];

let newValues = [...originalValues, 50, 60, 70];

console.log("8.", newValues);


// 9. Merge two employee objects using object spread
let employeeOne = {
    name: "Pushpak",
    department: "IT"
};

let employeeTwo = {
    designation: "Developer",
    experience: 2
};

let mergedEmployee = {
    ...employeeOne,
    ...employeeTwo
};

console.log("9.", mergedEmployee);


// 10. Copy employee object and add salary
let employeeData = {
    name: "Priya",
    department: "HR"
};

let employeeWithSalary = {
    ...employeeData,
    salary: 45000
};

console.log("10.", employeeWithSalary);


// 11. Combine two objects with different properties
let objectOne = {
    name: "Pushpak",
    age: 25
};

let objectTwo = {
    city: "Hyderabad",
    job: "Developer"
};

let combinedObject = {
    ...objectOne,
    ...objectTwo
};

console.log("11.", combinedObject);


// 12. Create one array in reverse order using spread
let arrayOne = [1, 2, 3];
let arrayTwo = [4, 5, 6];

let reverseSpreadArray = [...arrayTwo.reverse(), ...arrayOne.reverse()];

console.log("12.", reverseSpreadArray);


// 13. Function with two fixed values and remaining values using rest
function fixedAndRest(first, second, ...remaining) {
    console.log("13. First:", first);
    console.log("13. Second:", second);
    console.log("13. Remaining:", remaining);
}

fixedAndRest(10, 20, 30, 40, 50, 60);


// 14. Student function with rest parameter for marks
function student(name, department, ...marks) {
    console.log("14. Name:", name);
    console.log("14. Department:", department);
    console.log("14. Marks:", marks);
}

student("Pushpak", "CSE", 80, 85, 90, 88);


// 15. Function with two numbers and additional numbers using rest
function numbersWithRest(a, b, ...additionalNumbers) {
    console.log("15. First:", a);
    console.log("15. Second:", b);
    console.log("15. Additional:", additionalNumbers);
}

numbersWithRest(10, 20, 30, 40, 50, 60);


// 16. Function that prints the 5th value from rest parameter
function fifthRestValue(a, ...values) {
    console.log("16.", values[4]);
}

fifthRestValue(10, 20, 30, 40, 50, 60);


// 17. Product, price, and remaining values using rest
function productDetails(product, price, ...details) {
    console.log("17. Product:", product);
    console.log("17. Price:", price);
    console.log("17. Remaining:", details);
}

productDetails("Laptop", 60000, "Dell", "16GB RAM", "512GB SSD");


// 18. Receive 10 numbers and store values after first two using rest
function tenNumbers(first, second, ...remainingNumbers) {
    console.log("18. First:", first);
    console.log("18. Second:", second);
    console.log("18. Remaining:", remainingNumbers);
}

tenNumbers(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);


// 19. Extract all four values using array destructuring
let fourValues = [10, 20, 30, 40];

let [value1, value2, value3, value4] = fourValues;

console.log("19.", value1, value2, value3, value4);


// 20. Extract first, second, and third student details
let studentDetailsArray = ["Pushpak", "CSE", 85];

let [studentName, studentDepartment, studentMarks] = studentDetailsArray;

console.log("20.", studentName, studentDepartment, studentMarks);


// 21. Extract only first and fourth values
let fiveNumbers = [10, 20, 30, 40, 50];

let [firstNumber, , , fourthNumber] = fiveNumbers;

console.log("21. First:", firstNumber);
console.log("21. Fourth:", fourthNumber);


// 22. Nested array destructuring
let nestedArray = [10, [20, 30]];

let [nestedValue1, [nestedValue2, nestedValue3]] = nestedArray;

console.log("22.", nestedValue1, nestedValue2, nestedValue3);


// 23. Nested array with 3 levels
let threeLevelArray = [10, [20, [30, 40]]];

let [levelValue1, [levelValue2, [levelValue3, levelValue4]]] = threeLevelArray;

console.log("23.", levelValue1, levelValue2, levelValue3, levelValue4);


// 24. Employee object destructuring
let employeeObject = {
    name: "Pushpak",
    designation: "Software Engineer",
    salary: 60000
};

let {
    name: employeeName,
    designation: employeeDesignation,
    salary: employeeSalary
} = employeeObject;

console.log("24.", employeeName, employeeDesignation, employeeSalary);


// 25. Student object destructuring
let studentObject = {
    name: "Sneha",
    department: "ECE",
    cgpa: 8.7
};

let {
    name: studentObjectName,
    department: studentObjectDepartment,
    cgpa: studentCgpa
} = studentObject;

console.log("25.", studentObjectName, studentObjectDepartment, studentCgpa);


// 26. Extract only 3 properties from an object
let fiveProperties = {
    name: "Kiran",
    age: 22,
    city: "Hyderabad",
    department: "CSE",
    cgpa: 8.5
};

let {
    name: fiveName,
    city: fiveCity,
    cgpa: fiveCgpa
} = fiveProperties;

console.log("26.", fiveName, fiveCity, fiveCgpa);


// 27. Nested object destructuring
let companyTeam = {
    employee: {
        name: "Pushpak"
    },
    team: {
        members: ["Amit", "Priya", "Kiran"]
    }
};

let {
    employee: { name: teamEmployeeName },
    team: { members: teamMembers }
} = companyTeam;

console.log("27. Employee:", teamEmployeeName);
console.log("27. Team Members:", teamMembers);


// 28. company → department → employee nested destructuring
let companyData = {
    department: {
        employee: {
            name: "Pushpak"
        }
    }
};

let {
    department: {
        employee: { name: nestedEmployeeName }
    }
} = companyData;

console.log("28.", nestedEmployeeName);


// 29. Add 3 fruits using push()
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

fruits.push("Pineapple", "Papaya", "Watermelon");

console.log("29.", fruits);


// 30. Remove last value using pop()
let popNumbers = [10, 20, 30, 40, 50];

popNumbers.pop();

console.log("30.", popNumbers);


// 31. Remove first student using shift()
let studentNames = ["Pushpak", "Priya", "Amit", "Sneha", "Kiran"];

studentNames.shift();

console.log("31.", studentNames);


// 32. Add 2 numbers at the beginning using unshift()
let unshiftNumbers = [30, 40, 50, 60];

unshiftNumbers.unshift(10, 20);

console.log("32.", unshiftNumbers);


// 33. Replace 30 with 100 using splice()
let replaceNumbers = [10, 20, 30, 40, 50];

replaceNumbers.splice(2, 1, 100);

console.log("33.", replaceNumbers);


// 34. Remove 2 values from the middle using splice()
let removeMiddle = [10, 20, 30, 40, 50, 60];

removeMiddle.splice(2, 2);

console.log("34.", removeMiddle);


// 35. Add 3 new values in the middle using splice()
let addMiddle = [10, 20, 60, 70];

addMiddle.splice(2, 0, 30, 40, 50);

console.log("35.", addMiddle);


// 36. Remove 2 values and add 3 new values at same position
let replaceMiddle = [10, 20, 30, 40, 50, 60];

replaceMiddle.splice(2, 2, 100, 200, 300);

console.log("36.", replaceMiddle);


// 37. Remove one student from the middle using splice()
let studentList = ["Pushpak", "Priya", "Amit", "Sneha", "Kiran"];

studentList.splice(2, 1);

console.log("37.", studentList);


// 38. Shopping cart using push, pop, shift, and unshift
let shoppingCart = ["Laptop", "Mouse", "Keyboard"];

shoppingCart.push("Headphones");
console.log("38. After push:", shoppingCart);

shoppingCart.pop();
console.log("38. After pop:", shoppingCart);

shoppingCart.shift();
console.log("38. After shift:", shoppingCart);

shoppingCart.unshift("Monitor");
console.log("38. After unshift:", shoppingCart);


// 39. Merge two arrays using concat()
let concatArray1 = [10, 20, 30];
let concatArray2 = [40, 50, 60];

let concatResult = concatArray1.concat(concatArray2);

console.log("39.", concatResult);


// 40. Merge three arrays using concat()
let concatFirst = [1, 2];
let concatSecond = [3, 4];
let concatThird = [5, 6];

let threeArrayResult = concatFirst.concat(concatSecond, concatThird);

console.log("40.", threeArrayResult);


// 41. Extract values from index 2 to index 5 using slice()
let eightValues = [10, 20, 30, 40, 50, 60, 70, 80];

let slicedValues = eightValues.slice(2, 6);

console.log("41.", slicedValues);


// 42. Extract first 3 students using slice()
let sliceStudents = ["Pushpak", "Priya", "Amit", "Sneha", "Kiran"];

let firstThreeStudents = sliceStudents.slice(0, 3);

console.log("42.", firstThreeStudents);


// 43. Convert 3-level nested array into single-level array using flat()
let threeLevelNested = [1, [2, [3, 4]]];

let flatThreeLevel = threeLevelNested.flat(2);

console.log("43.", flatThreeLevel);


// 44. Remove 4 levels of nesting using flat()
let fourLevelNested = [1, [2, [3, [4, 5]]]];

let flatFourLevel = fourLevelNested.flat(Infinity);

console.log("44.", flatFourLevel);


// 45. Difference between slice() and splice()
let sliceExample = [10, 20, 30, 40, 50];

let sliceResult = sliceExample.slice(1, 3);

console.log("45. Original after slice:", sliceExample);
console.log("45. Slice result:", sliceResult);

let spliceExample = [10, 20, 30, 40, 50];

let spliceResult = spliceExample.splice(1, 2);

console.log("45. Original after splice:", spliceExample);
console.log("45. Splice result:", spliceResult);


// 46. Check whether 50 exists using includes()
let includesNumbers = [10, 20, 30, 40, 50, 60];

let isFiftyPresent = includesNumbers.includes(50);

console.log("46.", isFiftyPresent);


// 47. Find first occurrence using indexOf()
let duplicateNumbers1 = [10, 20, 30, 20, 40, 20];

let firstOccurrence = duplicateNumbers1.indexOf(20);

console.log("47.", firstOccurrence);


// 48. Find last occurrence using lastIndexOf()
let duplicateNumbers2 = [10, 20, 30, 20, 40, 20];

let lastOccurrence = duplicateNumbers2.lastIndexOf(20);

console.log("48.", lastOccurrence);


// 49. Sort an array of numbers
let unsortedNumbers = [50, 10, 40, 20, 30];

unsortedNumbers.sort((a, b) => a - b);

console.log("49.", unsortedNumbers);


// 50. Reverse an array
let reverseNumbers = [10, 20, 30, 40, 50];

reverseNumbers.reverse();

console.log("50.", reverseNumbers);