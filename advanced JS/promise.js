// const promise1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Task is completed");
//         resolve();
//     },1000);
// });

// promise1.then(function(){
//     console.log("promise consumed");
// });


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Next task is completed");
//         resolve();
//     },1000);
// }).then(function(){
//     console.log("next promise is consumed"); 
// });

// const promise3=new Promise(function(resolve,reject){
//      setTimeout(function(){
//          resolve({username:"Raj",Email:"raj@gmail.com"})
//      },1000);
// });

// promise3.then(function(user){
//     console.log(user)
// });

const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if (!error) {
            resolve({username:"Raj",Password:"123"})
        }
        else{
            reject("error:something went wrong");
        }
    },1000)
});
promise4.then(function(user){
     console.log(user);
     return user.username;
}).then(function(userna){
    console.log(userna);
}).catch(function(err){
    console.log(err);
}).finally(()=>{
    console.log("the task is either resolved or rejected");
    
})




