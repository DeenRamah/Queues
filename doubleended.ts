class Deque<T> {
  private items: T[] = [];

  addFront(item: T) {
    this.items.unshift(item);
  }

  addRear(item: T) {
    this.items.push(item);
  }

  removeFront(): T | undefined {
    return this.items.shift();
  }

  removeRear(): T | undefined {
    return this.items.pop();
  }
}
