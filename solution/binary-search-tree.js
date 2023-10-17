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

  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

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
  inOrderTraversal(callback) {
    this.inOrderTraversalNode(this.root, callback);
  }

  inOrderTraversalNode(node, callback) {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, callback);
      callback(node.data);
      this.inOrderTraversalNode(node.right, callback);
    }
  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
