/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  //Push a new store into the stores array

stores.push(store);

  // Return the 'stores' array that was inputted
  return stores;

}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
  
  // This function will remove a store at the given position

  // Remove that store from the given position
  // Create a method that removes store
  stores.splice(index, 1);
  
  // Remove store from front of array
  
  // Remove store from end of array
  //Return the same stores array 
  return stores;

}


/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
  // Create a COPY of the `store` object
  const newObj = Object.assign({}, store);
  // Create a new array for boardgames key
  Object.defineProperty(store, 'boardGames', {
    value: []
    
  });
  Object.defineProperty(store, 'address', {
    value: {}
    
  });

  //const newArr = Object.keys(store.boardGames);
   // Create a new array for address key
  
     // Return the copy of the 'store' object - not the original object
  return newObj;

}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
