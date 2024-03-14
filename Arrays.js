//Arrays in JS
//Collection of items

//Create Array

/*
let heroes=["ironman","hulk","thor","batman"];
let marks=[96,75,34,54,88];
let info=["rahul",86,"Delhi"];

looping over an Array
Print all elements of an array
*/


// let heroes=["ironman","hulk","thor","batman"];
// for(let idx=0;idx<heroes.length;idx++){
//     console.log(heroes[idx]);
// }

// for of
// for(let hero of heroes){
//     console.log(hero);
// }

//Let's Practice
//Qs.For a give array with marks of students ->[85,97,44,37,76,60]
// Find the average marks of the entire class

// let students=[85,97,84,87,86,80];
// let avg,sum=0;
// for(let std of students){
//     sum=sum+std;
// }
// avg=sum/students.length;
// console.log(avg);

//QS2.For a give array with prices of 5 items ->[250,645,300,900,50]
//All items have an offer of 10% OFF on them.Change the array to store
//final price after applying offer.

// let items=[250,645,300,900,50];

// for(let i=0;i<items.length;i++){
//     items[i]=items[i]-items[i]*(10/100);  
    
// }
// for(let i=0;i<items.length;i++){
//     console.log(items[i]);
// }

/* ***********Arrays in JS Methods **********
Push():add to end
Pop():delete from end and return 
toString():Converts array to string
Concat():joins multiple arrays & returns result

unshift():add to start

shift():delete from start & return

Slice():returns a piece of the array(not change is original Array)

Splice():change original array(add,remove,replace)
splice(startldx,delCount,newE1...)


*/

// let foodItems=["potato","apple","litchi","tomato"];

// foodItems.push("chips","burger","paneer");
// console.log(foodItems);
// foodItems.pop();
// console.log(foodItems);
// console.log(foodItems.toString());

// let marvel_heroes=["thor","spiderman","ironman","loki","deadPol"];
// let dc_heroes=["superman","batman"];

// let heroes=marvel_heroes.concat(dc_heroes);
// console.log(heroes);
// marvel_heroes.unshift("antman");
// console.log(marvel_heroes);
// let val=marvel_heroes.shift();
// console.log("Delete:",val);

// console.log(marvel_heroes.slice(1,4));

// let arr=[1,2,4,12,4,52,55,32,21];
// console.log(arr.splice(3,1,87));

//Add element
//arr.splice(2,0,110);

//Delete Element
// arr.splice(3,1)

//Replace Element
// arr.splice(5,1,983);

/*
Let's Practice
 QS.Create an array to store companies -> ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]

 a.Remove the first company from the array
 b.Remove Uber & Add Ola in its place
 c.Add Amazon at the end

 */
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
let val=companies.shift();
console.log("Remove: ",val);
companies.splice(2,1,"Ola");
console.log("After Replacement: ",companies);
companies.push("Amazon");
console.log("End addition: ",companies);