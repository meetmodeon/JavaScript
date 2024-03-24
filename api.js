/*
**********Fetch API ***********
---------------------------------
The Fetch API provides an interface for fetching(sending/receiving)
resources.
It uses Request and Response objects.
The fetch() method is used to fetch a resource(data).


let promise=fetch(url,[options])
API->Application Programming interface


********Understanding Terms************
---------------------------------------
AJAX is Asynchronous JS and XML

JSON is JavaScript object Notation

json() method : returns a second promise that resolves
with the result of parsing the response body text as
JSON. (Input is JSON,outpur is JS Object)


***********HTTP Verbs*************
___________________________________
Response Status Code


*HTTP response headers also contain details about the
responses,such as content type,HTTP status code etc.



*/
const URL="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#Fact");
const btn=document.querySelector("#btn");





// const getFacts=async()=>{
//     console.log("Getting data.....");
//     let response=await fetch(URL);
//     console.log(response); //   JSON format
//    let data =await response.json();
//    factPara.innerText=data[2].text;
// };
// function getFacts(){
//     fetch(URL).then((response)=>{
//     return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         factPara.innerText=data[1].text;
//     })
// };
btn.addEventListener("click",getFacts);