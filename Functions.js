//Functions
//Defination
 /* Function in javascript are reusable block of code that can be called from anywhere in your program.*/
//syntax

/*function functionName(){
    //code to be executed
}*/

//Example

function great(){
    console.log("hello sir");
}
great();

//Types of function

/* 1.Named function
   2.Anonymous function
   3.Arrow function
   4.Immediadtely invoked function expression
   5.Constructor function
*/

// 1.Named function

/* named function is nothing but function defination 
   ==> these are the functions with a name and can be used for calling. they are defined using "function" keyword */
/*syntax :-

function functionName(parameter1, parameter2.....,parametern){
    //code
}
*/
 //example

 function sum(n1,n2){
    let result = n1+n2;
    console.log(result)
 }
 sum(5,5);

// 2.Anonymous function

/* syntax :-
 
let variable name = function(parameter1, parameter2.....,parametern){
    //code
 } */

 //Example

let multiplication = function(a1,a2){
    let result = a1 * a2;
    console.log(result);
}
multiplication(5,8);

// 3. Arrow function

/*syntax

let variable name = (parameter1, parameter2.....,parametern)=>{
    //code
}

*/

//Example

let division = (b1,b2)=>{
    let result = b1 % b2;
    console.log(result);
}
division(450,35);

// 4.Immediadtely invoked function expression

// syntax : - (function defination)();

let sub = (function(c1,c2){
    let result = c1 - c2 ;
    return result;
})(147,124)
console.log(sub);

//Constructor function

/* syntax :-

function functionName(){
    this.parameter1 = parameter1;
    this.parameter2 = parameter2;
    ...
    this.parametern = parametern
} 
let objectName = new functionName();

*/

//Example

class person{
   constructor(firstName,lastName){
     this.firstName = firstName;
     this.lastName = lastName;
    // console.log(firstName+" "+lastName);
    
   }
}
 let  obj1 = new person("nani","poleboyina");

// console.log(obj1);
 console.log(obj1.firstName.concat(" ",obj1.lastName));

/*let Person1 = new person("mohmad","yaseen")
let Person2 = new person("jani","pasha")

console.log(Person1);
console.log(Person2);*/