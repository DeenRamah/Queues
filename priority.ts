class PriorityQueue<T> {
  private items: { element: T; priority: number }[] = [];

  enqueue(element: T, priority: number) {
    const newNode = { element, priority };
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > newNode.priority) {
        this.items.splice(i, 1, newNode);
        added = true;
        break;
      }
    }
    if (!added) this.items.push(newNode);
  }

  dequeue(): T | undefined {
    return this.items.shift()?.element;
  }
}
