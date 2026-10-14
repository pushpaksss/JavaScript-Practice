// 1.Create an array of 5 numbers and use forEach() to print each number.
let nums5=[1,2,3,4,5]
nums5.forEach (function(val,ind,arr){
    console.log(val)

})
// 2.Create an array of student names and use forEach() to print:
// Hello, <name>
let studNames=["abhi","ram","pushpak","anu"]
studNames.forEach(function(currentvalue,index,arr){
    console.log("Hello",currentvalue);
})
// 3.Create an array of numbers and use map() to create a new array containing each number multiplied by 2.
let nums=[1,2,3,4,5]
let mulBy2=nums.map(function(crtvalue){
    return crtvalue*2
})
console.log(mulBy2);

// 4.Create an array of prices and use map() to add 100 to every price.
let price=[100,200,300,400,500]
let add100=price.map(function(crtvalue){
    return crtvalue+100
})
console.log(add100);
// 5.Create an array of numbers and use filter() to get only even numbers.
let evenNums=[1,2,3,4,5,6,7,8,9,10]
let even=evenNums.filter(function(value){
    return value%2==0
})
console.log(even);

// 6.Create an array of ages and use filter() to get students whose age is greater than or equal to 18.
let ages=[11,21,13,14,51,26,17,18,29,10]
let above18=ages.filter(function(value){
    return value>=18
})
console.log(above18);
// 7.Create an array of numbers and use find() to find the first number greater than 50.
let findNums=[19,32,53,44,25,56,71,28,59,10]
let above50=findNums.find(function(value,i){
     
    return value>50
})
console.log(above50);
// 8.Create an array of student objects with name and mark. Use find() to find the first student whose mark is greater than 80.
let studObjNames=[
    {
    name:"abhi",
    marks:79
    } ,
    {
    name:"ram",
    marks:69
    },
  {
    name:"pushpak",
    marks:90
    },
   {
    name:"anu",
    marks:98
    }
]
let studData=studObjNames.find(function(val){
    return val.marks>80
})
console.log(studData);

// 9.Create an array of numbers and use reduce() to calculate the total sum.
let addNums=[1,2,3,4,5]
let add=addNums.reduce(function(acc,currentval,ind,arr){
    return acc+currentval
},0)
console.log(add);

// 10. Create an array of prices and use reduce() to calculate the total price.
let prices=[100,200,300,400,500]
let addprice=prices.reduce(function(acc,crtvalue){
    return acc+crtvalue
},0)
console.log(addprice);
// 11.Create an array of numbers and use some() to check whether at least one number is greater than 100.
let marks=[170,30,60,147,86]
let above100=marks.some(function(marks){
    return marks>100
})
console.log(above100);

// 12.Create an array of marks and use every() to check whether all students scored above 35.
let mark=[70,30,60,17,86]
let above35=mark.every(function(marks){
    return marks>=35
})
console.log(above35);
// 🔹 Sort / Join / Array Conversion — 5 Questions
// 13.Create an array of numbers and sort them in ascending order using sort() with a callback.
let sorting=[70,130,60,17,86]
sorting.sort((a,b)=>a-b)
console.log(sorting);

// 14.Create an array of numbers and sort them in descending order.
let numsSort=[70,130,60,17,86]
numsSort.sort((a,b)=>b-a)
console.log(numsSort);

// 15.Create an array of student names and convert the array into a string using toString().
let studsNames=["abhi","ram","pushpak","anu"]
let namesString = studsNames.toString()
console.log(namesString);


// 16.Create an array of names and combine them using join() with " - ".
let studsNamesjoin=["abhi","ram","pushpak","anu"]
let namesStringjoin= studsNamesjoin.join(" - ")
console.log(namesStringjoin);
// 17.Create an array of products and use join() to display them as one sentence separated by commas.
let products = ["Laptop", "Mobile", "Headphones", "Keyboard", "Mouse"];
let prod= products.join(",")
console.log(prod);
// 🔹 String Methods — 8 Questions
// 18.Create a string "JavaScript" and print the character at index 4 using charAt().
let str="JavaScript"
let char=str.charAt(4)
console.log(char);

// 19.Create a string and use charCodeAt() to find the character code of its first character.
let charCodeAt="JavaScript"
let codeat=charCodeAt.charCodeAt(0)
console.log(codeat);
// 20.Create a string containing "Hello JavaScript" and print its length.
let len="Hello JavaScript"
console.log(len.length);

// 21.Create "JavaScript Developer" and use slice() to extract "JavaScript".
let extract="JavaScript Developer"
console.log(extract.slice(0,10))
// 22.Create a string containing lowercase text and convert it to uppercase using toUpperCase().
let str1="abhi"
console.log(str1.toUpperCase());

// 23. Create a string containing uppercase text and convert it to lowercase using toLowerCase().
let lower="ANI"
console.log(lower.toLowerCase());

// 24.Create a string with spaces before and after the text. Remove the extra spaces using trim().
let space="   Hello World!   "
console.log(space.trim());
// 25.Take a sentence from the user using prompt() and use includes(), indexOf(), startsWith(), and endsWith() to check different parts of the sentence.
let sentence=prompt("enter a sentence")
console.log(sentence.includes("java"));
console.log(sentence.indexOf("java"));
console.log(sentence.startsWith("hello"));
console.log(sentence.endsWith("script"));


// 🔹 Date Methods — 5 Questions
// 26.Create a new Date object and print the current:
// Year
// Month
// Date
// Day
let date=new Date()
console.log("Year:",date.getFullYear());
console.log("month:",date.getMonth()+1);
console.log("date:",date.getDate());
console.log("day:",date.getDay());

// 27.Create a new Date object and print the current:
// Hours
// Minutes
// Seconds
let date2=new Date()
console.log("hours:",date2.getHours());
console.log("mins:",date2.getMinutes());
console.log("secs:",date2.getSeconds());

// 28.Create a date and change its year using setFullYear().
let date3=new Date()
date3.setFullYear(2030)
console.log(date3);


// 29.Create a date and change its month and date using setMonth() and setDate().
let date4=new Date()
date4.setMonth(4);
date4.setDate(19);
console.log(date4);

// 30.Get the user's date of birth using prompt(), create a Date object, and find the day of the week on which they were born.
let userDOB=prompt("enter your DOB")
let dateUser=new Date(userDOB)
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
alert(days[(dateUser.getDay())]);

