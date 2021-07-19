/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  // created variable for stores current state
let sameStore = stores
// pushed store object to the end of stores array  
stores.push(store)
// returned store array that was inputted
    return sameStore
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
// created variable for stores current state
  let sameStore = stores
// removed store at the specified index
stores.splice(index,1)
//returned store array that was inputted
return sameStore

}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
// created a copy of the store array and assigned it a variable by first converting it into a JSON String and then creating a new object with those cloned key: value pairs and assigning it a new variable 
  let storeCopy = JSON.parse(JSON.stringify(store))
 // return the cloned store 
  return storeCopy

}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
