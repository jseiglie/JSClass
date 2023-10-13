/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // window.onload --> the first thing that will happen when you access your website
  //write your code here
  console.log("Just another message");
  /*
  camelCase ---> thisIsUsingCamelCase
  PascalCase ---> ThisIsPascalCase
  var names must be meaningful.
  */
  //funtion nameOfFunction (parameters) {}
  //params are as variables
  function classicFunction(a, b) {
    return a + b;
  }
  //create a const variable = (params) => {}
  const arrowFunction = (a, b) => a + b;
  //to exuecute we use the ()
  console.log(classicFunction(598607857, 7983547));
  console.log(arrowFunction(50, 2));

  console.log(arrowFunction(classicFunction(5, 10), classicFunction(10, 80)));

  const sayHi = name => `Hello there, ${name}`;
  console.log(sayHi("Pepe"));

  const fullPresentation = (name, age, city) =>
    `Hello, my name is ${name}, I'm ${age} years old and I'm on ${city}`;
  //

  console.log(fullPresentation("Pepe", 25, "Sevilla"));
  //Math ---> js module for mathematic operations.
  //Math.random() --> generates a random number, BETWEEN 0-1
  // Math.floor() --> will round DOWN to the closest integer

  //arrays length starts at 1
  const myArray = [5, 8, 4, 5, 6, 3, 9, 8, 7];
  console.table(myArray);
  console.log(myArray[5]);

  const generateRandom = arr => {
    return Math.floor(Math.random() * arr.length);
  };
  console.log(generateRandom(myArray));
  console.log("my random log->", myArray[generateRandom(myArray)]);

  const generateRandomAndExtractFromArray = arr => arr[generateRandom(arr)];

  console.log("my duper function", generateRandomAndExtractFromArray(myArray));

  function name() {}
  const myfunctionTwice = () => {};

  //callback functions
  // Higher Functions
  //gives position and value
  for (let i = 0; i < myArray.length; i++) {
    console.log("i ->", i);
    console.log("myArray[i] ->", myArray[i]);
  }
  //for in gives position and value
  for (let el in myArray) {
    console.log("for in ->", el);
    console.log("for in getting value ->", myArray[el]);
  }
  // for of gives value
  for (let el of myArray) {
    console.log("for of ->", el);
  }

  //forEach
  const showIt = (num, index) => {
    console.log("forEach value ->", num);
    console.log("forEach index ->", index);
  };
  myArray.forEach(showIt);

  const people = [
    { name: "pepe", age: 50, status: "green" },
    { name: "maria", age: 40, status: "yellow" },
    { name: "jose", age: 20, status: "green" },
    { name: "barbara", age: 50, status: "blue" }
  ];
  //map
  const presentation = person => {
    console.log(`${person.name} is ${person.age} years old!`);
  };

  people.map(presentation);

  //filter
  const greaterThanFive = myArray.filter(num => num % 2 === 0);
  console.log(greaterThanFive);

  const selectFiftyAndYellow = person =>
    person.age === 50 && person.status === "green";

  const peopleAgedFifty = people.filter(selectFiftyAndYellow);
  console.log(peopleAgedFifty);

  //reduce
  const reducerFunction = (a, b) => a + b;
  const reduced = myArray.reduce(reducerFunction);
  console.log(reduced);

  //when an ARROW function receives MORE than one parameter, the () is a MUST, but for one, no need ()

  const multi = (a, b) => {
    let result = a + b;
    return result;
  };

  const add = (a, b) => {
    let result = a * b;
    return result;
  };

  const divide = (a, b) => {
    let result = a / b;
    return result;
  };
  // arrays and objects are mutable. OBJECTS points to memory addresses
  const testArray = [1];
  testArray.push(55);
  testArray.push(66);
  testArray.push(77);
  console.log(testArray);
  testArray.pop();
  console.log(testArray);

  // YOU CAN NOT RE ASSIGN VALUE TO A CONSTANT
  let state = "green";
  state = "red";
  //operator to ASSIGN value, its =

  const myFavoritPerson = {
    city: "Sevilla"
  };

  console.log(myFavoritPerson);
  myFavoritPerson.status = "blue";
  console.log(myFavoritPerson);
  myFavoritPerson["alive"] = true;
  console.log(myFavoritPerson);

  //warehouse obj being filled with the storeIt function
  const warehouse = {};

  const storeIt = (item, ammount) => {
    warehouse[item] = ammount;
    console.log(warehouse);
  };

  storeIt("softdrinks", 6);
  storeIt("beer", 12);
  storeIt("ham", "1kg");
  storeIt("pizza", 5);
};
