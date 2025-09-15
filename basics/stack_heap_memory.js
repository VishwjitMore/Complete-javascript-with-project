// let name="i am raj";
// let anotherName=name;
// anotherName="vishwjit"; //all primitive datatypes goes under stack.
// console.log(name);
// console.log(anotherName);


let userOne={
     email:"raj@gmail.com", 
}

let userTwo=userOne;
userTwo.email="vishwjit@gmail.com"; // all reference or non primitive datatypes goes under heap.
console.log(userOne.email);
console.log(userTwo.email);
