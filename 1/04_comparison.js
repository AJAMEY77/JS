
// console.log("2">1);
// console.log("02">1);
//******************avoid this type of code ********************************* */
console.log(null>0);  //o/p:false
console.log(null==0); //o/p:false
console.log(null>=0); //o/p:true

//reason : null is not a number, it is a special value which represents nothing or empty.
//when we compare null with a number, it is converted to 0.
//the "==" operator and comparison(>,< etc) operators work differently 
//thats why at line 1 and 2 o/p is false and at line 3 o/p is true.

console.log(undefined ==0);
console.log(undefined > 0);
console.log(undefined < 0);
//******************avoid this type of code ********************************* */

//Strict check : ===

console.log("2"===2); //o/p:false
