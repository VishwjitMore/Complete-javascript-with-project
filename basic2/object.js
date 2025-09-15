// singleton
// Object.create

//object.literals

const mySym=Symbol("key");
const jsUser={
    name:"vishwjit more",
    age:20,
    email:"vish@gmail.com",
    "full name":"V.K.More",
    [mySym]:"myKey1"
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser);


// jsUser.email="raj@gmail.com";
// Object.freeze(jsUser);
// jsUser.email="more@gmail.com";
// console.log(jsUser);

jsUser.greetings=function(){
    console.log("hello js users");
}
jsUser.greetingsTwo=function(){
    console.log(`hello js users, ${this.name}`);
}
console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());

