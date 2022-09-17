class Stack {

    constructor() {
      this.items = [];
    }
  
    push(data) {
      this.items.push(data);
    }
  
    pop() {
      if (this.items.length > 0) 
        return this.items.pop();
      return -1;
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  
  export default Stack;