class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    const newNode = { element, priority };
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > newNode.priority) {
        this.items.splice(i, 0, newNode);
        added = true;
        break;
      }
    }
    if (!added) this.items.push(newNode);
  }

  dequeue() {
    return this.items.shift()?.element;
  }
}
