
//Datatyoe Categorized in 2 types Preemptive and Dynamic
//How The data is stored and accessed in memory on this basis the data is categorized in 2 types

//Preeemptive (referenced data type) :
// Call by value : copy is created in memory
// 7 types : Number, String, Boolean, Symbol (make component unique), null, undefined, BigInt


//Non Preemptive (value data type) :
// Call by reference : address is passed
// Array, Function, Object


//Javascript is a dynamic language, it means we dont have to specify the data type of the variable. 

const id=Symbol('123');
const anotherId=Symbol('123');
// console.log(id===anotherId); //o/p:false

const bigNumber=456484484684848648468468468484646488n;
console.log(typeof bigNumber);

const heros=['superman','batman','spiderman'];
let obj={

    name:'Amey',
    age:21,
    city:'Pune'
}

const myFunction=function(){
    console.log("Hello");
}
// datatype of non preemptive is object but datatype of function is object function
console.log(typeof id);
// 
// 
// 
// 
// 
// 
// //
//
