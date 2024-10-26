class ArrayQueue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(item) {
    this.queue[this.rear++] = item;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    const item = this.queue[this.front];
    this.queue[this.front++] = undefined;
    return item;
  }

  isEmpty() {
    return this.front === this.rear;
  }
}
