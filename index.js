// Date = 4/2/2025
// --------------------------------------------------------------------------------------------------------
// var _myName = "shah";
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
// @@ Logical or Operator (||)
// console.log(a > b || b > 0);

// --------------------------------------------------------------------------------------------------------
// @@ Logical not operator (!)

// console.log( !((a > b || b > 0)));
// console.log(!false);

// --------------------------------------------------------------------------------------------------------

// @@String Concatenation operator (+)

// console.log("zaidi " + "shah");

// var myName = "zaidi";
// console.log(myName + " shah");

// --------------------------------------------------------------------------------------------------------

// @@ Exponentiation operator (**)

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
// @@ While loop statment

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

// @@ Function

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
// @@ Function Expression
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
// @@Anonymous Function and Expression

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
// @@For Each loop
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
// # Date= 6/2/2025
// --------------------------------------------------------------------------------------------------------
// @@ Searching and filter in an Array
// Array.prototype.indexOf()

// var myFriendName = ['shah', 'zaidi', 'haider', 'king', 'queen'];
// console.log(myFriendName.indexOf('haider'));

// --------------------------------------------------------------------------------------------------------
// @@ Array.prototype.lastIndexOf()

// var myFriendName = ["shah", "zaidi", "haider", "king", "queen"];
// console.log(myFriendName.lastIndexOf("zaidi", 3));

// --------------------------------------------------------------------------------------------------------
// @@ Array.prototype.include()

// var myFriendName = ["shah", "zaidi", "haider", "king", "queen"];
// console.log(myFriendName.includes("zaidi"));

// --------------------------------------------------------------------------------------------------------
// @@ Array.prototype.find()
// Return the found elemnt in the array if some element in the
// array satisfies te testing function or undefine if not found
// Only problem is that it return only one element.

// const prices = [100, 300, 350, 400, 450];
// const findElem = prices.find((currVal) => {
//     return currVal < 400;
// })
// console.log(prices.find((currVal) => currVal > 1400));
// --------------------------------------------------------------------------------------------------------
// @@ Array.prototype.findIndex()
// const prices = [100, 300, 350, 400, 450]
// console.log(prices.findIndex((currVal) => currVal < 400));
// --------------------------------------------------------------------------------------------------------
// @@  Array.prototype.filter()
// Returns a new array containing all elements of the calling
// array for which the provided filtering function returns true.

// const prices = [100, 300, 350, 400, 450];
// const newPriceTag = prices.filter((elem, index) => {
//     return elem > 1400
// })
// console.log(newPriceTag);

// --------------------------------------------------------------------------------------------------------
// @@ How to short Array
// Array.prototype.sort()
// order in ascending order and its work on only strings
// const months = ['jan', 'feb', 'mar', 'apr', 'may']
// console.log(months.sort());
// const num = [80, 60, 40, 10, 5];
// console.log(num.sort());
// // --------------------------------------------------------------------------------------------------------
// @@ Perform CRUD (Create Read Update and Delete)

// Array.prototypw.push() its return the new length of array
// const animal = ['cow', 'sheep', 'cat', 'bull'];
// const count = animal.push('goat');
// console.log(count);
// animal.push('goat', 'deep', 'heep', 'keep')
// console.log(animal);

// --------------------------------------------------------------------------------------------------------
// @@ Array.protoype.unshift()
// const animal = ['cow', 'sheep', 'cat', 'bull'];
// const count = animal.unshift('goat');
// console.log(count);
// console.log(animal)
// animal.push('goat', 'deep', 'heep', 'keep')

// ## Example 2
// const number = [1, 3, 2, 4, 5, 5];
// number.unshift(8);
// console.log(number);
// --------------------------------------------------------------------------------------------------------
// @@ Array.protoype.pop()
// pop mmethod remove the last elemnt of array and change the length of array and return that element

