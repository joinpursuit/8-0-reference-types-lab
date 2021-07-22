/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  stores.push(store) //want to mutate the array we're referencing
  return (stores)
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
  //delete or splice to mutate instead of clone
  stores.splice(index,1)
  return stores
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {//Object.entries(store) can be used to access the key value pairs of the object
let newStore = {}
//   for (const [key, value] of Object.entries(store)) {//looping through all the key:value pairs of the object
//     if (key === 'boardGames'){ //checking for the boardGames more specifically because .isArray breaks when ran on a object
//       newStore[key] = store[key].slice() //slice to make a copy of array
//     }else if (key === 'address') { //Check for address object. Probably want something a bit more versatile for the if checks
//       newStore[key] = {} //created an empty object for an undefined error
//       for (const [key2, value2] of Object.entries(store[key])) { //Same as above with address object
//         newStore[key][key2] = value2
//       }
//     }else {
//       newStore[key] = value
//     }
//   }
//   return newStore
// }
for (const [key, value] of Object.entries(store)) {
  if (Array.isArray(store[key])){ //seems to work because it isn't trying to look for a method that doesn't exist for other data types.
  // if (store[key].isArray()){  //Original error
    newStore[key] = store[key].slice() 
  }else if (typeof(store[key]) === 'object') { 
    newStore[key] = {}
    for (const [key2, value2] of Object.entries(store[key])) {
      newStore[key][key2] = value2
    }
  }else {
    newStore[key] = value
  }
}
return newStore
}


module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};

