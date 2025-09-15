// IIFE:immediately invoked function.

(function chai(){ // it is named iife.
    console.log(`DB connected`)
})();


((name)=>{ // it is unnamed or simple iife.
    console.log(`DB connected two ${name}`)
})("raj");