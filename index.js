/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  // to add a new store to end of list, we use push method
  stores.push(store)
  return stores
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
  // splice method removes at the given index position and 1 indicates how many items to remove
  
    stores.splice(index,1)
    
    return stores
}
/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */

function duplicateStore(store) 
{
  // both methods work, json.parse is deep copy, spread operator is shallow copy

 // ... is spread operator, which creates a shallow copy of original object, and then we use ... again to create inner array and inner object
 
 // method 1
 
 // newObject = {...store}
  // newObject.boardGames = [...store.boardGames]
  // newObject.address = {...store.address}

  //method 2

  // JSON - javascript object notation
  // stringify converts everything in class
  //parse then look into string and convert into an object
 
  let newObject = JSON.parse(JSON.stringify(store))
  return newObject
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
