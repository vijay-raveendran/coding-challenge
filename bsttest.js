const { BinarySearchTree, Node } = require('./solution/binary-search-tree');


const bst = new BinarySearchTree();
bst.insert(15);
bst.insert(10);
bst.insert(20);
bst.insert(8);
bst.insert(12);
bst.insert(17);
bst.insert(25);

bst.inOrderTraversal((data) => console.log(data));