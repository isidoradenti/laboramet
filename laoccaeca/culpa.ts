const queue = new Queue();

queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');

console.log(queue.next()); // 'a'
console.log(queue.next()); // 'b'
console.log(queue.next()); // 'c'
console.log(queue.next()); // undefined
