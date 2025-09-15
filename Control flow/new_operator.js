/// noullish coulessing operator(??):null undefined.

let val;
// val=5 ?? 10;
// val=null ?? 15;
val=undefined ?? 10;
console.log(val);

// terninary operator
// condition ? true:false

const price=100;
price>80 ? console.log("buy"):console.log("do not buy");