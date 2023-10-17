class SortedLinkedList {
    constructor(printer) {
      this.head = null;
      this.size = 0;
      this.printer = printer
    }
  
    /**
     * The insert function compares the data in the linkedlist and adds the new
     * data at the appropriate place. 
     * @param {*} data the LogEntry data to be stored
     * @deprecated 
     */
    insert = data => {
      
      // 1. First check head isn't null
      if (this.head === null) {
        this.head = new SortedLinkedListNode(data);
        this.size++;
        return;
      }
      
  
      // TODO: This is super messy
      if (data.last.date < this.head.data.last.date) {
        let elem = new SortedLinkedListNode(data);
        elem.next = this.head;
        this.head = elem;
        return;
      }
  
      let ptr = this.head;
  
      while (ptr !== null) {
  
        
  
        if (ptr.data.last.date < data.last.date && ptr.next == null) {
          let elem = new SortedLinkedListNode(data);
          elem.next = null;
          ptr.next = elem;
          break;
        }
  
        if (ptr.next.data.last.date >= data.last.date) {
          let elem = new SortedLinkedListNode(data);
          elem.next = ptr.next;
          ptr.next = elem;
          break;
        }
        ptr = ptr.next;
      }
      
      
  
      // this.print();
      this.size++;
    }

    insert2 = data => {

        // Empty head
        if (this.head === null) {
            this.head = new SortedLinkedListNode(data);
            this.size++;
            return;
        }

        // Insert at head
        if (data.last.date < this.head.getData().date) {
            const elem = new SortedLinkedListNode(data);
            elem.next = this.head;
            this.head = elem;

            this.size++;
            return;
        }

        let ptr = this.head;

        while (ptr.next && ptr.next.getData().date < data.last.date) {
            ptr = ptr.next;
        }

        // Insert at ptr
        const elem = new SortedLinkedListNode(data);
        elem.next = ptr.next;
        ptr.next = elem;

        
        

        this.size++;
    }
  
    /**
     * Goes through the whole list and prints the data stored at each element.
     * TODO: Do we just need to print out the message?
     */
    print = () => {
      let ptr = this.head;
  
      while (ptr !== null) {
        this.printer.print(ptr.data.last)
        // console.log(ptr.data.last)
        ptr = ptr.next;
      }
    }
  
    size = () => {
      return this.size;
    }
  }
  
  
  class SortedLinkedListNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }

    getData = () => this.data.last;
    
  }

  module.exports = {
    SortedLinkedList,
    SortedLinkedListNode
  }