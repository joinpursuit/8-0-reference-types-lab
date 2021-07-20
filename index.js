/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */


function addNewStore(addedStore, store) {

  /**added store, being a reference type of of value, takes on the value of the store object, thus we can simply push added */

  addedStore.push(store)
  return addedStore;

  /**Adding the new store to the memory of store*/
  addedstore.push('NewStore');



}



/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
  /*Since we are NOT creating a new array, we will use "splice" insitead of "slice". */

  stores.splice(index, 1);
  /*since we didn't create a new array, we can retyrn the orginal 'stores' array. */
  return stores
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) { 
  /*creating the dup array */
    let arrCopy = Object.assign({}, store);
    /*boardgames key - not specifiying an argument in slice allows it to work on difference sized arrays*/
    arrCopy.boardGames = arrCopy.boardGames.slice();
    let newObj = arrCopy.address;
    let storeCopy = Object.assign({}, newObj);
    arrCopy.address = storeCopy;
    /*returns the new array */
    return arrCopy;
    }
   


module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