// const flow = ['aa', 'cc', 'bb', 'gg'];
// console.log(flow);
// console.log(flow.pop());
// console.log(flow);
// --------------------------------------------------------------------------------------------------------
// @@ Array.protoype.shift()
//  shift method remove the fist element of array and return remove element
// const flow = ['aa', 'cc', 'bb', 'gg'];
// console.log(flow);
// console.log(flow.shift());
// console.log(flow);
// --------------------------------------------------------------------------------------------------------
// @@ Practice time
// --------------------------------------------------------------------------------------------------------
// @@ Array.prototype.splice()
// const flow = ['aa', 'cc', 'bb', 'gg'];
// const newFlow = flow.splice(4,0,'zz')
// Sol 1 //
// const newFlow = flow.splice(flow.length,0,'zz')
// console.log(flow);
// Sol 2 //
// console.log(newFlow);
// Sol 3 //
// const flow = ['aa', 'cc', 'bb', 'gg'];
// const bigFlow = flow.splice(1,1,'FF');
// console.log(flow);

// const indexOfFlow = flow.indexOf('bb');

// if (indexOfFlow != -1) {
//     const updateFlow = flow.splice(indexOfFlow,1,'BB')
//     console.log(flow);
// } else {
//     console.log('data are not');

// }

// const indexOfFlow = flow.indexOf('bb');

// if (indexOfFlow != -1) {
//     const updateFlow = flow.splice(indexOfFlow,1)
//     console.log(flow);
// } else {
//     console.log('data are not');
// }
// --------------------------------------------------------------------------------------------------------
// @@ Map and Reduce Method

// @@ Array.prototype.map()
// Return a new array conatining the result of calling a function on every element in this array

// const array1 = [1,2,4,5,9,70,78,88];
// let newArr = array1.map((curElem,index,arr) => {
//     return curElem > 9
// })
// console.log(array1);
// console.log(newArr);
// let newArr = array1.map((curElem,index,arr) => {
//     return `index no = ${index} and the value is ${curElem} belong to ${arr}`
// })
// console.log(newArr);
// --------------------------------------------------------------------------------------------------------
// @@Practice time
// Sol 1
// let arr = [25, 36, 49, 64, 69 ]
// let arrsqr = arr.map((currelm) =>  Math.sqrt(currelm));
// console.log(arrsqr);

// Sol 2
// let arr = [2, 3, 4, 6, 8];

// let arr2 = arr
//   .map((element) => element * 2)
//   .filter((element) => element > 10)
//   .reduce((accumulator, curelme, index, arr) => (accumulator += curelme));
// console.log(arr2);
// --------------------------------------------------------------------------------------------------------
// @@ Reduce Method
// Flatten an array means to convert the 3d or 2d array into a single dimensional array

// let arr = [5, 6, 7];
// let sum = arr.reduce((accumulator, curelme, index, arr) => {
//   return (accumulator += curelme);
// },2);
// console.log(sum);

// --------------------------------------------------------------------------------------------------------
// @@ converting 2b array into dimentsional array

// const arr = [
//   ["shah1", "zaidi1"],
//   ["shah2", "zaidi2"],
//   ["shah3", "zaidi7"],
//   ["shah4", "zaidi4"],
// ];

// let flatArry = arr.reduce((accum, currval) => {
//   return accum.concat(currval);
// });

// console.log(flatArry);

// --------------------------------------------------------------------------------------------------------
// @@ String in JavaScript

// A Javascript string is zero to more charters written inside quote

// JS string are use for storing na d manipulating text.
// In string we use single are double quotes

// Strings can be created as primitives,
//  from stings literals, or as object, using the string() constructor

// Example

// let myName = "zaidi shah";
// let myChannelName = 'zaidi shah';
// let nickName = new String("haider zaidi");
// console.log(myName);
// console.log(nickName);
// --------------------------------------------------------------------------------------------------------
// @@ how to find length of string
// let myName = "zaidi shah";
// console.log(myName.length);
// --------------------------------------------------------------------------------------------------------
// @@ Escape character

// let anysen = "we are soo \"shah\" from the earth.";
// let anysen = 'we are soo "shah" from the earth.';
// console.log(anysen);
// --------------------------------------------------------------------------------------------------------
// @@ find a sting in a string

// @@string.prototype.indexOf(searchValue [, fromIndex])

// The indexOf() method returns the index of (The position of) the first occurrence of a specified text in srting

// const myData = 'I am a developer ';
// console.log(myData.indexOf('developer'));

