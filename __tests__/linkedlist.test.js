const {
  SortedLinkedList,
  SortedLinkedListNode,
} = require("../solution/sync-sorted-merge");

describe("Print out list", () => {
  let ll = new SortedLinkedList();

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
      date: 4,
      msg: "Third Element",
    },
  });

  ll.insert({
    last: {
      date: 3,
      msg: "Fourth element",
    },
  });

  test("It should print out a good list", () => {
    ll.print();
  });

  test('Size should be 4', () => {
    expect(ll.size).toEqual(4);
  })
});
