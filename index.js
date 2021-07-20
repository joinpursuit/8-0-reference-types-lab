/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  // *push object store to stores array
  let result = stores.push(store);
  // return modified stores array
  return stores;
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
  // use splice to remove a store at a given index from the stores array
  let result = stores.splice(index, 1);
  // return stores
  return stores;
}


/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {

  // if I understand the definition of "duplicate" correctly, there are 3 ways to copy objects
  // spread syntax, object.assign method, JSON.stringify & JSON.parse() methods
  // let's use JSON methods bc of 'deep copy'
  const duplicatedStore = JSON.parse(JSON.stringify(store));
  // return the duplicated version of the object 'store'
  return duplicatedStore;



  // const duplicatedCopy = Object.assign({}, store);
  // let something = store.boardGames = [];
  // let somethingElse = store.address = {};
  // return duplicatedCopy;



  // // declare and assign a variable a store object
  // let duplicatedCopy = store;
  // // return the new variable
  // return duplicatedCopy
  
}


module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};


// const mood = 'HAPPY';
// console.log(mood.toLowerCase());
// console.log(mood);



// const hobbies = ["reading", "playing video games"];
// hobbies[hobbies.length] = "biking";

// console.log(hobbies);




// const videoGames = {
//   description: "playing video games",
// };
// const reading = videoGames;
// reading.description = "reading";

// console.log(videoGames, reading);




// const louie = {
//   name: "Louie James",
//   hobbies: ["reading", "playing video games", "biking"],
// };
// const jody = {
//   name: "Jody Hawkins",
//   hobbies: louie.hobbies,
// };

// console.log(louie === jody);




// const louie = {
//   name: "Louie James",
//   hobbies: ["reading", "playing video games", "biking"],
// };
// const jody = {
//   name: "Jody Hawkins",
//   hobbies: louie.hobbies,
// };

// console.log(louie.hobbies === jody.hobbies);




// const louie = {
//   name: "Louie James",
//   hobbies: ["reading", "playing video games", "biking"],
// };
// const jody = {
//   name: "Jody Hawkins",
//   hobbies: louie.hobbies,
// };

// louie.hobbies.pop();
// console.log(louie.hobbies, jody.hobbies);




// const louie = {
//   name: "Louie James",
//   hobbies: ["reading", "playing video games", "biking"],
// };
// const jody = {
//   name: "Jody Hawkins",
//   hobbies: louie.hobbies.slice(0, 2),
// };

// console.log(louie.hobbies === jody.hobbies);
// console.log(jody.hobbies);




// const louie = {
//   name: "Louie James",
//   hobbies: ["reading", "playing video games", "biking"],
// };
// const jody = {
//   name: "Jody Hawkins",
//   hobbies: louie.hobbies.slice(0, 2).concat("coding", "painting"),
// };

// console.log(jody.hobbies);