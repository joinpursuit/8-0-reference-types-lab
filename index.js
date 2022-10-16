/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  const result = [];
  {
    stores.push(store)



  }
  return stores
}
//Brainstorming Attempts---V
//console.log(stores)
//let newStores = stores(i) ;
//for (let i = 0; i < stores.length - 1; i++)
//Array.prototype.push()
//push() the new store to the end of the array in the object

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
  const result = [];
  {
    if (index >= 1) {
      stores.splice(index)//>first option
    }
    return stores
  }


}

// Brainstorming Attempts --V
//let removed = stores.splice(2, 0)
// {
//stores.splice(); -> this will remove index from a certain spot with return the orignal array with the changes 
// //for (let i = 0; i <= stores.length - 1; i++); {
//   stores.splice(i)
// }
//stores.splice(index, index.length - 1)//not a passable option;//stores.splice(index, 2)//second option, didn't pass by itself

/** 
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) { }

//duplicating the object w/o having a shallow copy 
module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
