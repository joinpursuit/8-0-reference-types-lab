/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */

// Create a new object - store
// Create a new variable
// Push the object 'store' in the 'stores' object array list
// Use the .push() to add the new 'store' object
// Return the same 'stores' array 

function addNewStore(stores, store) {
  let newStore = stores.push(store);
  return stores
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */



// Remove a specific index of the store from the list. 
// Use the .splice() to the remove the 'store' at a the end of the list.
// Return the same stores list

function removeStoreAtPosition(stores, index) {
  let endOfStore = stores.splice(index, 1);
  // Remove store from the beginning of the list (index 0).
  //let startOfStore = stores.splice(index, index);
  return stores;
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
// Create a duplicate 'store' object. 
// Use object.assign method to duplicate the 'store' object. 
// Create a store object to equal to a single store. 
// Return the updated object. 
// New array for the `boardGames` key: use pathfile store.boardGames.
// New object for the `address` key: use pathfile store.address.

function duplicateStore(store) {
  let store1 =  Object.assign({}, store);
  store1.boardGames = store.boardGames.slice();
  let storeAddress =  Object.assign({}, store.address);
  store1.address = storeAddress
  return store1;
}


module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
