//Date = 4/2/2025
// --------------------------------------------------------------------------------------------------------
// var _myName = 'shah';
// var _1my__Name = 'shah';
// var $myName = 'shah';

// @@increment and decrement operator
// --------------------------------------------------------------------------------------------------------
// @@postfix operator

// var num = 15;
// var newNum = num++;
// console.log(num);
// console.log(newNum);

// @@prefix operator

// var num = 15;
// var newNum = ++num;
// console.log(num);
// console.log(newNum);
// --------------------------------------------------------------------------------------------------------
// @@decrease opreator

// var num = 15;
// var newNum = --num;
// console.log(num);
// console.log(newNum);
// --------------------------------------------------------------------------------------------------------
// var num = 15;
// var newNum = num--;
// console.log(num);
// console.log(newNum);
// --------------------------------------------------------------------------------------------------------
// @@Comparision operator

// var a = 30;
// var b = 10;
// --------------------------------------------------------------------------------------------------------
// @@equal operator (==)

// console.log(a==b);

// --------------------------------------------------------------------------------------------------------

// @@Not equal (!==)

// console.log(a != b);

// --------------------------------------------------------------------------------------------------------

// @@Greater than (>)

// console.log(a>=b);
// --------------------------------------------------------------------------------------------------------

// @@Greater than or equal (>=)

// console.log(a>=b);
// --------------------------------------------------------------------------------------------------------

// @@Less than (<)

// console.log(a<b);

// --------------------------------------------------------------------------------------------------------

// @@Less than Equal (<=)

// console.log(a<=b);

// --------------------------------------------------------------------------------------------------------

// @@Logical Operator

// var a = 30;
// var b = -20;

// @@Logical and Operator (&&)
// console.log(a > b && b > 0);

// --------------------------------------------------------------------------------------------------------
//@@ Logical or Operator (||)
// console.log(a > b || b > 0);

// --------------------------------------------------------------------------------------------------------
//@@ Logical not operator (!)

// console.log( !((a > b || b > 0)));
// console.log(!false);

// --------------------------------------------------------------------------------------------------------

// @@String Concatenation operator (+)

// console.log("zaidi " + "shah");

// var myName = "zaidi";
// console.log(myName + " shah");

// --------------------------------------------------------------------------------------------------------

//@@ Exponentiation operator (**)

// console.log(2**2);

// --------------------------------------------------------------------------------------------------------

// console.log(10 ** -1);
// --------------------------------------------------------------------------------------------------------
// console.log(5 ="shah");

// --------------------------------------------------------------------------------------------------------
// var a = 5;
// var b = 10;
// var c = b;
// b = a;
// a = c;

// console.log("value of a  " + a);
// console.log("value of b  " + b);

// --------------------------------------------------------------------------------------------------------

// var a = 5;
// var b = 10;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(a);
// console.log(b);

// --------------------------------------------------------------------------------------------------------

// var num1 = 5;
// var num2 = '5';

// console.log(num1 == num2);

// var num1 = 5;
// var num2 = '5';

// console.log(num1 === num2);

// --------------------------------------------------------------------------------------------------------

// @@if else

// var tommorow = 'sunny';
// if (tommorow === 'rain') {
//     console.log('take a jakcet');

// } else {
//     console.log('koi zarurat nai hai ');

// }

// --------------------------------------------------------------------------------------------------------

// @@IF else Task
// --------------------------------------------------------------------------------------------------------

// var year = 2020;

// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       console.log("this year " + year + " is a leap year ");
//     } else {
//       console.log("this year " + year + " is not leap year ");
//     }
//   } else {
//     console.log("this year " + year + " is a leap year ");
//   }
// } else {
//   console.log("this year " + year + " is not leap year ");
// }

// --------------------------------------------------------------------------------------------------------

// @@What is truthly and falsy balues in javaScript

// we have total 5  falsy values in javaScript
// 0 ,"" , undefine , null , NaN ,((( False is false anyway)))

// EXAMPLE

// if ((score = 1)) {
//   console.log("no");
// } else {
//   console.log("yes");
// }

// --------------------------------------------------------------------------------------------------------

// @@Conditional (ternary)  operator (:)

// The Conditional (ternanry)  operator is only JavaScript operator that takes three operands
// --------------------------------------------------------------------------------------------------------

// operands
// 2 + 6

// --------------------------------------------------------------------------------------------------------
// @@Conditional (ternanry)  operator (Example)
// var age = 18;
// console.log(age >= 18 ? "yes" : "no");

// --------------------------------------------------------------------------------------------------------

// @@Switch Statement
// --------------------------------------------------------------------------------------------------------
// @@Date 05/02/2025
// --------------------------------------------------------------------------------------------------------

// @@Break Statement

// var area = "circle";
// var PI = 2.142,
//   l = 5,
//   b = 4,
//   r = 3;

// switch (area) {
//   case "circle":
//     console.log("the area of circle is : " + PI * r ** 2);
//     break;
//   case "triangle":
//     console.log("the area of Triangle is : " + (l * b) / 2);
//     break;

