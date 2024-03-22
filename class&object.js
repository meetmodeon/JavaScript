/*

**************Class & Objects In JS***************

_________Prototypes in JS__________________
->A javaScript Object is an entity having state and behavior
(properties and method).
->JS objects hava a special property called prototype.
->We call set prototype usnig _ _proto_ _



*if object and prototype have same method object's method will be used.

const student={
    fullName: "Meet Yadav",
    marks:94.4,
    printMarks: function(){
        console.log("marks = ",this.marks);
    },
};

const employee={
    calcTax(){
        console.log("tax rate is 10%");
    },
};
const karanArjun={
    salary:50000,
};
karanArjun__proto__=employee;


**************Classes in JS**************
Class is a program-code template for creating objects.
Those objects will have some state(variables) & some behaviour (functions) inside it.

class MyClass{
    constructor(){
        ......
    }
    my(Method){
        .......
    }
}
let myObj=new MyClass();


EX:

class ToyotaCar{
    constructor(brand,mileage){
        console.log("creating new object")
        this.brand=brand;
        this.mileage=mileage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}
let fortuner=new ToyotaCar("fortuner",10); //constructor
console.log(fortuner);
let lexus=new ToyotaCar("lexus",12); //constructor
console.log(lexus);



*************Inheritance in JS***************
->inheritance is passing down properties & methods from parent class to child class.

class Parent{
    ---
}
class Child extends Parent{
    -----------
}

*if Child and Parent have same method,child's method will be used.[Method Overriding]
***********Super Keyword****************
This super keyword is used to call the condtructorof its parent class to access the parent's properties and methods.

super(ars) //calls Parent's constructor

super.parentMethod(ars);

class Person{
    constructor(){
        this.species="homo sepiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}
class Engineer extends Person{
    constructor(branch){
        this.branch=branch;
    }
    work(){
        console.log("solve problems, build something");
    }
}
let meetObj=new Engineer();


*/

/**
 ************Practice Question***************
 Qs:You are creating a website for your college.Create a class User with 2 properties,name & email.
 It also has a method called viewData() that allows user to view website data.


 Qs:Create a new class called Admin which inherits from User.Add a new method called editData to Admin that allows it to edit website data.
 */
//Qs1:
// let DATA="select information";
// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log("data = ",DATA);
    
//     }
// }

// class Admin extends User{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         DATA="some new value";
//     }
// }
// let student1=new User("sharwan","sharwan@gmail.com");
// let student2=new User("pawan","pawan@gmail.com");
// let admin1=new Admin("Dean","dean@gamil.com");

/**
 * ************Error Handling***************
 * try-catch
 * 
 * try{
 * .......normal code 
 * }catch(err){
 * //err is error object
 * ...handling error
 * 
 * }
 */