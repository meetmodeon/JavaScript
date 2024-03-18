/*
**************DOM Manipulation***********
Attributes
->getAttribute(attr) //to get the attribute value
->setAttribute(attr,value) //to set the attribute val th

Style
->none.style
*/
// let div=document.querySelector("div");
// console.log(div);

// let id=div.getAttribute("id");
// console.log(id);
// let name=div.getAttribute("name");
// console.log(name);
// let para=document.querySelector("p");
// console.log(para);
// let p=para.getAttribute("para");
// console.log(p);
// console.log(para.setAttribute("class","123"));

// let div=document.querySelector("div");
// div.style.backgroundColor="green";
// div.style.visibility="hidden";
// div.style.fontSize="26px";

// div.innerText="hello!";

/* 
*********Insert Elements**********
->node.append(el) //adds at the end of node(inside)
->node.prepend(el) //adds at the start of node(inside)
->node.before(el) //adds before the node(outside)
->node.after(el) //adds after the node(outside)

***********Delete Element***********
node.remove() //Remove the node

*/

// let newBtn=document.createElement("button");
// newBtn.innerText="click me!";
// console.log(newBtn);

// let div=document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);
// let newHeading=document.createElement("h1");
// newHeading.innerHTML="<i>Hi,I am new!</i>";

// document.querySelector("body").prepend(newHeading);

// let para=document.querySelector("p");
// para.remove();

/* H/W
appenChild()=?
removeChild()=?



**********Practice***********
Qs.Create a new button element.Give it a text "click me",background color of red & text color of white
  Insert the button as the first element inside the body tag.

  Qs2.Create a <p> tag in html,give it a class & some styling.
  Now create a new class in CSS and try ti append this class to the <p> element

  Did you notice,how you overwrite the class name when you add a new one?
  Solve this problem using classList. 
*/
//Qs1.Ans
// let newBtn=document.createElement("button");
// newBtn.innerText="Click me!";
// newBtn.style.backgroundColor="red";
// newBtn.style.color="white"

// let bod=document.querySelector("body");
// bod.prepend(newBtn);

//Qs2.Ans
let par=document.querySelector("p");
// let con=par.getAttribute("class");
// console.log(con);
// console.log(par.setAttribute("class", "newClass"));
par.classList.add("newClass");
par.remove();