console.log("Explore API");

const person = {
  name: "Shakib",
  fruit: "Mango",
  dish: "Kacchi",
  friends: ["alim", "karim", "lamim"],
  isRich: true,
  balance: 314000,
};

console.log(person);

// JSON -> Javascript Object Notation
// JSON.strigify


// Object to JSON Convert
const personJSON = JSON.stringify(person);
console.log(personJSON, typeof personJSON)

// JSON to Object Convert
const parseJSON = JSON.parse(personJSON);
console.log(parseJSON)