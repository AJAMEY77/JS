const arr1=new Array(1,2,3,4,5);
const arr2 = [1,2,3,4,5];

//Array Methods

arr1.push(6);
// console.log(arr1);
arr1.pop();
// console.log(arr1);


//************************************************************************************************** */
//add element at the beginning of the array 

arr2.unshift(20);
// console.log(arr2);


//************************************************************************************************** */
//remove first element from the array 

arr2.shift();
// console.log(arr2); 

// console.log(arr1.includes(5)); //return boolean 
// console.log(arr2.indexOf(6)); //return index if not found return -1 

//************************************************************************************************** */
//slice and splice

const arr3=[11,22,33,44,55,66,77];

console.log("OG : ", arr3);

console.log("A : ", arr3.slice(1,3)); //return subaaray from index 1 to 2, third index not included 
console.log("OG : ", arr3);     //original array is not changed

console.log("B : ", arr3.splice(1,3)); //return subarrray form index 1 to 3 third index also included 
console.log("OG : ", arr3);     //original array is changed 