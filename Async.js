/*
What this chapter is about?
----------------------------
async await >> promise chains >> callback hell

Sync in Js:
-----------
Synchronous:-
>> Synchronous means the code runs in a particular sequence of
instructions given in the program.
Each instruction waits for the previous instruction to complete its execution

Asynchronous:-
---------------
Due ot synchronous programming, sometimes imp instruction
get blocked due to some previous instructions,which causes a delay in the
UI.
Asynchronous code execution allows to execute next instructions 
immediately and doesn't block the flow.

Callbacks:
------------
A callback is a function passed as an argument to
another function


Callback Hell:
---------------
Callback Hell: Nested callbacks stacked below one
another forming a pyramid structure.(Pyramid of Doom)

This style of programming becomes difficult to understand & manage.


Promises:
----------
Promise is for "eventual" completion of task. It is an object in JS.
It is a solution to callback hell.

let promise=new Promise((resolve,reject)=>{...})


*resolve & reject are callback provided by JS


Promises:-
-------------
A JavaScript Promise object can be:
>Pending:the result is undefined
>Resolved: the result is a value(fulfilled) resolve(result)
>Rejected: the result is an error object  reject(error)

*Promise has state(panding,fulfilled) & some result(result for resolve & error for reject).

.them() & .catch()
promise.then((res)=>{....})
promise.catch((err)=>{.....})



Async-Await
--------------
async function always returns a promise

async function myFun(){....}

await pauses the execution of its surrounding async function until the promise is settled.


IIFE:Immediately Invoked Function Expression
-------------------------------------------------
IIFE is a function that is called immediately as soon as it is defined

(function (){
    //....

})();
(()=>{
    //...
})();
(async ()=> {
    //...
})();



*/
// function hello(){
//     console.log("hello function")
// }
// setTimeout(hello,2000);//timeout

// setTimeout(()=>{
//     console.log("hello");
// },1000);


// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(4,9,sum);

// function getData(dataId,getNextData){
//     //2s
//     setTimeout(() => {
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
        
//     }, 2000);
// }

// //callback hell problem
// getData(1,()=>{
//     console.log("getting data2 .....");
//     getData(2,()=>{
//         console.log("getting data3.....");
//         getData(3,()=>{
//         console.log("getting date4....");
//             getData(4);
//         });
//     });
// });

//data1
//data2
//data3

//Promise
//------------
// let promise=new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     reject("some error occured");
// });

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// }
// let promise=getData(123);
// console.log(promise);


// const getPromise=()=>{
//  return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         // resolve("success");
//         reject("error");
//     });
// };

// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise success");
// });
// promise.catch((err)=>{
//     console.log("rejected",err);
// }); 


//Promise Chainnig

//eg:
// function asyncFun1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },4000);
//     });
// }

// function asyncFun2(){
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>{
//             console.log("data2.");
//             resolve("success");
//         },4000);
//     });
// }

// console.log("fetching data1........");
// let p1=asyncFun1();
// p1.then((res)=>{
//     console.log("fetching data2...");
//     let p2=asyncFun2();
//     p2.then((res)=>{});
// });

function getData(dataId,getNextData){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("data",dataId);
                resolve("success");
                if(getNextData){
                    getNextData();
                }
            },5000);
        });
    }

    //Async-Await
    (async function (){
        await getData(1);
        await getData(2);
        await getData(3);
    })();
//     //Promise chain
//     getData(1).then((res)=>{
//         return getData(2);
//     }).then((res)=>{
//         return getData(3);
//     }).then((res)=>{
//         console.log(res);
//     });

// async function hello(){
//     console.log("hellow");
// }

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout((res)=>{
//             console.log("weather data");
//             resolve(200);
//         },2000);
//     });
// }
// async function getWeatherData(){
//     await api();
//     await api();
// }

