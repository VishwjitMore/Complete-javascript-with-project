const marvel_heroes=["raj","rahul","ram"];
const DC_heroes=["ramesh","lokesh","rohit"];
// DC_heroes.push(marvel_heroes);
// console.log(DC_heroes);
// console.log(DC_heroes[3][2]);

// const all_heroes=DC_heroes.concat(marvel_heroes);
// console.log(all_heroes);

const new_heroes=[...marvel_heroes,...DC_heroes];
console.log(new_heroes);

const another_array=[4,6,2,[7,0,2],3,8,[3,8,2,[0,9,5]]];
const real_array=another_array.flat(Infinity);
console.log(real_array);