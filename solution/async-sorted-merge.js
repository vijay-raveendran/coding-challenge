"use strict";
const {
  SortedLinkedList,
  SortedLinkedListNode,
} = require("./sorted-linked-list");
const { BinarySearchTree } = require("./binary-search-tree");
// Print all entries, across all of the *async* sources, in chronological order.

module.exports = async (logSources, printer) => {
  return new Promise((resolve, reject) => {
    try {
      const bst = new BinarySearchTree(printer);
      const a = [];
      logSources.forEach(async (element) => {
        await bst.asyncInsert(element);
      });

      bst.print();
      resolve(printer.done());

    } catch {
      reject();
    }
  });
};
