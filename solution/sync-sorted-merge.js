"use strict";
const { SortedLinkedList, SortedLinkedListNode } = require("./sorted-linked-list");
const { BinarySearchTree } = require('./binary-search-tree');
// Print all entries, across all of the sources, in chronological order.

/**
 * Thoughts:
 * 1. Prob wanna use a sorted linked list 
 * Advantages are adding is O(n)
 * Printing is O(n)/
 * Could use secondary data structure to store pointers to specific elements to make insertion faster
 */

/**
 * 
 * @param {*} logSources 
 * @param {*} printer 
 * @returns 
 */


module.exports = (logSources, printer) => {

  // const ll = new SortedLinkedList(printer);

  // for (let i = 0; i < logSources.length; i++) {
  //   ll.insert2(logSources[i]);
  // }
  // ll.print();

  const bst = new BinarySearchTree(printer);
  logSources.forEach(element => {
    bst.insert(element)
  });

  bst.print();
  printer.done();
};

// module.exports = {
//   SortedLinkedList,
//   SortedLinkedListNode
// }