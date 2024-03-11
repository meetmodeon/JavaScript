// What is JavaScript?
// JS is a programming language.We use it to give instructions to the computer.
// Js is a dynamic typed language.
/*
input(code) -> Computer -> Output

************Our 1st JS Code *************
console.log is used to log(print) a message to the console

console.log("Apna College")

****Variables in JS *******
Variables are containers for data

*/
// console.log('Best of luck for your JS journey..');
// // variables
// fullname="Tony Stark";
// console.log(fullname);
// x=null;
// console.log(x);
// y=undefined;
// console.log(y);
// y=89;
// console.log(y);
// // Boolean type variable
// isFollow=true;
// console.log(isFollow);
/*
Variable Rules 
---------------
->Variable names are case sensitive;"a" & "A" is different.
->Only letters,digits,underscore(_) and $ is allowed.(not even space)
->Only a letter,underscore(_) or $ should be 1st character.
->Reserved words cannot be variable names.

******* let,const & var *********
var:Variable can be re-declared & updated.A global scope variable.

let:Variable cannot be re-declared but can be updated.A block scope variable.

const:Variable cannot be re-declared or updated. A block scope variable.


*/
// let fullName="tony stark";
// let age=24;
// let totalPrice=1000;

// console.log(fullName);
/*
******Data Types in JS *******
1.Primitive 2.NonPrimitive

There are 7 type of primitive data:-
->Number,String,Boolean,Undefined,Null,BigInt,Symbol

*/
// let num=23;
//  let name="tony";
//  let isFriend=true;
 //By default all the value are undefine
//  let x;
//  let y=null;
//  let largeNumber=BigInt("12345678");
//  let sym=Symbol("Hello!");

 /*
Non-Primitive(Objecs->Collection of values{key:values})
-----------------------
->its types are:-
->Arrays,functions



 */
// const student={
//     FullName:"Rahul kumar",
//     Age: 20,
//     cgpa: 9.2,
//     isPass: true,

// };
// console.log(student);
// console.log(student["Age"]);
// student["Age"]=student["Age"]+1;
// console.log(student.Age);

/*
*******Practice Set1 *********
Qs1.Create a const object called "product" to store information shown in the picture
*/
const product={
    title:"Bell Pen",
    rating:4,
    offer:5,
    price: 270
};
console.log(product);
/*
******Practice Set2 *******
Qs2.Create a const object called "profile" to store information shown in the picture.

Img:Instgram profile pic
*/
  
const profile={
    username:"@shradhaKhapra",
    isFollow:true,
    followers:569,
    following:4,
    posts:195,
    details:"Apna College | Ex-Microsoft,DRDO To educate someone is the highest privilege ❤️"
};
console.log(typeof profile["isFollow"]);
