// function iam(){
//     console.log("m");
//     console.log("o");
//     console.log("r");
//     console.log("e");
// }

// iam();

// function add(num1,num2){
//      console.log(num1+num2);
// }
// add(4,8);
// const result=add(4,8);
// console.log(result);
// function add(num1,num2){
//      let result=num1+num2;
//      return result;
// }
// const result=add(4,8);
// console.log(result);


// function calculatePrice(...num1){ //rest operator.
//     return num1;
// }
// console.log(calculatePrice(200,400,600,1000));

// /////   passing object in function    /////

// const user={
//     username:"raj",
//     price:199
// }

// function get(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price} `)
// }
// get(user);


////// passing array in function ////////
const array=[200,579,427,189];
function returnValue(anyarray){
    return anyarray[1];
}
console.log(returnValue(array));
