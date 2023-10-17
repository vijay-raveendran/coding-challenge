class Node {
  // Insertion is O(lgn) vs O(n) of the LL
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }

  getData = () => this.data.last.date;
}

class BinarySearchTree {
  constructor(printer) {
    this.printer = printer;
    this.root = null;
  }

  /**
   * Do an in-order traversal of the tree to print out the logs in chronological order
   */
  print = () => {
    this.inOrderTraversal((data) => this.printer.print(data.last));
  };

  /**
   * Creates a new Node and inserts it at head if null
   * otherwise looks down the tree in lg n fashion.
   * @param {any} data 
   */
  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  /**
   * Decides where to put newNode relative to node
   * by comparing the date values of the logSource data
   * @param {any} node 
   * @param {Node} newNode 
   */
  insertNode(node, newNode) {
    if (newNode.getData() < node.getData()) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Returns a promise instead of nothing so we can await the result. 
  async asyncInsert(data) {
    return new Promise((resolve, reject) => {
      const newNode = new Node(data);

      if (this.root === null) {
        this.root = newNode;
        resolve();
      } else {
        this.insertNode(this.root, newNode)
        resolve();
      }
    });
  }

  // Will return the logs in order due to the nature of a BST
  // The callback means we can do something (i.e. use the Printer) for each logSource
  inOrderTraversal(callback) {
    this.inOrderHelper(this.root, callback);
  }

  // Helper function to do an In-Order Traversal.
  inOrderHelper(node, callback) {
    if (node !== null) {
      this.inOrderHelper(node.left, callback);
      callback(node.data);
      this.inOrderHelper(node.right, callback);
    }
  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
