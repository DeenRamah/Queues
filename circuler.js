class CircularQueue {
  constructor(size) {
    this.items = Array(size).fill(null);
    this.front = 0;
    this.rear = 0;
    this.maxSize = size;
  }

  enqueue(item) {
    if ((this.rear + 1) % this.maxSize === this.front) return false;
    this.items[this.rear] = item;
    this.rear = (this.rear + 1) % this.maxSize;
    return true;
  }

  dequeue() {
    if (this.front === this.rear) return null;
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.maxSize;
    return item;
  }
}
