"use strict";
const { BinarySearchTree } = require('./binary-search-tree');
// Print all entries, across all of the sources, in chronological order.

/**
 * 
 * @param {*} logSources 
 * @param {*} printer 
 * @returns 
 */


module.exports = (logSources, printer) => {

  // BST means O(lg n) insertion
  const bst = new BinarySearchTree(printer);
  logSources.forEach(element => {
    bst.insert(element)
  });

  bst.print(); // O(n) because traversal
  printer.done();
};
