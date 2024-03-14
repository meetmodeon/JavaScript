//Loops in JS

//Loops are used to execute a place ofn code again and again

// For-Loop
//print 1 t 5
// for(let i=0;i<=5;i++){
//     console.log("Apna college");
// }

//calculate sum of 1 to 5

// let sum=0;
// for(let i=1;i<=5;i++){
//     sum=sum+i;
// }
// console.log("Sum= ",sum);
// console.log("loop has ended");

/*
Infinite Loops:A loop that never ends

Note:infinite loops not use in any program

for(let i=0;i>0;i++){
    console.log("Infinite loop ");
}

*/

//While Loop

/*
let i=0;
while(i<5){
    console.log("i=",i);
    i++
}
*/

//Do-while loop

// let i=1;
// do{
//     console.log("i=",i);
//     i++;
// }while(i<=5);

//for-of loop
//iteration on String and Arrays

// let str="Apana College";

// for(let l of str){
//     console.log(l);
// }

//For-in loops

/*for(let key in objVar){
//do some work
}
*/
// let student={
//     name:"Rahul kumar",
//     age:20,
//     cgpa:7.5,
//     isPass:true
// };
//  for(let key in student){
//     console.log("key = ",key,"Value = ",student[key]);
//  }

//Let's Practice

//QS1.Print all even numbers from 0 to 100


// for(let i=1;i<=100;i++){
// if(i%2===0){
//     console.log(i);
// }
// }

/*
***** Practice 2
create game
 */

// let gameNum=25;
// let userNum=prompt("Guess the game number: ");
// while(userNum != gameNum){
//     // userNum=prompt("Enter your number");
//     if(userNum>gameNum){
//         console.log("You enter greater Number ",userNum,"please enter smaller number");
//     }
//     else if(userNum<gameNum){
//         console.log("You enter smaller number ",userNum,"please enter larger number");
//     }
//     else{
//         console.log("congratulation You guess correct");
//         break;
//     }
//    userNum=prompt("You entered wrong number. Guess again: ");
// }
// console.log("Congratulations,you entered the right number");

/*
 ***Strings in Js ******
 String is a sequence of characters used to represent text

 Create String:
 let str="Apna College"

 String length:
 str.length

 String indices:
 str[0],str[1],str[2]

 Template Literals in JS:
 A way to have embedded expressions in strings 

 `this is a template literal`
  
 String Interpolation:
To create strings by doing substitution of placeholders

`string text ${expression} string text `
*/
// let obj={
//     item:"pen",
//     price:10,
// };
// console.log("The cost of",obj.item,"is",obj.price,"rupees");
// console.log(`The cost of ${obj.item} is ${obj.price} rupees`);

//String Methods in Js
//These are built-in functions to manipulate a string
/*
-> str.toUpperCase()
->str.toLowerCase()
->str.trim() //Removes whitespaces
->str.slice(start,end?) //return part of string
->str1.concat(str2) //joins str2 with str1
->str.replace(searchVal,newVal)
->str.charAt(idx)
*/


//Practice
//QS1.Prompt the user to enter their full name.Grnerate a username for them based on the input.
//Start username with @,followed by their fullname and ending with the fullname length

//eg:username="shradhakhapra", username should be "@shradhakhapra13"


// let userName= prompt("Enter Your name");
// userName="@"+userName+userName.length;
// console.log(userName);