// --------------------------------------------------------------------------------------------------------
// @@string.prototype.lastIndexOf
// const myData = 'I am a developer ';
// console.log(myData.lastIndexOf('a', 4));
// --------------------------------------------------------------------------------------------------------
// @@ Date 7/2/2025
// --------------------------------------------------------------------------------------------------------
// @@ Search for a string  in a string

//  String.prototype. search(regexp)
// The search() method searches a string for a specified
// value nad return the position of the match

// const myBio = "i am mujtaba haider";
// let sData = myBio.search("am")
// console.log(myBio);
// console.log(sData);

// --------------------------------------------------------------------------------------------------------
// @@ Extracting string part
// There are three method for Extracting a part of a string.

// slice(start,end)
// substring(start,end)
// substr(start,end)

// @@The slice() method
// slice() extracts a part of a string nad return the extracted part in a new string.

//  The method takes 2 parameter: the start position and the end position (end not include).

// var str = "Apple, Banna, Kiwi";
// let res = str.slice(0,4);
// let res = str.slice(7,-2);
// console.log(res);
//  The slice method selects the element  starting at the given start argument, and ends at, but does not
// include the given argument
// NOTE: The original array will not be changed .
// Reminder JavaScript counts position from zero. first poisition is 0
// --------------------------------------------------------------------------------------------------------
// ## practice time
// let myTweet =
//   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa incidunt ex quam excepturiLorem ipsum dolor sit amet consectetur adipisicing elit. Rerum provident aut porro iusto rem a quisquam, quae possimus vero eaque aperiam doloribus delectus nemo modi quaerat blanditiis dolorum nulla? Suscipit.asperiores et perspiciatis qui tenetur quae corporis temporibus quod, doloribus harum similique laborum impedit sunt nam! Necessitatibus.";
// let myac = myTweet.slice(0, 280);
// console.log(myTweet.length);
// console.log(myac);

// --------------------------------------------------------------------------------------------------------
// @@ substring method
// substring can't accept nagative indexes
// var str = "Apple, Banna, Kiwi";
// let bax = str.substring(7,-2);
// console.log(bax);
// --------------------------------------------------------------------------------------------------------
// @@ Replace string content ()
// string.prototype.replace(searchFor, replacewith)

// The replace() method replaces a specified value with other value in string
// let bio = `my name is zaidi i am shah zaidi`;
// let replace = bio.replaceAll('zaidi ', 'haider ');
// console.log(replace);

// --------------------------------------------------------------------------------------------------------
// @@ Extracting string character
// there are 3 types of method  to extracting string character
// chartAt(position)
// charCodeAt(position)
// Property access []
// --------------------------------------------------------------------------------------------------------
// @@chartAt(position)
// the charAt method returns the character at a specified index (position) in a string
// let stc = "HELLOW WORLD";
// console.log(stc.charAt(1));
// --------------------------------------------------------------------------------------------------------
// @@ toUppercase and toLowerCase
// let myNmae = "haider zaidi"
// console.log(myNmae.toUpperCase());
// console.log(myNmae.toLowerCase());

// --------------------------------------------------------------------------------------------------------
// @@ concat method
// let firstNmae = "zaidi ";
// let lastName = "shah";
// console.log(firstNmae.concat(lastName));

// --------------------------------------------------------------------------------------------------------
// @@ string.trim()
// trim() method remove white shpace from both sides of a string
// let nam = "                hahah      "
// console.log(nam.trim());

// --------------------------------------------------------------------------------------------------------
// @@ converting string into array
// converting string into array using split() method
// let text = "a, b, c, d, e";
// console.log(text.split(","));
// console.log(text.split(" "));
// console.log(text.split("|"));

// --------------------------------------------------------------------------------------------------------
// @@  Date and time in JavaScript
// jAvaScript Date object represent a gingle moment in time in a platform-independent format Date object
// contain a number that represent millisecoound since 1 january 1970 UTC
// --------------------------------------------------------------------------------------------------------
// @@ Createing Date object
// there are 4 way to create a new Date object
//  new Date ()
// //  it take 7 arguments
//  new Date (year, months, day, hours, minutes, secound, miillisecound)
//  new Date (miillisecound)
// //  we can't avoid month section
//  new Date (date string)

