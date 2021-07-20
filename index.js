/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
 function addNewStore(stores, store) {
  stores [0] = store
  return stores
}

/**
 * Removes a store object at the given position.
function removeStoreAtPosition(stores, index) {

   stores.splice(index, 1);

  return stores

}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
  let copiedStore = {};
  let objVal = Object.values(store);//array
  let objKey = Object.keys(store); //array
  for(let i = 0; (i < objVal.length); i++) {
    let keyName = objKey[i];
    if(Array.isArray(objVal[i])) {
       copiedStore[keyName] = objVal[i].splice(0);
    } else if(typeof objVal[i] !== "object") {
      copiedStore[keyName] = objVal[i];
    } else if (typeof objVal[i] === "object") {
      copiedStore[keyName] = {...objVal[i]};
    }
  }
  return copiedStore;
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};


