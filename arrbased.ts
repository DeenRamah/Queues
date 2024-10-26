class ArrayQueue<T> {
  private queue: T[] = [];
  private front = 0;
  private rear = 0;

  enqueue(item: T) {
    this.queue[this.rear++] = item;
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;
    const item = this.queue[this.front];
    this.queue[this.front++] = undefined as unknown as T; 
    return item;
  }

  isEmpty(): boolean {
    return this.front === this.rear;
  }
}