// --------------------------------------------------------------------------------------------------------
// // @@ new Date ()
// let curDate = new Date();
// console.log(curDate);
// console.log(new Date ());
// console.log(new Date ().toDateString());
// console.log(new Date ().toString());

// --------------------------------------------------------------------------------------------------------
// @@Date .now
// find for secound after 1970
// console.log(Date.now());

// --------------------------------------------------------------------------------------------------------
// @@ Date Method
// const curDate = new Date();
// console.log(curDate.toDateString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDate());
// console.log(curDate.getDay());

// --------------------------------------------------------------------------------------------------------
// @@ Time method
// const curDate = new Date();
// // console.log(curDate.getTime());
// console.log(curDate.getHours());
// console.log(curDate.getMinutes());
// console.log(curDate.getSeconds());
// console.log(curDate.getMilliseconds());
// --------------------------------------------------------------------------------------------------------
// Date = 10/2/2025
// --------------------------------------------------------------------------------------------------------
// @@ Math object in javaScript
// The js math object allows you to perform mathematical task on number.
// console.log(Math.PI);

// --------------------------------------------------------------------------------------------------------
// @@ Round Method Math.round()
// return the value of x rounded to its nearst integer
// let num = 10.2565;
// console.log(Math.round(num));

// --------------------------------------------------------------------------------------------------------
// @@Pow method Math.pow()
// return the value of x to the power of y
// console.log(Math.pow(2,3));

// --------------------------------------------------------------------------------------------------------
// Sqrt Method Math.sqrt()
// its return square root of x
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(20));
// console.log(Math.sqrt(30));

// --------------------------------------------------------------------------------------------------------
// @@ abs method Math.abs()
// its return the absolute (positive) value of x

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-966));

// --------------------------------------------------------------------------------------------------------
// @@ ceil methos Marhod.ceil()
// its return the value of x rounded up to its nearest integer.

// console.log(Math.ceil(4.51));
// console.log(Math.ceil(99.1));

// --------------------------------------------------------------------------------------------------------
// @@ Floor method Math.floor()
// its return the value of x round down to its nearst interger

// console.log(Math.floor(4.6));
// console.log(Math.floor(8.1));

// --------------------------------------------------------------------------------------------------------
// @@ min methos Math.min()
// its return the lowest number ina list of argument
// console.log(Math.min(2, 3, 4, 6, 7, -9));

// --------------------------------------------------------------------------------------------------------
// @@ max methos Math.max()
// its return the highest number ina list of argument
// console.log(Math.max(2, 3, 4, 6, 7, -9));

// --------------------------------------------------------------------------------------------------------
// @@ random method Math.random()
// its return random number between 0 to 1 when we put condition 1 to 10 then its return random number 1 to 10
// console.log(Math.floor(Math.random()*10));

// --------------------------------------------------------------------------------------------------------
// @@ trunc method Math.turnc()
// its return the integer part of number
// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));

// --------------------------------------------------------------------------------------------------------
// @@ DOM in JavaScript

//  @@cWindow vs DOM
// ## Window
// Window is the main container or we can say the (Global ojbect ) and any operation related to entier
// browser window can be a part of a window object
// ## DOM
// Dom is the child of window object
// --------------------------------------------------------------------------------------------------------
// @@ DOM vs BOM

// ## DOM
// The DOM is document object model, which deals with the document, the HTML element themselve e.g
// document and all traversal you would do in it, events etc.

// FOR example :-
// chage the backgroud color red
// document.body.style.background = "red";
// --------------------------------------------------------------------------------------------------------
// ## BOM
// The BOM is the broeswr object model, which deals with browser components aside from the document, like
// history, location , navigator and screen (as well as some other that very by browser). OR
// In simple meaning all the window operation which comes under BOM are performed using BOM
// --------------------------------------------------------------------------------------------------------
// @@ Navigate through the DOM
// 1: document.documentElement
// return the element that is the root element of the document
// 2: document.head
// 3: document.body
// 4: document.boday.childNode (include tab,enter and whiteSpace)
// list of the direct children only
// 5: document.children (without text nodes, only regular Element )
// 6: documnet. childNode,Length
// 7: document.body.firstElemetChild
// use to find child
// 8: document.body.nextSibiling
// 9: document.body.nextElemntSibiling
// 10: document.body.previousElemntSibiling
// 11:document.getElementById()
// 12:document.getElementsByClassName()
// 11:document.getElementsByName()
// 13: document.querySelector()
// select first matching value
// 14: document.querySelectorAll()
// will return all the element