//   case "circle":
//     console.log("the area of circle is : " + l * b);
//     break;

//   default:
//     console.log("please enter valid data");
// }

// --------------------------------------------------------------------------------------------------------
//@@ While loop statment

// var num = 20;
// while(num <= 10) {
//   console.log(num);
//   num++;
// }
// --------------------------------------------------------------------------------------------------------
// @@Do While loop statment
// var num = 0;
// do {
//   console.log(num);
//   num++;
// } while (num <= 10);
// --------------------------------------------------------------------------------------------------------
// @@Pratice
// for (var num = 1; num <= 10; num++) {
//   var tableOf = 2;
//   console.log(tableOf + " * " + num + " = " + tableOf * num);
// }
// --------------------------------------------------------------------------------------------------------
// @@Functions in JAvaScript (Section = 5)

// A jS function is block of code designed to perform a particular task.
// --------------------------------------------------------------------------------------------------------

//@@ Function

// function sum() {
//   var a = 10,
//     b = 20;
//   var total = a + b;
//   console.log(total);
// }
// --------------------------------------------------------------------------------------------------------
// @@calling Function

// function sum() {
//   var a = 10,
//     b = 20;
//   var total = a + b;
//   console.log(total);
// }
// sum();
// --------------------------------------------------------------------------------------------------------
// @@Function Parameter vs Function arguments
// --------------------------------------------------------------------------------------------------------
// @@Function Parameter
// function sum(a,b) {
//       var total = a + b;
//       console.log(total);
//     }
// --------------------------------------------------------------------------------------------------------
// @@Function arguments

// function sum(a,b) {
//     var total = a + b;
//     console.log(total);
//   }
//   sum(10,2)
// --------------------------------------------------------------------------------------------------------
//@@ Function Expression
// Create a function and put into the variable .

// function sum(a,b) {
//     var total = a + b;
//     console.log(total);
//   }
//   var funex = sum(10,2)
// --------------------------------------------------------------------------------------------------------
// @@Return Keyword
// when JS reaches a return statement the function will stop executing.
// function sum(a, b) {
//   return (total = a + b);
// }
// var funex = sum(10, 2);
// console.log(funex);
// --------------------------------------------------------------------------------------------------------
//@@Anonymous Function and Expression

// var funEx = function(a, b) {
//       return (total = a + b);
//     }
//     var sum =  funEx(2, 4);
//     console.log('the sum of these two number ' + sum);
// --------------------------------------------------------------------------------------------------------
// Let vs var vs const
// var => is function scope
// let and const is => block scope

// function bioData() {
//     const myFirstName = "zaidi";
//     console.log(myFirstName);
//     if (true) {
//         const myLastName = "shah";
//         console.log('inner ' + myLastName);
//         console.log('inner ' + myFirstName);
//     }
//     console.log('innerOuter ' + myLastName);

// }
// bioData();
// --------------------------------------------------------------------------------------------------------
// @@Template literala (Template String)

// for(let num = 1; num<= 10; num++) {
//     let tableOf = 2;
//     console.log(`${tableOf} * ${num} = ${tableOf * num}`);
// }
// --------------------------------------------------------------------------------------------------------
// @@Default Parameter

// function mul(a, b = 5) {
//   return a * b;
// }
// console.log(mul(3));

// --------------------------------------------------------------------------------------------------------
// @@ Fat Arrow  Function

// (Normal Function)
// function sum() {
//   let a = 1,
//     b = 2;
//     let sum = a+b;
//     return `the sum of ${sum}`
// }
// console.log(sum());

// @@ Fat Arrow  Function

// const sum = () => `the sum of ${(a = 1) + (b = 2)}`;
// console.log(sum());

// --------------------------------------------------------------------------------------------------------
// Arrays In Javascript

// let name = "ali";
// let name1 = "ali";
// let name2 = "ali";
// let myName = ["ali", "qasim", "hussian",'raza', 'khurram' ];

// console.log(myName[1]);

// --------------------------------------------------------------------------------------------------------
// @@Lower index and uper index
// this fast element of arry is called lower index and the element value of arry is upper index
// --------------------------------------------------------------------------------------------------------
// @@For loop is array
// for (var i = 0; i < myName.length; i++) {
//   console.log(myName[i]);
// }
// --------------------------------------------------------------------------------------------------------
// @@For in loop
// let myName = ["ali", "qasim", "hussian",'raza', 'khurram' ];
// for(let element in myName) {
//     console.log(element);
// }
// --------------------------------------------------------------------------------------------------------
// @@For of loop
// let myName = ["ali", "qasim", "hussian", "raza", "khurram"];
// for (let element of myName) {
//   console.log(element);
// }
// --------------------------------------------------------------------------------------------------------
// @@For each loop
// @@ use normal function
// let myName = ["ali", "qasim", "hussian", "raza", "khurram"];
// myName.forEach(function (element, index, array) {
//   console.log(element + index + array);
// });

// @@Arrow function
// let myName = ["ali", "qasim", "hussian", "raza", "khurram"];
// myName.forEach((element, index, array) => {
//   console.log(element + index + array);
// });

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------
