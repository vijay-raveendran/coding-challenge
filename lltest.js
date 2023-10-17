const {
    SortedLinkedList,
    SortedLinkedListNode,
  } = require("./solution/sorted-linked-list");


  test = () => {
    const ll = new SortedLinkedList();

    ll.insert({
      last: {
        date: 1,
        msg: "First element",
      },
    });

    ll.insert({
      last: {
        date: 2,
        msg: "Second Element",
      },
    });
  
    ll.insert({
      last: {
        date: -200,
        msg: "Third Element",
      },
    });
  
    ll.insert({
      last: {
        date: -1,
        msg: "Fourth element",
      },
    });

    ll.print();

  }

  test();