/*
*********Functions in JS *********
Block of code that performs a specific task, can be invoked whenever needed

Function Definition
-----------------------
function functionName(){
    //do some work
}
function functionName(param1,param2...){
    //do some work
}
 
function Call
-----------------
functionName();



function myFunction(msg){
    console.log("Welcome to Apna College! ");
    console.log("We are learning JS :");
    console.log(msg);
}

myFunction("I love Js");
myFunction("I love Js too");

function sum(x,y){
    s=x+y;
    return s;
}
let val=sum(7,9);
console.log(val);

**********Arrow Functions************
Compact way of writing a function

const functionName=(param1,param2...)=>{
    //do some work
}

const sum=(a,b)=>{
    return a+b;
}
const multi=(a,b)=>{
    console.log(a*b);
}
multi(5,6);
const div=(a,b)=>{
    return a/b;
}
div(10,2);//print 5 in console
*/

//QS.Create a function using the "function" keyword that 
//takes a String as an argument and returns the number of vowels in the string.

// function countVowel(vowel){
//     let count=0
//     for(let letter of vowel){
//         if(letter==="a" || letter==="e" || letter==="i" || letter==="o" || letter==="u"){
//             count++;
//         }
//     }
//     return count;
// }
// // let val=countVowel("Meet Yadav never lose your hope in god.He will do all things right one.");
// // console.log(val);


//Qs.Create an arrow function to perform the same tast.

// const countVowel=(vowel)=>{
//         let count=0
//         for(let letter of vowel){
//             if(letter==="a" || letter==="e" || letter==="i" || letter==="o" || letter==="u"){
//                 count++;
//             }
//         }
//         return count;
//     }

//forEach loops in Arrays
//----------------------------
/** 
 arr.forEach(callBackFunction)
 CallbackFunction:Here,it is a function to execute for each element in the array

 *A callback is a function passed as an argument to another function.
arr.forEach((val) =>{
    console.log(val);
});
let arr=[12,3,4,2,2];
arr=["jnk","ktm","brt"];
arr.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx);
});

************Map************
Create a new array with the results of some operation.The value ifs callback returns are
used ot form new array

arr.map(callbackFnx(value,index,array))

let newArr=arr.mar((val)=>{
    return val*2;
});

let nums=[67,52,39];

let newArr=nums.map((val)=>{
   return val*2;
});
console.log(newArr);

let calcSquare=(num)=>{
    console.log(num*num);
};


**********Filter*********
Creates a new array of elements that give true for a condition /filter.
Eg: all even elements

let newArr=arr.filter((val)=>{
    return val%2==0;
})
let arr=[1,2,3,4,5,6,7];

let evenArr=arr.filter((val)=>{
    return val%2===0;
})
console.log(evenArr);

*********Reduce Method************
Performs some operations & reduces the array to single value.It returns that single value.

const array1=[1,2,3,4];

//0+1+2+3+
const initialValue=0;
const sumWithInitial=array1.reduce((accumulator,currentValue)=>
accumulator+currentValue,initialValue);
console.log(sumWithInitial);
//Expected output:10
 */
// let arr=[1,2,3,4,9,6,7];

// const output=arr.reduce((res,curr)=>{
//     return res>curr?res:curr;
// });
// console.log(output);



/* 
**********Practice**********
//QS.We are given array of marks of students.Filer out of the marks of students that
//scored 90+.
 let arr=[98,33,56,92,99,95,79,91];
 let newArr=arr.filter((val)=>
 {
    return val>90;
 });
 console.log(newArr);
 
//QS.Take a number n as input from user.Create an array of 
numbers from 1 to n.
Use the reduce method to calculate sum of all numbers
in the array.
Use the reduce method to calculate product of all numbers in the array.
*/
let n=prompt("enter a number : ");

let arr=[];

for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);
let sumOfAllElement=arr.reduce((prev,curr)=>{
    return prev+curr;
})
console.log(sumOfAllElement);

let factorial=arr.reduce((prev,curr)=>{
    return prev*curr;
});
console.log(`Factorial =${factorial}`);



