const arr = [1, 2, 3, 4];
var person = {
  firstname: "Cristiano",
  lastname: "Ronaldo",
  gender: "Male",
  occupation: "Football",
  working: { club: "Juventus", basedIn: "Lisbon" },
  country: "Portugal",
  talk: function () {
    console.log("Love makes me strong, hate makes me unstoppable");
  },
  sprint: function () {
    console.log("I am sprinting");
  },
  dribble: function () {
    console.log("I am dribbling");
  },
};
console.log(person);
console.log(typeof JSON.parse(JSON.stringify(person)));
//creates a copy of already created 'person' object
person2 = new Object(person);
console.log(person2);
//creates an object using the prototype of 'person' object
person3 = Object.create(person);
console.log( person3);
console.log( person3.country);
