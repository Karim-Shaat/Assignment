//_____Part 1
//1. Convert the string "123" to a number and add 7. (0.5 Grade)
// • Output Example: 130

// let x = "123";
// x = Number(x) + 7;
// console.log(x);



//2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
// • Input Example: 0
// • Output Example: "Invalid"

// let x = 0;
// if (!x) {
//     console.log("invalid");
    
// }



//3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
// • Output Example:1, 3, 5, 7, 9

// for (let x = 1; x <= 10; x++) {
//     if (x%2) {
//         console.log(x);    
//     }
// }



//4.Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
// • Input Example: [1, 2, 3, 4, 5]
// • Output Example: [2,4]

// let x = [1,2,3,4,5,6];
// let y = x.filter(x => x % 2 ===0);
// console.log(y);



//5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
// • Input Example: [1, 2, 3], [4, 5, 6]
// • Output Example: [1, 2, 3, 4, 5, 6]

// let x = [1,2,3];
// let y = [4,5,6];
// let merge = [...x , ...y];
// console.log(merge);



//6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday). (0.5 Grade)
// • Input Example: 2
// • Output Example: “Monday”

// let x =1;
// switch (x) {
//     case 1:
//         console.log("sunday");
//         break;
//     case 2:
//         console.log("monday");
//         break;
//     case 3:
//         console.log("Thursday");
//         break;
//     case 4:
//         console.log("wednesday");
//         break;
//     case 5:
//         console.log("tuesday");
//         break;
//     case 6:
//         console.log("friday");
//         break;
//     case 7:
//         console.log("saturday");
//         break;

//     default:
//         console.log("error");
//         break;
// }



//7. Create an array of strings and return their lengths using map method (0.5 Grade)
// • Input: ["a", "ab", "abc"]
// • Output Example: [1, 2, 3]

// let x =["a","ks","abc"]
// // let y = x.map(num => num.length)
// console.log(x.map(num => num.length));



//8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
// • Input Example: 15
// • Output Example: “Divisible by both”

// let x = 30;
// if (x % 3 === 0 && x % 5 === 0) {
//   console.log("Divisible by both");
// }



//9. Write a function using arrow syntax to return the square of a number (0.5 Grade)
// • Input Example: 5
// • Output Example: 25

// let square = x => x * x;
// console.log(square(5));



//10.Write a function that destructure an object to extract values and returns a formatted string. (0.5 Grade)
// • Input Example: const person = {name: 'John', age: 25}
// • Output Example: 'John is 25 years old'

// const person = {name: 'John', age: 25};
// function destructure(person) {
//    let {name , age} = person;
//    return `${name} is ${age} years old`;
// }
// console.log(destructure(person));



//11.Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
// • Input Example: 1, 2, 3, 4, 5
// • Output Example: 15

// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1,2,3,4,5));



// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
// • Output Example: “Success”

// function getSuccess() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Success");
//     }, 3000);
//   });
// }

// getSuccess().then(message => {
//   console.log(message);
// });


// 13. Write a function to find the largest number in an array. (0.5 Grade)
// • Input Example: [1, 3, 7, 2, 4]
// • Output Example: 7

// function largest(numbers) {
//   return numbers.reduce((num1, num2) => {
//    return num1 > num2 ? num1: num2;
//   }, 0);
// }
// console.log(largest([1,2,3,8,4]));

// function largest(numbers) {
//   return Math.max(...numbers);
// }
// console.log(largest([1,2,3,8,4]));



//14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
// • Input Example: name: "John", age: 30}
// • Output Example: ["name", "age"]

// function keys(obj) {
//   return Object.keys(obj);
// }

// const person = { name: "John", age: 30 };

// console.log(keys(person));




//15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
// • Input: "The quick brown fox"
// • Output: ["The", "quick", "brown", "fox"]

// function split(str) {
//   return str.split(" ");
// }

// console.log(split("The quick brown fox"));

// ______________________________________________________