// --------------------------------------------------------------------------------------------------------
// @@ EVENTS in JavaScript

// HTML enents are "things" tat happen to HTMl elements.
// When jS is used in HTML pages, JS can "react" on these events
// --------------------------------------------------------------------------------------------------------
// @@ HTML Events
// An HTML event can be something in browser does, or something  are user does.
// Here a some example of HTML events
// 1: An HTML web page has finished loading
// 2: An input field was changed
// 3: An HTML web page has finished loading
// often, when event happen, you may want to do something.
// 4: HTML allows events handler attributes, with  JS code,
// to be added to HTML elements.

// --------------------------------------------------------------------------------------------------------
// @@ 4 way of writing Events in JavaScript

// 1: using inline events alert();
// 2: By calling a function (We already seen and most common way of writing )
// 3: Using Inline events (HTMl onclick = "" property and element.onclick)
// 4: using event listeners (addEventlistener and IE's attachEvent)

// check the event HTML file
// --------------------------------------------------------------------------------------------------------
// @@ What is Event object
//  Event object is the parent object of the event object.
// For example: click event, onClick event etc.
// --------------------------------------------------------------------------------------------------------
// ## Date = 11/2/2025
// --------------------------------------------------------------------------------------------------------
// @@ Mouse event in JavaScript
// The Mouse object
// Event that occur when the mouse interacts with the HTML document belong to the MouseEvent Object.

// --------------------------------------------------------------------------------------------------------
// @@ Keyboard events in Javascript
// Event that occur when user presses a key on the keyboard belong to KeyboardEvent Object.
// --------------------------------------------------------------------------------------------------------
// @@ InputEvent in Javascript
// The onchange occurs when the value of an element has been changed
// --------------------------------------------------------------------------------------------------------
// @@ difference between addEventListener and onclick
// The addEventListener does not overwrite existing handler,
// The onclick overwrite ant existing onclick = fn evenr handler.

// The other significant difference, of course, is that onclick will always work,
// where as addEventListener does not work in Internet Explorer before version 9.
// --------------------------------------------------------------------------------------------------------
// @@ Timing events in JavaScript
// The Window object allows execution of code at specified time intervals.

// These time intervals are called timing event

// The two method to use with JavaScript are:

// {
// setTimeout(function, millisecounds)
// Executes a function, after waiting a specified number of millisecounds.
// }

// {setInterval(function, millisecounds)
// Same as setTimeout(), but repeats the execution of the function continuously
// }

// --------------------------------------------------------------------------------------------------------
// @@ clearTimeout()
//  it is use for stop loading time.

// --------------------------------------------------------------------------------------------------------
// @@ Object orinted JavaScript
// --------------------------------------------------------------------------------------------------------
// @@ What is object literal ?
// Object literal is simply a key and value pair data structure.
// Storing variable and function together in on container  we can refer this an Object

// --------------------------------------------------------------------------------------------------------
// 1st way
// let bioData = {
//     myName: 'syed',
//     myAge : 22,
//     getData : function() {
//         console.log(`my name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// }
// bioData.getData()
// --------------------------------------------------------------------------------------------------------
// 2nd way no need to write function as well
// let bioData = {
//     myName: 'syed',
//     myAge : 22,
//     getData() {
//         console.log(`my name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// }
// bioData.getData()
// --------------------------------------------------------------------------------------------------------
// 3rd way
// let bioData = {
//     myName: {
//         firstName : 'mujtaba',
//         lastName : 'shah'
//     },
//     myAge : 22,
//     getData() {
//         console.log(`my name is ${bioData.myName.firstName} and my age is ${bioData.myAge}`);
//     }
// }
// console.log(bioData.myName.firstName);

// bioData.getData()
// --------------------------------------------------------------------------------------------------------

// @@ What is this object?
// this object is that it contain the current context
// This values object can have different values depending on where it is placed.

// for example 1
// console.log(this);

// Ex 2
// function myName() {
//     console.log(this);
// }
// myName();

