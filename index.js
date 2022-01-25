/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  //stores is an array of objects, store is an object, so stores can use the push method
  //to add the store at the end of the stores array. The push method is desctructive method.
  stores.push(store);
  //return the original array of objects
  return stores;
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
  //splice() method is a destructive method
  //stores.splice(index,1) means remove one element at the assigned index of the stores array
  stores.splice(index,1);
  return stores;
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
  let obj = {}; //create a new object
  for(let key in store){ //iterate through the object
    if(Array.isArray(store[key])){ //if the property is an array
      obj[key] = [].concat(store[key]); //then assign the same array by concat with empty array
    }else if(typeof store[key] === 'object'){ //although array is object too, but array will be tested first
      obj[key] = {}; //create a new empty obj
      // copy everything from store[key] to the obj[key], this is the shallow copy, but inside store[key] only has primitive data types. 
      Object.assign(obj[key],store[key]); 
    }else{
      obj[key] = store[key];//if it is not object or array, then for primitive type just do the assignment
    }
  }
  return obj;
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
