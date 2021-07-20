/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  // add store to the end of list
  let shopping = stores.push(store);
  // return original array
  return stores
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
// remove one store at given position
let arr = stores.splice(index, 1);
// return stores array
return stores
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) { 
// let arrCopy = {};
let arrCopy = Object.assign({}, store);
arrCopy.boardGames = arrCopy.boardGames.slice();
let newObj = arrCopy.address;
// let storeCopy = {};
let storeCopy = Object.assign({}, newObj);
arrCopy.address = storeCopy;
return arrCopy;
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