// Ex 3
// let myNames = 'shah';
// function myName() {
//     console.log(this.myNames);
// }
// myName()

// --------------------------------------------------------------------------------------------------------
// Ex 4
// const obj ={
//     myAge: 14,
//     myNAme() {
//         console.log(this);
//     }
// }
// obj.myNAme()

// --------------------------------------------------------------------------------------------------------
// Ex 5

// const obj ={
//     myAge: 14,
//     myNAme: () => {
//         console.log(this);
//     }
// }
// obj.myNAme()
// --------------------------------------------------------------------------------------------------------
// @@ Destructuring in ES6
// The destructuring assigment syntax is a javaScript expression that makes it possiable to unpack values
// from arraysor porperties from objects, into distinct variables.
// --------------------------------------------------------------------------------------------------------
// @@ Array Destructuring
// const myData = ["zaidi", "shah", 12];
// let myFName = myData[0];
// let myLName = myData[1];
// let myAge = myData[2];
// let [myFName, myLName,myAge]= myData
// console.log(myAge);

// let [myFName, myLName,myAge, myDegree = "4th Fail"]= myData
// console.log(myDegree);

// --------------------------------------------------------------------------------------------------------
//@@ Object Destructuring
// let myData = {
//   myFName: "zaidi",
//   myLName: "shah",
//   myAge: 22,
// };

// let age = myData.myAge;
// let { myFName, myLName, myAge, myDegree = "4th Fail" } = myData;
// console.log(`My name is ${myFName} ${myLName} my age is ${myAge} and I am ${myDegree} O yeah`);

// --------------------------------------------------------------------------------------------------------
// Date 12/2/2025
// --------------------------------------------------------------------------------------------------------
//@@ Object properties
// we can now use dynamic properties
// no need to write key and value, if both are same

// let myFName = "zaidi";
// const myBio = {
//     [myFName] : "hellow world",
//     [20 + 2] : "is my age"
// }
// console.log(myBio);

// let myName = "zaidi shah";
// let age = 22;
// const bio = {myName, age}
// console.log(bio);

// --------------------------------------------------------------------------------------------------------
// @@ Spread Operator

// const color = ['red', 'blue', 'green', 'white']
// const myColor = ['red', 'blue', 'green', 'white', 'black','pink']
//2nd  time add one more color on top and tell  we need to write it again on my array too

// const myFavColor = [...color, 'black', 'pink']

// console.log(myFavColor);

// --------------------------------------------------------------------------------------------------------
//@@ES7 features
// 1: array include
// const color = ['red', 'blue', 'green', 'white']
// const data = color.includes('red')
// console.log(data);

// 2: Exponentiation Operator (**)

// console.log(2**3);

// --------------------------------------------------------------------------------------------------------
//@@ES8 features
// String padding
// Object.Values()
// OBject.entries()

// @@String padding
//  const mas = "hi i am thakur dave sing";
//  console.log(mas);
//  console.log(mas.padStart(4));
//  console.log(mas.padEnd(2));

// @@Object.Values()
// const person = {name:'shah', age: 22};
// console.log(Object.values(person));

// @@OBject.entries()

// console.log(Object.entries(person));

// @@OBject.fromEntries()

// const person = {name:'shah', age: 22};
// const arrobj = Object.entries(person)
// console.log(Object.entries(person));
// console.log(Object.fromEntries(arrobj));

// --------------------------------------------------------------------------------------------------------
// @@ Flat method array.flat(infinity)
// it is line reduce method but it is better then reduce beacuse in flat method we use (infinity) method and
//flat all nested arrays

// const arr = [
//       ["shah1", "zaidi1"],
//       ["shah2", "zaidi2"],
//       ["shah3", "zaidi7"],
//       ["shah4", "zaidi4", ["shah5", "zaidi6"], ["shah7", "zaidi4", ["shah8", "zaidi9"]]],
//     ];
// let flatArry = arr.reduce((accum, currval) => {
//   return accum.concat(currval);
// });

// console.log(arr.flat(Infinity));
// --------------------------------------------------------------------------------------------------------

// @@ OBject.fromEntries()

// const person = {name:'shah', age: 22};
// const arrobj = Object.entries(person)
// console.log(Object.entries(person));
// console.log(Object.fromEntries(arrobj));
// --------------------------------------------------------------------------------------------------------
//@@ ES2020

