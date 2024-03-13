// //This is a comment
// /*
// ******* Operators in JS ********
// ->Used to perform some operation on data
// :Arithmetic Operators:+,-,*,/
// :Modulus:%
// :Exponential:a**b ->pow(a,b);

// //Unary operators:only one operant need(a++)
// :increment:Post increment(a++),Pre increment(++a)
// :Decrement:Post decrement(a--),Pre decrement(--a)
// */
// //Arithmetic Operators
// let a=5;
// let b=2;

// console.log("a =",a,"& b =",b)
// console.log("a + b =",a+b)
// console.log("a-b =",a-b)
// console.log("a*b =",a*b);
// console.log("a/b =",a/b);
// console.log("a ** b",a**b);
// console.log(" a-- =",a--);
// console.log(a)
// console.log("--b =",--b);
// let c=5;
// console.log("c++ =",c++);
// console.log("++c =",++c);

// //Assignment operator
// //-=,+=,*=,/=

// let d=4;
// let e=2;
 
// d/=4; //a=a/4
// console.log("a =",a) //20

// //Comparison Operators

// /*
// Equal to ==
// Equal to & type ===
// Not equal to !=
// Not equal to & type !==
// >, >=,<,<=
// */
// a=5;
// b=2;

// console.log("a == b",a==b) // print false
// console.log("5!=2",a!=b); //true

// // Logical Operators
// /*
// Logical AND &&
// Logical OR ||
// Logical NOT !
//  */
// let cond1=a>b; //true
// let cond2=a===6; //true   
// console.log("cond1 && cond2 =" ,cond1,cond2);
// cond1=a||b;
// cond2=a!=b;
// console.log("cond1 || cond2",cond1,cond2)

// // let color;
// // if(mode==="dark-mode"){
// //     color="black";
// // }

// //Conditional Statements
// //if
// //if-else
// let age=25;

// if(age>18){
//     console.log("can vote");
// }
// else{
//     console.log("not vote");
// }

// let mode="dark";
// let color;

// if(mode === "dark"){
//     color="black";
// }
// else{
//     color="white";
// }
// if(mode==="light"){
//     color="white";
// }
// console.log(color);

// //else-if statement

// age=20
// if(age<18){
//     console.log("junior");
// }
// else if(age>60){
//     console.log("senior");
// }
// else{
//     console.log("middle");
// }

// //Ternary Operators
// //Syntax:conditon?true output:false output
// age>=18?console.log("adult"):console.log("not adult");

// Let's Practice

//QS1.Get user to input a numbar using prompt("Enter a number:").Check if the number is a multiple of 5 or not.
// alert("hello!"); //one time alert
// let name=prompt("hello!");
// console.log(name);
// alert("Enter a number:");
// let num=prompt("Enter your number");
// if(num%5===0){
//     console.log(num,"The number is a multiple of 5");
// }
// else{
//     console.log(num,"Number is not multiple of 5");
// }

//QS2.Write a code which can give grades to students according to their scores:
/*
->80-100,A
->70-89,B
->60-69,C
->50-59,D
->0-49,F
*/
let marks=prompt("Enter Your marks");
if(marks>=90 && marks<=100){
    console.log("A");
}
else if(marks>=70 && marks<=89){
    console.log("B");
}
else if(marks>=60 && marks<=100){
    console.log("C");
}
else{
    console.log("F");
}

