class CircularQueue<T> {
  private items: (T | null)[] = [];
  private front = 0;
  private rear = 0;
  private maxSize: number;

  constructor(size: number) {
    this.maxSize = size;
    this.items = new Array(size).fill(null);
  }

  enqueue(item: T): boolean {
    if ((this.rear + 1) % this.maxSize === this.front) return false; 
    this.items[this.rear] = item;
    this.rear = (this.rear + 1) % this.maxSize;
    return true;
  }

  dequeue(): T | null {
    if (this.front === this.rear) return null;
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.maxSize;
    return item;
  }
}