// #1: BigInt

// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum);
// console.log(9007199254740991n + 12);
// const newNUm = 9007199254740991n + 12n;
// console.log(newNUm);
// console.log(typeof newNUm);

// --------------------------------------------------------------------------------------------------------
//@@ "use strict"
// "use strict"
// let x = 1.4;
// console.log(x);

// --------------------------------------------------------------------------------------------------------
//*********************************************************************************************************
// @@ Advance JavaScript
//*********************************************************************************************************
// --------------------------------------------------------------------------------------------------------
// @@ What is event propagation
// The event propagation mode determines in which order the element receive the event
// --------------------------------------------------------------------------------------------------------
//@@ The Capture phase
//Going from the window to the event is called target phase.
// --------------------------------------------------------------------------------------------------------
//@@ The Bubble phase
// From event target back to window is called bubble phase.
// --------------------------------------------------------------------------------------------------------
//@@ Higher order Function
//function which takes another function as an argument is called Higher order Function
// --------------------------------------------------------------------------------------------------------
//@@ Callback Function
//Function which get passed as an argument to another function i called Callback Function.
// A Callback Function is a function that is passed as an argument to another function "callback" at a later time
// --------------------------------------------------------------------------------------------------------
// @@ Create calculator

// const add = (a,b) => {
//     return a+b;
// }
// const subs = (a,b) => {
//     return Math.abs(a-b);
// }
// const mul = (a,b) => {
//     return a*b;
// }

// const calculator = (num1, num2, operator) => {
//     return operator(num1,num2);
// }

// calculator(10,10,add);

// console.log(calculator(10,10,mul));

// --------------------------------------------------------------------------------------------------------
//@@ Hoisting in Javascript

// We have a creation phase and execution phase.

// Hoisting in JavaScript in a machanism where variables and fucnctions declaration are moved to the top
//of their scope before the code execute.

// For Example
// console.log(MyName);
// var MyName;
// MyName = "shah";

// var MyName;
// console.log(MyName);
// MyName = "shah";

// --------------------------------------------------------------------------------------------------------
//@@ What is Scope Chain and Lexical Scoping in JavaScript?

// The scope chain is used to resolve the value of variable name in JS

// Scope chain in JS is Lexically defined , which means that we can see what the scope chain will be by
//looking at the code.

// Lexical Scoping means Now, the inner function can get access  to their parent function Variables
// but the vice-versa is not true.

//For Example

// let a = "hellow ";

// const first = () => {
//   let b = "hi ";
//   const secound = () => {
//     let c = "bye";
//     console.log(a + b + c);
//   };
//   secound();
// };
// first();

// --------------------------------------------------------------------------------------------------------
//@@ What is Closures in JavaScript

// A Closures is the combination  of a function bundled together (enclosed) with references
// to its surrounding state (the laxical enviroment)

//  In the other words, a closure gives you access to an outer function's scope from an inner function.

//  In JavaScript, Closures are created every time a function is created, at function creation time.

// For Example

// const outerFn = (a) => {
//     let b = 10;
//     const innerFn = () => {
//         let sum = a+b;
//         console.log(`the sum is ${sum}`);
//     }
//     innerFn();
// }

// outerFn(5)

// it is ame like lexical scoping

// const outerFn = (a) => {
//     let b = 10;
//     const innerFn = () => {
//         let sum = a+b;
//         console.log(`the sum is ${sum}`);
//     }
//     return innerFn;
// }

// let check = outerFn(5);
// console.log(check());

// --------------------------------------------------------------------------------------------------------
//@@ Synchronous

// const fun2 = () => {
//     console.log(`hheheheh`);
// }
// const fun1 = () => {
//     console.log(`hahhaa`);
//     fun2();
//     console.log(`abcedf`);

// }
// fun1();
// --------------------------------------------------------------------------------------------------------
// Asynchronous JavaScript program

// const fun2 = () => {
//   setTimeout(() => {
//     console.log(`hahhaa`);
//   }, 4000);
// };
// const fun1 = () => {
//   console.log(`hheheheh`);
//   fun2();
//   console.log(`abcedf`);
// };
// fun1();
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

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------
