//1
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
console.log(person3);
console.log(person3.country);

//2
var fruites = ["Banana", "Kiwi", "Orange", "Tomato"];
fruites.splice(2, 1, "Lemon", "Apple");
console.log(fruites);

//3
var car = {
  name: "porche",
  price: 50000,
  //getter
  get getCarPrice() {
    console.log("price of " + this.name + " is " + this.price + "$");
  },
  //setter
  set setprice(price) {
    this.price = price;
  },
  //setter
  set setname(carname) {
    this.name = carname;
  },
  drive: function (person) {
    console.log(person + " drives " + this.name);
  },
};
console.log(car);
var tesla = Object.create(car);
tesla.setname = "tesla";
tesla.setprice = 30000;
tesla.getCarPrice();
tesla.drive("Bharat");

//4.
//clone object
const obj1 = { name: "Bharat" };
const obj2 = {};
Object.assign(obj2, obj1);
console.log(obj2);

//spread operators
obj3 = { ...obj1 };
console.log(obj3);

//5. rest parameters
function someOtherFunction(a, b, ...c) {
  console.log(c);
  return a + b;
}
console.log(someOtherFunction(1, 2));
console.log(someOtherFunction("Bharat", " 7", 3));

//6. arguments object
function someOtherFunction(a, b, ...c) {
  console.log(arguments);
  return a - b;
}
console.log(someOtherFunction(1, 2));
console.log(someOtherFunction("Bharat", " 7", 3));

//7.
function sum1(a, b) {
  console.log(arguments);
  return a + b;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 6));

function sum(a, b, ...c) {
  const result = c.reduce((acc, item) => {
    acc += item;
    return acc;
  }, a + b);
  return result;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));
