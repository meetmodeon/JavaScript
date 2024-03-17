/*
*****Window Object**********
The window object represents an open window in a browser.
It is browser's object(not JavaScript's) & is automatically created browser.

it is a global object with lots of properies and methods.

What is DOM?
When a web page is loaded, the browser creates a Document Object Model(DOM) of the page

window->document->html->
1:head
->meta
->meta
->title
->link
2:body
2(a):div:
a:img
b:h1
c:p
d:div
2(b):script


window->document(model(html))
*/
// console.dir(document.body.childNodes[3].innerText="abcd"); 
// // document.body.style.background="green";
// console.dir(document.head);


/*
***********DOM Manupulation***************
Selecting with id
document.getElementById("myId")

Selecting With class
document.getElementsByClassName("myClass")

Selecting with tag
document.getElementByTagName("p")
 */
// let header=document.getElementById("header"); //return value
// console.dir(header);

// let heading=document.getElementsByClassName("heading");
// console.dir(heading);
// console.log(heading);
// let par=document.getElementsByTagName("p");
// console.dir(par);
// console.log(par);

/*
*********Query Selector*******

document.querySelector("myId/myClass/tag")
//return first element

document.querySelectorAll("myId/myClass/tag")
//returns a NodeList


let firstEl=document.querySelector("p"); //1st element
console.dir(fistEl);

let allEl=document.querySelectorAll("p");  //all elements

let fistEl=document.querySelector(".heading");
let allEl=document.querySelectorAll(".heading");

let id=document.querySelector("#header");
*/

/* 
************Properties**************
->tagName:returns tag for element nodes
->innerText:returns the text content of the element and its children
->innerHTML:returns the plain text or HTML contents in the element
->textContent:returns textual content even for hidden elements


*********H/W***********
fistChild,lastChild:

div.children[1]:


*/
// let div=document.querySelector("div");

// console.dir(div);

// console.log(div.innerText);

/*
 ******Practice**********
 QS.Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College students" to this text using JS.

 */
// let h2=document.querySelector("h2");

// console.dir(h2.innerText);
// h2.innerText=h2.innerText + "From Apna College stuedent";

/*
Qs.Create 3 divs with common class name - "box".Access them & add some 
unique text to each of them.
*/
let divs=document.querySelectorAll(".box");
let idx=1;
for(div of divs){
    // console.log(div.innerText);
    div.innerText=`new unique value ${idx}`;
    idx++;
}
console.log(divs[0]);

divs[0].innerText="new unique value 1";
divs[1].innerText="new unique value 2";
divs[2].innerText="new unique value 3";
