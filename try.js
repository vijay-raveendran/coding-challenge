const {
    SortedLinkedList,
    SortedLinkedListNode,
  } = require("./solution/sync-sorted-merge");


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
        date: 1,
        msg: "Third Element",
      },
    });
  
    ll.insert({
      last: {
        date: 3,
        msg: "Fourth element",
      },
    });

    ll.print();

  }

  test();