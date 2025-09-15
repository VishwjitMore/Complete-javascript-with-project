// fetch("https://api.github.com/users/hiteshchoudhary")
// .then(function(responce){
//     return responce.json();
// }).then(function(data){
//      console.log(data); 
// })
// .catch(function(error){
//     console.log(error)
// })


// async function consumePromiseFive(){
//     try {
//         const response = await consumePromiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()