/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */

 function addNewStore(stores, store) {

  //push store to stores array of objects
  stores.push(store);

  //return the array I just pushed into array of objects
  return stores;
}


/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */

function removeStoreAtPosition(stores, index) {
  //input array of objects, a number representing index
  //output: stores array
  //remove array at specific index position
  stores.splice(index, 1);
  //return stores afterwards
  return stores;
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {

  // //declare a variable called copyOfStore which will be initialized to empty object
  const copyOfStore = {};

  //create copy of object
  Object.assign(copyOfStore, store);

  //create a copy of boardgames from original store
  copyOfStore.boardGames = copyOfStore.boardGames.slice();

  //Why don't we just declare a variable and assign it the object as a key
  const myObj = copyOfStore.address;
  const objToPutInCopyOfStore = {};

  //create copy of referenced location
  Object.assign(objToPutInCopyOfStore, myObj);

  //re-assign copyOfStore.address to objToPutincopy
  copyOfStore.address = objToPutInCopyOfStore;
  return copyOfStore;
}


module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};