/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */



function addNewStore(stores, store) {
  //Insert an obj element the end of the store objects
stores.push(store)

//Return the original array
return stores;
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
  
  //Removes an element from any given position
  stores.splice(index,1);

  //returns {Object[]}
return stores;

}

/**
 * Creates a duplicate of the `store` object. No references should be shared between 
 * the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. 
 * See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the 
 * store that was inputted.
 * 
 */

function duplicateStore(store) {
  //Makes a copy of the {Object} store 
    let copyStore = Object.assign({}, store);

    //Assigns a copy of the store.boardGames to copyStore.boardGames
    copyStore.boardGames = store.boardGames.slice()

    //Makes a copy of the store address 
    let address = Object.assign({}, store.address)

    //Point the copied address to the store address
    copyStore.address = address 

    //returns the copied object
  return copyStore;
}



module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
