const name="More";
let repoCount=50;
// console.log(name+repoCount);// old style of writting.

console.log(`my name is ${name} My repocount is ${repoCount}`);

// declaring the string.

const gameName=new String("Free-Fire");
console.log(`${gameName}`);
console.log(`${gameName[0]}`);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("i"));

const newString=gameName.substring(0,5);
console.log(newString);

const anotherString=gameName.slice(-6,5);
console.log(anotherString);

const nextString="      Vishwjit      ";
console.log(nextString.trim());

const url="https://google@2020.com";
console.log(url.replace("2020","-"));
console.log(url.includes("2020"));
console.log(gameName.split("-"));// conversion into arrays.











