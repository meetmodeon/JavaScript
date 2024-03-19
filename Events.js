/*
*******Events in Js*************
The change in the state of an object is known as an Event
Events are fired to notify code of "interesting changes" that may affect code execution


->Mouse events(Click,double click etc.)
->Keyboard events (keypress,keyup,keydown)
->Form events(submit etc.)
->Print event & many more
*/
// let btn1=document.querySelector("#btn1");

// btn1.onclick=()=>{
//     console.log("btn1 was clicked");
//     let a=25;
//     a++;
//     console.log(a);
// }
// let box=document.querySelector("div");
// box.onmouseover=()=>{
//     console.log("you are inside dive");
// };


/*
**********Event Object***********
It is a special object that has details about the event.

All event handlers have access to the Event Object's properties and methods.

node.event=(e)=>{
    //handle here
}

e.target,t.type,e.clientX,e.clientY

*/
// let btn1=document.querySelector("#btn1");

// btn1.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);

// }

/*
*****************Event Listeners*************

->node.addEventListener(event,callback)

->node.removeEventListener(event,callback)

*Note:the callback reference Should be same to remove
*/

// let btn1=document.querySelector("#btn1");

// btn1.addEventListener("click",(evt)=>{
//     console.log("button1 was click");
//     console.log(evt);
//     console.log(evt.type);
// });
// const handler3=()=>{
//     console.log("Button1 was click- Handler2");
// };
// btn1.addEventListener("click",handler3);
// btn1.addEventListener("click",()=>{
//     console.log("Button1 was click- Handler3");
// });
// btn1.addEventListener("click",()=>{
//     console.log("Button1 was click- Handler4");
// });
// btn1.removeEventListener("click",handler3);


/**
 *************Pactice***************
 Qs.Create a toggle button that changes the screen to screen to 
 dark-mode when clicked & light-mode when clicked again.

 */

 let modeBtn = document.querySelector("#mode");
 let body=document.querySelector("body");
 let currMode="light";
 modeBtn.addEventListener("click",()=>{
    // console.log("you are trying to change mode");
    if(currMode==="light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
 });
