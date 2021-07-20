/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  // index                                                0                     1                 2                                                             
  // input: stores is an array of stores objects [{store properties}, {store properties}, {store properties} -> , {new stores}] 
  // and store is an object {store properties}
  // output: returns an array of objects with a new object

  // problem: what array method do you use to add to an array
  stores.push(store);

  // return: the array of objects, stores
  return stores
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
  // index                                            0                     1                 2                                                             
  // input: stores is an array of objects [{store properties}, {store properties}, {store properties}] 
  // and index is a number that represents the index of the store to be removed
  // output: an array of objects with on less store object

  // problem: how do you handel removing any object in an any position of an array without hardcoding an actual index number
  // solution: the splice method

  stores.splice(index, 1)



  // variables: iffy new array

  // problem: how do you handel removing any object in an any position of an array without hardcoding an actual index number
  // solution: loop through all the indexes of an array to find the store you are trying to remove
  // iterate over objects in a array 
     // if the index of the object that needs to be removed is the last index I can remove the object using the -> .pop() method
     // else if the index of the object that need to be removed is at index 0 I can remove that object using the -> .shift() method
     // else the index of an object that need to be removed is in the middle of the array I can remove that object using -> .slice() method .concat || .splice()
        // have an empty array and push it



  // return: new array of objects that doesn't include the object
  return stores
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
  // input: store is an object that represents a single store
  // output: a duplicated store object 

  // problem: how to duplicate an object in javascript
  // solution: spread syntax (...)
  let copyOfStore = {...store}

  copyOfStore.boardGames = [...store.boardGames]

  copyOfStore.address = {...store.address}
  
  // return a duplicate store object which is not the same as the parameter store 
  return copyOfStore
}

// const store = {
//   name: "Gamestoria",
//   boardGames: [
//     "Terra Mystica",
//     "Alhambra",
//     "Scythe",
//     "Carcassonne",
//     "Azul",
//   ],
//   address: {
//     street: "42-11 Broadway",
//     city: "Astoria",
//     state: "NY",
//     zip: "11103",
//   },

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
