// const nums=[1,2,5,4,9,6];
// nums.forEach(function (element) {  // simple function
//     console.log(element);
// });
// nums.forEach((element) => { // arrow function.
//     console.log(element);
// });

// const coding=["js","c++","python","java"];
// const values=coding.forEach((element) => {
//     console.log(element);
// });
//     console.log(values);

// const num=[1,2,3,4,5,6];
// const values=num.filter((val) => {
//     return val>3;
// });
// console.log(values);

// const num=[1,2,3,4,5,6];
// const values=num.map((val) => {
//     return val=val+3;
// });
// console.log(values);


// const num=[1,2,3,4,5,6];
// const values=num
// .map((val) => val=val*10)
// .map((val) => val=val+1)
// console.log(values);

const num=[1,2,3,4,5,6];
const total=num.reduce(function (acc,currval){
    return acc+currval
},0)
console.log(total);

// const num=[1,2,3,4,5,6];
// const values=[];
// num.forEach((val)=>{
//     if(val>3){
//         values.push(val);
//     }
// });
// console.log(values);

