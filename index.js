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
  
{
      stores.splice(index,1)
    return stores
  }
}
//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. 
//An array containing the deleted elements.
//If only one element is removed, an array of one element is returned.
//If no elements are removed, an empty array is returned.
//stores.splice(); -> this will remove index from a certain spot with return the orignal array with the changes 
//stores.splice(index, index.length - 1)//not a passable option;//stores.splice(index, 2)//second option, didn't pass by itself

/** 
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) { 
  return JSON.parse(JSON.stringify(store))
}


//duplicating the object w/o having a shallow copy 
//shallow copy//>Object.assign({},a) 
//"deep" copy //>JSON.parse(JSON.stringify(a))
//What is the difference between shallow and deep copy in JavaScript?
//A deep copy means that all of the values of the new variable are copied and disconnected from the original variable. 
//A shallow copy means that certain (sub-)values are still connected to the original variable. To really understand copying, you have to get into how JavaScript stores values.
module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
