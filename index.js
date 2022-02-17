/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  console.log(stores.push(store));
  return stores;
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
  for (let i = 0; i < stores.length; i++) {
    if (stores[index] || stores[index])
      if (stores)
        //then remove the store at the given array
        stores.shift();
    if (stores) stores.pop();
  }
  return stores;
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
  //retrurn a copy of the given store object
  //let stores = store;
  //return stores;
  //return a new object, not the same object store
  const addNewStore = boardGames.slice(0, 2);
  const newaddress = address.unit;
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
