// const user={
//     username:"Raj",
//     price:199,
//     welcome:function(){
//         console.log(`${this.username},welcome to website`);
//         // console.log(this);
//     }

// }
// user.welcome();
// user.username="rahul";
// user.welcome();
// console.log(this);



// function chai(){
//     let username="Raj";
//     console.log(this.username);
// }
// chai();

// const chai=function(){
//     let username="Raj";
//     console.log(this.username);
// }
// chai();


// const chai= () => {    // arrow function.
//     let username="Raj";
//     console.log(this.username);
// }
// chai();


// const addTwo= (num1,num2) => {  // it is explicite function
//     return num1+num2;
// }
// console.log(addTwo(3,4));


const addTwo= (num1,num2) => num1+num2; // it is implicite function.
console.log(addTwo(3,4));
